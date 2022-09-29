import { Card, Row, Col } from "react-bootstrap";

const Frase = ({personaje}) => {
  return (
    <Card>
      <Card.Body>
      <Row>
        <Col md={4}>
          <img
            src={personaje.image}
            alt={personaje.character}
            className="w-100"
          />
        </Col>
        <Col md={8}>
          <Card.Title>
            <h3>{personaje.character}</h3>
          </Card.Title>
          <Card.Text>
           {personaje.quote}
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
