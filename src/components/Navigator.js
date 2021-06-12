import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import pencil from './../assets/misc/pencil.png'
import pencilDashed from './../assets/misc/pencil-dashed.png'
import comics from './../assets/misc/comics.png'
import comicsDashed from './../assets/misc/comics-dashed.png'
import work from './../assets/misc/work.png'
import workDashed from './../assets/misc/work-dashed.png'
import about from './../assets/misc/about.png'
import aboutDashed from './../assets/misc/about-dashed.png'

function Navigator() {
  function addDashes(name) {
    let image = document.getElementById(`${name}-image`)
    switch(name) {
      case 'pencil':
        image.src = pencilDashed
        break;
      case 'comics':
        image.src = comicsDashed
        break;
      case 'work':
        image.src = workDashed
        break;
      case 'about':
        image.src = aboutDashed
        break;
  
    } 
  }

  function removeDashes(name) {
    let image = document.getElementById(`${name}-image`)
    switch(name) {
      case 'pencil':
        image.src = pencil
        break;
      case 'comics':
        image.src = comics
        break;
      case 'work':
        image.src = work
        break;
      case 'about':
        image.src = about
        break;
    } 
  }

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3} className="d-flex justify-content-center p-4">
            <div>
              <Link to="/illustrations" className="section-clink-container d-flex flex-column" onMouseEnter={(e) => {addDashes('pencil')}} onMouseLeave={(e) => {removeDashes('pencil')}}>
                <Image src={pencil} className="client-image p-5" id="pencil-image"/>
                <h2 className="navigator-text hand-text">Illustrations</h2>
              </Link>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="d-flex justify-content-center p-4">
            <Link to="/comics" className="section-clink-container d-flex flex-column" onMouseEnter={(e) => {addDashes('comics')}} onMouseLeave={(e) => {removeDashes('comics')}}>
              <Image src={comics} className="client-image p-5" id="comics-image"/>
              <h2 className="navigator-text hand-text">Comics</h2>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={3} className="d-flex justify-content-center p-4">
            <Link to="/work" className="section-clink-container d-flex flex-column" onMouseEnter={(e) => {addDashes('work')}} onMouseLeave={(e) => {removeDashes('work')}}>
              <Image src={work} className="client-image p-5" id="work-image"/>
              <h2 className="navigator-text hand-text">Work</h2>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={3} className="d-flex justify-content-center p-4">
            <Link to="/about" className="section-clink-container d-flex flex-column" onMouseEnter={(e) => {addDashes('about')}} onMouseLeave={(e) => {removeDashes('about')}}>
              <Image src={about} className="client-image p-5" id="about-image"/>
              <h2 className="navigator-text hand-text">About</h2>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navigator;
