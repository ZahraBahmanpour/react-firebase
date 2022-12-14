import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddBook from "./AddBook";
import BooksList from "./BooksList";

function Home() {
  const [bookId, setBookId] = useState("");

  return (
    <>
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook bookId={bookId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList handleEdit={(id) => setBookId(id)} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
