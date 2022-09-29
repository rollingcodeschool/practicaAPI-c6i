import { Card, Row, Col } from "react-bootstrap";

const Frase = () => {
  return (
    <Card>
      <Card.Body>
      <Row>
        <Col md={4}>
          <img
            src="https://trello.com/1/cards/632a448eb47fe800d9bdef25/attachments/632cd86034034e0170124eec/download/image.png"
            alt="Homer Simpson"
            className="w-100"
          />
        </Col>
        <Col md={8}>
          <Card.Title>
            <h3>Homer Simpson</h3>
          </Card.Title>
          <Card.Text>
            Facts are meaningless. You could use facts to prove anithing that's
            even remotely true.
          </Card.Text>
        </Col>
      </Row>
      </Card.Body>
    </Card>
    // <section className="row bg-white my-5 p-5 m-1">
    //   <aside className="col-4">
    //   </aside>
    //   <aside className="col-8">
    //     <div>
    //     </div>
    //   </aside>
    // </section>
  );
};

export default Frase;
