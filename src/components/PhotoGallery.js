import  { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import Carousel, { Modal, ModalGateway } from "react-images";

function PhotoGallery(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  function importAll(r) {
    return r.keys().map(r);
  }

  var targetImages = [];
  const columnArray = [];

  if (props.tag === 'comics') {
    targetImages = importAll(require.context('../assets/comics', false, /\.(png|jpe?g|svg)$/));
  }

  const columnLength = targetImages.length/3;

  function openLightbox(columnIndex, imageIndex)  {
    const index = columnIndex * columnLength + imageIndex
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  function closeLightbox () {
    setViewerIsOpen(false);
  };

  for (let i = 0; i < targetImages.length; i += columnLength) {
    columnArray.push(targetImages.slice(i, i + columnLength));
  }

  const renderImages = (
        <div>
        <div className="images-container">
          { columnArray.map((column, columnIndex) => (
            <div className="column-container" key={`column-${columnIndex}`}>
              {
                column.map((image, imageIndex) => (
                <Image src={image} className="comic-image" key={`comic-${imageIndex}`} onClick={() => openLightbox(columnIndex, imageIndex)}/>
                ))
              }
            </div>
          ))}
        </div>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={targetImages.map(x => ({
                  src: x
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
