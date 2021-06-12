import config from '../config'
import axios from 'axios';
import  { useState, useEffect } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const breakpointColumnsObj = {
  default: 3,
  700: 2,
  500: 1
};

function PhotoGallery(props) {
  const [ images,changeImages ] = useState([])
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  useEffect(() => {
    const fetchImages = async()=>{
      const url = `${config.baseUrl}listFolder?path=/${props.folder}`
      axios.get(url,{ 
        auth: {
          username: config.imageioUsername,
          password: config.imageioPassword
        }
      })  .then(function (response) {
        const array = response.data.images.reverse().map((image, i) => {
          image.src = image.url
          return {'src': image.url, 'width': image.width, 'height': image.height}
        });
        changeImages(array);
      })

    }
    fetchImages()
  }, []);
 
  function openLightbox(index)  {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  function closeLightbox () {
    setViewerIsOpen(false);
  };

  let rendered = ''
  if(images.length > 0) {
    rendered = (
        <div>
        <Gallery photos={images} direction={"column"} onClick={(event, { photo, index }) => {openLightbox(index)}} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={images.map(x => ({
                  ...x
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
  )
  }

  return (
    <div>
    {rendered}
    </div>
  );
}

export default PhotoGallery;
