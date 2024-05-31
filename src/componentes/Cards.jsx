import { useContext } from "react";
import { ContextoGlobal } from "../context/GlobalContext";
import { Card } from "./Card";

const Cards = () => {
    const { cartas } = useContext(ContextoGlobal);
  
    
  
    return (
        <div className="container-fluid px-4 lg:px-32">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {cartas.map((historia, index) => (
          <Card
            key={index}
            id={historia.id}
            titulo={historia.titulo}
            texto={historia.texto}
            imagen={historia.imagen}    
          />
        ))}
      </div>
      </div>
    );
  }

  export default Cards;