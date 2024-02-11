import  { useState } from 'react';
import { Image } from 'react-bootstrap';
import Carousel, { Modal, ModalGateway } from "react-images";

function PhotoGallery(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
 
  function openLightbox(index)  {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  function closeLightbox () {
    setViewerIsOpen(false);
  };

  function importAll(r) {
    return r.keys().map(r);
  }

  var targetImages = [];
  const columnArray = [];

  if (props.tag === 'comics') {
    targetImages = importAll(require.context('../assets/comics', false, /\.(png|jpe?g|svg)$/));
  }

  const columnLength = targetImages.length/3;
  for (let i = 0; i < targetImages.length; i += columnLength) {
    columnArray.push(targetImages.slice(i, i + columnLength));
  }

  const images = (column) => column.map((image, i) => (
      <Image key={i} src={image} className="comic-image"/>
  ));

  const renderImages = (
        <div>
        <div className="images-container">
          { columnArray.map((column) => (
            <div className="column-container">{images(column)}</div>
          ))}
        </div>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={targetImages.map(x => ({
                  ...x
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
  )


  return (
    <div>
    {renderImages}
    </div>
  );
}

export default PhotoGallery;
