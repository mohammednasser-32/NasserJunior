import { Image } from 'react-bootstrap';
import config from '../config'
import axios from 'axios';
import  { useState, useEffect } from 'react';

function ClientsFeatures(props) {
  const [ targetImages,changeImages ] = useState([])

  useEffect(() => {
    const fetchImages = async()=>{
      const url = `${config.baseUrl}${props.tag}.json`
      axios.get(url)
        .then(function (response) {
          changeImages(response.data.resources)
        }).catch(function (error) {
          console.log(error)
        })
    }
    fetchImages()
  }, []);

  const images = targetImages.map((image, i) => <Image key={i} src={`${config.imageUrl}${image.public_id}.${image.format}`} className="client-image p-5"/>)
  return (
    <div className="p-4">
      <div className="d-flex justify-content-center">
        <h2 className="m-2 hand-text">{props.tag === 'clients' ? 'Clients' : 'Featured in'}</h2>
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {images}
      </div>
    </div>
  );
}

export default ClientsFeatures;
