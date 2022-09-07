import { Col, Container, Row } from "react-bootstrap";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";

function App() {
  return (
    <>
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
