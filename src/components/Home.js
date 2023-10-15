import Navigator from './Navigator';
import ClientsFeatures from './ClientsFeatures';
import { Container, Row, Col, Image } from 'react-bootstrap';
import space from './../assets/misc/space.png'
import React from 'react';
import  { useState } from 'react';


function Home() {

  return (
    <div className="home-container">
      <Navigator/>
      <Container>
        <Row className="intro">
          <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
            <h4 className="hand-text">
              Hello, I am Nasser Junior, an illustrator and cartoonist based in Alexandria, Egypt. I use comics to express my thoughts and feelings that can not be put into words, and I work commercially to help clients have their thoughts illustrated too and make their brand standout!
            </h4>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
            <Image src={space} className="space-image"/>
          </Col>
        </Row>
      </Container>
      {/* <div className="grey-bg">
        <ClientsFeatures tag='clients'/>
      </div>
        <ClientsFeatures tag='features'/> */}
    </div>
  );
}

export default Home;
