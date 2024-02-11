import { Container, Row, Col, Image } from 'react-bootstrap';
import cookies1 from './../assets/cookies/cookies1.png';
import cookies2 from './../assets/cookies/cookies2.png';
import cookies3 from './../assets/cookies/cookies3.png';
import cookies4 from './../assets/cookies/cookies4.png';

import React from 'react';

function ComicViewer() {
  const panels = [cookies1, cookies2, cookies3, cookies4];
  const renderComics = panels.map((panel, index) => (
    <Col xs={12} md={3} key={index} className="d-flex align-items-center">
      <Image src={panel} className="panel-image"/>
    </Col>
  ));

  return (
    <Container>
      <Row>
        {renderComics}
      </Row>
    </Container>
  );
}

export default ComicViewer;
