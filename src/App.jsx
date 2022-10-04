import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import "./style.css";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      //mostrar el spinner
      setMostrarSpinner(true);
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      console.log(respuesta);
      const dato = await respuesta.json();
      console.log(dato[0]);
      setPersonaje(dato[0]);
      //mostrar el componete frase
      setMostrarSpinner(false);
    } catch (error) {
      console.log(error);
      //  mostrar un mensaje al usuario
    }
  };

  //condicion logica if, operador ternario ? :
  // (condicion logica)?(logica a ejecutar si cumplo la condicion logica):(logica a ejecutar si No cumplo la condicion logica)
  const mostrarComponente =
    mostrarSpinner === true ? (
      <Spinner></Spinner>
    ) : (
      <Frase personaje={personaje}></Frase>
    );

  return (
    <Container>
      <div className="m-5 text-center">
        <img
          src="https://trello.com/1/cards/632a448eb47fe800d9bdef25/attachments/632cd857ffabe0042d12baf2/download/image.png"
          alt="the simpsons"
          className="w-100"
        />
      </div>
      <div className="text-center">
        <Button
          className="botonNaranja mb-5"
          variant="warning"
          onClick={consultarAPI}
        >
          Obtener frase
        </Button>
      </div>
      {mostrarComponente}
      {/* {
         mostrarSpinner === true ? (<Spinner></Spinner>) : (<Frase personaje={personaje}></Frase>
        )
      } */}
    </Container>
  );
}

export default App;
