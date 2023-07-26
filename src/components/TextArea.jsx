import { useState } from "react";
import "../styles/textArea.css";

export const TextArea = () => {
  const [textArea, setTextArea] = useState("");

  const handleText = () => {
    fetch("/home.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("not ok!!");
        } else {
          return response.json();
        }
      })
      .then((data) => setTextArea(data.texto))
      .catch((error) => console.error("Error al cargar el texto: ", error));
  };

  const handleClearText = () => {
    setTextArea("");
  };

  return (
    <>
      <textarea
        className="text-area fst-italic"
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
        rows={5}
      />

      <div className="button-container">
        {/* Botón para cargar el texto */}
        <button
          className="btn btn-outline-primary fw-bold"
          onClick={handleText}
        >
          Cargar Texto
        </button>
        <button
          className="btn btn-outline-primary fw-bold"
          onClick={handleClearText}
        >
          Limpiar Texto
        </button>
        {/* Textarea para mostrar el contenido del archivo "home.json" */}
      </div>
    </>
  );
};
