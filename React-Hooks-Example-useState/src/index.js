// Importamos useState para decir que tendremos estado en este componente
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  //De esta forma definimos un nuevo elemento en el estado de este componente.
  //[nombre,asignador] siempre se instancia de esta forma par.
  //= useState('feliz') con esto decimos que es un objeto de estado y
  //le pasamos un valor por defecto, puede ser un entero, string, boleano... o incluso un objeto json.
  const [attitude, setAttitude] = useState("feliz");

  const changeStatus = () => {
    //Para cambiar el valor de nuestro objeto del estado,
    //simplemente llamamos a su "seteador"
    attitude === "feliz" ? setAttitude("contento") : setAttitude("feliz");
  };

  return (
    <div className="App">
      <h1>Piensa en colores</h1>
      <h2>Nuestro Rodolfo hoy está {attitude}.</h2>
      <button onClick={changeStatus}>Cambiar estado</button>
    </div>
  );
};

const rootElement = document.getElementById("root");

//Como podéis ver, estamos renderizando una función puramente javascript
//sin ningún tipo de clases de ES6
ReactDOM.render(<App />, rootElement);
