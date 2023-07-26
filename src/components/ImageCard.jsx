import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/imageCard.css";

export const ImageCard = ({ image }) => {
  const [showModal, setShowModal] = useState(false);
  const [visits, setVisits] = useState(0);

  const handleShowModal = () => {
    if (image.id === 2 || image.id === 4) {
      setShowModal(true);
    }
    setVisits(visits + 1);
  };

  const handleClickPopup = () => {
    if (image.id % 2 !== 0) {
      const popupWindow = window.open("", "_blank", "width=800, height=400");
      popupWindow.document.write(
        `<img src="${image.src}" style="width: 100%; height: 100%; position: relative;" />`
      ); // Importante: posición relativa para la imagen

      // El evento onload garantiza que la imagen esté completamente cargada antes de ser agregada al cuerpo del documento del popup.
      //Creamos una nueva imagen
      // const imgElement = new Image();

      // // Definimos una función que se ejecutará una vez que la imagen esté completamente cargada
      // const imgLoad = () => {
      // console.log('Imagen cargada correctamente');
      // // const imgElement = new Image();
      // imgElement.src = image.src;
      // imgElement.style.width = '100%';
      // imgElement.style.height = '100%';
      // popupWindow.document.body.appendChild(imgElement);
      // }
      // // Agregamos el evento de carga de la imagen
      // imgElement.onload = imgLoad
      // // Establecemos la URL de la imagen
      // console.log('URL de la imagen:', image.src);
      // imgElement.src = image.src

      // imgElement.onerror = () => {
      // console.error('Error al cargar la imagen');
      //};

      const containerButton = popupWindow.document.createElement("div");
      containerButton.style.position = "absolute"; // Posicionamos los botones absolutamente en relación con la imagen
      containerButton.style.top = "90%";
      containerButton.style.left = "50%";
      containerButton.style.transform = "translate(-50%, -50%)"; // Centramos los botones completamente en la imagen
      containerButton.style.display = "flex";
      containerButton.style.justifyContent = "center";
      containerButton.style.marginTop = "10px";
      popupWindow.document.body.appendChild(containerButton);

      // Creamos los botones y los agregamos al cuerpo del documento del popup
      const okButton = popupWindow.document.createElement("button");
      okButton.innerText = "OK";
      okButton.style.margin = "5px";
      okButton.style.padding = "10px 20px";
      okButton.style.borderRadius = "8px";
      okButton.style.backgroundColor = "rgba(143, 180, 228, 0.1)";
      okButton.onclick = handleOk;
      containerButton.appendChild(okButton);

      const closeButton = document.createElement("button");
      closeButton.innerText = "Cerrar";
      closeButton.style.margin = "5px";
      closeButton.style.padding = "10px 20px";
      closeButton.style.borderRadius = "8px";
      closeButton.style.backgroundColor = "rgba(143, 180, 228, 0.2)";
      closeButton.onclick = () => popupWindow.close();
      containerButton.appendChild(closeButton);
    } else {
      handleShowModal();
    }
  };

  const handleOk = () => setVisits(visits + 1);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="card d-flex flex-column justify-content-between">
        <div className="card-container">
          <div onClick={handleClickPopup}>
            <img
              className="card-img-top"
              src={image.src}
              alt={`Imagen ${image.id}`}
            />
          </div>
          <div className="card-body d-flex flex-column align-items-center">
            <p className="card-text fst-italic">{image.description}</p>
            <button className="btn btn-outline-primary fw-bold">
              <FontAwesomeIcon icon={faEye} /> {visits}
            </button>
          </div>
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Body>
            <img
              src={image.src}
              alt={`Imagen ${image.id}`}
              style={{ width: "100%" }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
