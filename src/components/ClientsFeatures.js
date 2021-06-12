import { Container, Row, Col, Image } from 'react-bootstrap';
import uclLogo from './../assets/clients/ucl_logo.png'
import ammarLogo from './../assets/clients/ammar_logo.png'
import sLogo from './../assets/clients/scientific_american_logo.png'
import config from '../config'
import axios from 'axios';
import  { useState, useEffect } from 'react';

function ClientsFeatures(props) {
  const [ targetImages,changeImages ] = useState([])
  useEffect(() => {
    const fetchImages = async()=>{
      const url = `${config.baseUrl}listFolder?path=/${props.target}`
      axios.get(url,{ 
        auth: {
          username: config.imageioUsername,
          password: config.imageioPassword
        }
      })  .then(function (response) {
        changeImages(response.data.images);
      })

    }
    fetchImages()
  }, []);

  const images = targetImages.map((image, i) => <Image key={i} src={image.url} className="client-image p-5"/>)
  return (
    <div className="p-4">
      <div className="d-flex justify-content-center">
        <h2 className="m-2 hand-text">{props.target === 'Clients' ? 'Clients' : 'Featured in'}</h2>
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {images}
      </div>
    </div>
  );
}

export default ClientsFeatures;
