import { Container, Row, Col, Image } from 'react-bootstrap';
import about from './../assets/misc/about.jpg'
import React from 'react';

function About() {

  return (
    <Container className="about-section">
      <Row>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Image src={about} className="about-image"/>
        </Col>
        <Col xs={12} md={6} className="">
          <p className="hand-text about-text">
            {"Hello there, my name is Mohammed Nasser, AKA Nasser Junior, an illustrator and a cartoonist \
based in Alexandria, Egypt. I am also a software engineer (I did this website using Reactjs lol).\n\
I started making comics to express my thoughts, feelings and daily struggles. wether it was college, work or anxiety.. \
every situation had a comic for it. My comics went viral on different social media platforms gaining over 200,000 followers on Facebook!\n\
Taking the next step in this path, I started to work commercially to help other brands and projects express their message and identity the same way I express \
mine.\nIt brings joy to my heart being able to put someone`s thoughts into a sketch..so, I am looking forward for our \
cooperation!"}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
