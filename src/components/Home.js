import Navigator from './Navigator';
import ClientsFeatures from './ClientsFeatures';
import { Container, Row, Col, Image } from 'react-bootstrap';
import seperator from './../assets/misc/seperator.png'
import React from 'react';


function Home() {
  return (
    <div>
      <Navigator/>
      <Container>
        <Row className="intro">
          <Col xs={12} md={6}>
            <h4 className="hand-text">
              Hello, I am Nasser Junior, an illustrator and cartoonist based in Alexandria, Egypt. I use comics to express my thoughts and feelings that can not be put into words. And I work commercially to help clients have their thoughts illustrated too and make their brand standout!
            </h4>
          </Col>
        </Row>
      </Container>
      <Image src={seperator} className="seperator"/>
      <ClientsFeatures target='Clients'/>
      <Image src={seperator} className="seperator"/>
      <ClientsFeatures target='Features'/>
    </div>
  );
}

export default Home;
