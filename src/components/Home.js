import ClientsFeatures from './ClientsFeatures';
import ComicViewer from './ComicViewer';
import { Container, Row, Col, Image } from 'react-bootstrap';
import space from './../assets/misc/space.png'
import React from 'react';

function Home() {

  return (
    <div className="home-container">
      <ComicViewer />
      <Container>
        <Row className="intro">
          <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
            <div className="intro-text hand-text">
            Hey there! I'm Mohammed Nasser, AKA Nasser Junior, your friendly neighborhood cartoonist. Drawing and writing comics is my way to spill out my unspoken thoughts and feelings and share them with the world, I can also sprinkle some creative magic to bring your ideas to life and give your brand that extra sparkle.{"\n"}
              <div>I hate to brag but... 260,000 Facebook fans cannot be wrong!</div>
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
            <Image src={space} className="space-image"/>
          </Col>
        </Row>
      </Container>
      <ClientsFeatures tag='clients'/>
      <ClientsFeatures tag='features'/>
    </div>
  );
}

export default Home;
