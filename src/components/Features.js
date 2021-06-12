import { Container, Row, Col, Image } from 'react-bootstrap';
import uclLogo from './../assets/clients/ucl_logo.png'
import ammarLogo from './../assets/clients/ammar_logo.png'
import sLogo from './../assets/clients/scientific_american_logo.png'


function Features() {
  return (
    <div className="p-4 clients-section">
      <div className="d-flex justify-content-center">
        <h2 className="m-2 hand-text">Featured in</h2>
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <Image src={uclLogo} className="client-image p-5"/>
        <Image src={sLogo} className="client-image p-5"/>
        <Image src={ammarLogo} className="client-image p-5"/>
      </div>
    </div>
  );
}

export default Features;
