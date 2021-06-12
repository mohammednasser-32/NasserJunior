import { Nav, Container, Row, Col, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import nasserJunior1 from './../assets/misc/nasserjunior1.png'
import nasserJunior2 from './../assets/misc/nasserjunior2.png'
import nasserJunior3 from './../assets/misc/nasserjunior3.png'
import avatar1 from './../assets/misc/avatar1.png'
import avatar2 from './../assets/misc/avatar2.png'
import avatar3 from './../assets/misc/avatar3.png'

export default function Header() {
  const logoSequence = [nasserJunior1, nasserJunior2, nasserJunior3]
  const avatarSequence = [avatar1, avatar2, avatar3]

  const [ selectedLogo,changeSelectedLogo ] = useState(logoSequence[0])
  const [ selectedAvatar,changeSelectedAvatar ] = useState(avatarSequence[0])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i = i + 1
      changeSelectedLogo(logoSequence[i%3])
      changeSelectedAvatar(avatarSequence[i%3])
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <Nav className="header p-3">
      <Container className="d-flex w-100 justify-content-center align-items-center">
        <Link className="" to="/">
            <Row>
              <Col className="d-flex align-items-center"><Image src={selectedAvatar} className="nasser-text-gif"/></Col>
              <Col className="d-flex align-items-end"><Image src={selectedLogo} className="nasser-avatar-gif"/></Col>
            </Row>
        </Link>
      </Container>
    </Nav>
  );
}
