import config from '../config'
import axios from 'axios';
import  { useState, useEffect } from 'react';
import Gallery from "react-photo-gallery";
import { Button } from 'react-bootstrap';
import Carousel, { Modal, ModalGateway } from "react-images";

function PhotoGallery(props) {
  const defaultLimit = 15
  const [ images,changImages ] = useState([])
  const [ allImages,changeAllImages ] = useState([])
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [limit, changeLimit] = useState(defaultLimit);

  useEffect(() => {
    const fetchImages = async()=>{
      const url = `${config.baseUrl}${props.tag}.json`
      axios.get(url)
        .then(function (response) {
        let imagesArray = response.data.resources
        imagesArray = imagesArray.map((image) => {
          return {'src': `${config.imageUrl}${image.public_id}.${image.format}`, 'width': image.width, 'height': image.height}      
        })
        changeAllImages(imagesArray);
        imagesArray.length > limit ? changImages(imagesArray.slice(0, limit)) : changImages(imagesArray)
        }).catch(function (error) {
          console.log(error)
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

  function fetchMore() {
    let newLimit = limit + defaultLimit
    newLimit = newLimit > allImages.length ? allImages.length : newLimit
    changeLimit(newLimit)
    const newArray = allImages.slice(0, newLimit)
    changImages(newArray)
  }
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

  let seeMore = ''
  if(allImages.length > limit) {
    seeMore = (
    <div className="d-flex justify-content-center">
      <Button variant="dark hand-text see-more" onClick={fetchMore}>See More</Button>
    </div>
    )
  }

  return (
    <div>
    {rendered}
    {seeMore}
    </div>
  );
}

export default PhotoGallery;
