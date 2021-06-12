import { Nav, Container, Row, Col, Image } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import nasserJunior1 from './../assets/misc/nasserjunior1.png'
import nasserJunior2 from './../assets/misc/nasserjunior2.png'
import nasserJunior3 from './../assets/misc/nasserjunior3.png'

export default function Header() {
  const imageSequence = [nasserJunior1, nasserJunior2, nasserJunior3]
  const [ selectedImage,changeSelectedImage ] = useState(imageSequence[0])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i = i + 1
      changeSelectedImage(imageSequence[i%3])
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <Nav className="header p-3">
      <Container className="d-flex w-100 justify-content-center align-items-center">
        <Row>
          <Col><Image src={selectedImage} className="nasser-junior-gif"/></Col>
        </Row>
      </Container>
    </Nav>
  );
}
