import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import '../../styles/index.css'

//create your first component
function Tareas() {
  const [tarea, settarea] = useState('');

  const [tareas, settareas] = useState([
    "hacer aseo", "hacer la cama", "kinesiologo", "Oftalmologo", "Desayunar", "Almorzar", "Once"
  ]);

  const handleChange = (event) => {
    settarea(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && tarea.toString() !== '') {
      const nuevaLista = [...tareas, tarea.toString()];
      settareas(nuevaLista);
      settarea('');
      console.log("Tareas actualizadas:", nuevaLista);
    }
  };

  const handleDelete = (index) => {
    const nuevaLista = tareas.filter((_, i) => i !== index);
    settareas(nuevaLista);
    console.log("Tarea eliminada. Lista actual:", nuevaLista);
  };


  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-header">
          <h2>LISTA DE TAREAS</h2>
        </div>
        <form onSubmit={e => e.preventDefault()} action="" method="" className="card-body">
          <input
            className="form-control rounded-1 mb-2"
            type="text"
            placeholder="Agregar nueva tarea..."
            aria-label="default input example"
            value={tarea}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <ul className="list-group w-100">
            {tareas.map((t, index) => (
              <li key={index}
                className="form-control d-flex justify-content-between p-2 my-1 border border-1 rounded-1">
                <label>{t}</label>
                <i
                  onClick={() => handleDelete(index)}
                  className="fa-solid fa-xmark align-self-center invisible">
                </i>
              </li>
            ))}
          </ul>
        </form>
        <div className="card-footer d-flex justify-content-start align-content-center text-body-secondary">
          <p>Cantidad de items es: {tareas.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Tareas;