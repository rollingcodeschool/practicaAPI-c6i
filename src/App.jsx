import "bootstrap/dist/css/bootstrap.min.css";
import { Container} from "react-bootstrap";
import './style.css'

function App() {
  return (
    <Container>
      <div className="m-5">
      <img
        src="https://trello.com/1/cards/632a448eb47fe800d9bdef25/attachments/632cd857ffabe0042d12baf2/download/image.png"
        alt="the simpsons"
      />
      </div>
      <button className="botonNaranja">Obtener frase</button>
    </Container>
  );
}

export default App;
