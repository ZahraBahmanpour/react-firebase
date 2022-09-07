import React, { useEffect, useState } from "react";
import { Form, Alert, InputGroup, Button } from "react-bootstrap";
import BookDataService from "../services/book.services";

const AddBook = ({ bookId }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState({ error: false, msg: "" });
  console.log(bookId);

  useEffect(() => {
    const getBook = async () => {
      setMessage("");
      try {
        const doc = await BookDataService.getBook(bookId);
        console.log("the record is :", doc.data());
        setTitle(doc.data().title);
        setAuthor(doc.data().author);
        setStatus(doc.data().status);
      } catch (err) {
        setMessage({ error: true, msg: err.message });
      }
    };
    if (bookId) {
      getBook();
    }
  }, [bookId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = { title, author, status };
    try {
      if (bookId) {
        await BookDataService.updateBook(bookId, newBook);
        setMessage({ error: false, msg: "Successfully Updated!" });
      } else {
        const res = await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "Successfully Added" });
        console.log(res);
      }
    } catch (e) {
      setMessage({ error: true, msg: e.message });
    }
  };

  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Check
            type={"checkbox"}
            id={`default-checkbox`}
            label={`available`}
            checked={status}
            onChange={() => setStatus((prevStatus) => !prevStatus)}
          />
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddBook;
