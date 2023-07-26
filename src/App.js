import { ImageCard } from "./components/ImageCard";
import { TextArea } from "./components/TextArea";
import images from "./exports/images.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/imageCard.css";
import "./styles/textArea.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="container">
          <h1 className="title">Piaceri della vita SPA</h1>
          <div className="row">
            {images.map((image) => (
              <div className="col" key={image.id}>
                <div className="image-container">
                  <ImageCard image={image} />
                </div>
              </div>
            ))}
          </div>
          <TextArea />
        </div>
      </div>
    </>
  );
}

export default App;
