import { Container, Row, Col, Image } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import workTogetherDim from './../assets/misc/work-together-dim.png'
import workTogetherLight from './../assets/misc/work-together.png'
import face from './../assets/misc/face.png'
import insta from './../assets/misc/insta.png'
import x from './../assets/misc/x.png'

export default function Header() {
  const imageSequence = [workTogetherDim, workTogetherLight]

  const [ selectedimage,changeSelectedImage ] = useState(imageSequence[0])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i = i + 1
      changeSelectedImage(imageSequence[i%2])
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
        <Row className="footer m-0">
          <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
            <Image src={selectedimage} className="work-together"/>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com/Mnasserjunior/" target="_blank"><Image src={face} className="social-media"/></a>
              <a href="https://www.twitter.com/nasser_junior/" target="_blank"><Image src={x} className="social-media"/></a>
              <a href="https://www.instagram.com/nasser_junior/" target="_blank"><Image src={insta} className="social-media"/></a>
            </div>
            <a className="remove-decoration" href="mailto:contact@nasserjunior.com"><h1 className="hand-text email-text">Contact@nasserjunior.com</h1></a>
          </Col>
        </Row>
  );
}
