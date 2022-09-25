import { Container } from 'react-bootstrap';
import { Row, Col, Image } from 'react-bootstrap';
import company from './../assets/misc/company.png';
import wonderer from './../assets/misc/wanderer.png';
import programmerDiaries from './../assets/misc/programmer-diaries.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function ComicsSeries() {
  return (
    <Container>
      <div className="series-container">
        <h1 className="hand-text text-center" style={{'marginBottom' : 40}}>Comics Series</h1>
        <Row>
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center p-4">
            <Link to="/comics-series/wonderer" className="remove-decoration d-flex flex-column" >
              <Image src={wonderer} className="series-image"/>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center p-4">
            <Link to="/comics-series/programmer-diaries" className="remove-decoration d-flex flex-column" >
              <Image src={programmerDiaries} className="series-image"/>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center p-4">
            <Link to="/comics-series/company" className="remove-decoration d-flex flex-column" >
              <Image src={company} className="series-image"/>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ComicsSeries;
