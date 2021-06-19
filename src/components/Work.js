import { Container, Row, Col, Card } from 'react-bootstrap';
import archMain from './../assets/work/archmain.jpg';
import arch1 from './../assets/work/arch1.jpg';
import arch2 from './../assets/work/arch2.jpg';
import arch3 from './../assets/work/arch3.jpg';
import scientifiMain from './../assets/work/scientificmain.jpg';
import oolMain from './../assets/work/oolmain.jpg';
import ool1 from './../assets/work/ool1.jpg';
import ool2 from './../assets/work/ool2.jpg';
import ool3 from './../assets/work/ool3.jpg';
import ammarMain from './../assets/work/ammarmain.jpg';
import ammar1 from './../assets/work/ammar1.jpg';
import React from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";
import  { useState } from 'react';

const workArray = [
  {
    mainImage: archMain,
    title: 'Nasser, Heba and Our Dispersed Heritage',
    text: 'A series of comics I did in collaboration with Dr. Heba Abd El Gawad and the University College of London, aims to rais awareness about Egypt`s artifacts that were dispersed during the English colonial in the 1800s. I also illustrated a card game as a part of this project.',
    samples: [{'src': arch1}, {'src': arch2}, {'src': arch3}]
  },
  {
    mainImage: scientifiMain,
    title: 'Scientific American',
    text: 'Editorial illustrations I did for Scientific American Arabic that aims to simplify complex scientific articles in a fun way.',
    samples: [{'src': scientifiMain}]
  },
  {
    mainImage: oolMain,
    title: 'Say and I Will Say',
    text: 'A card game I did in collaboration with Dr. Mashael Al Shaalaan, that aims to tighten the bond between the doctor and patient kids',
    samples: [{'src': ool1}, {'src': ool2}, {'src': ool3}]
  },
  {
    mainImage: ammarMain,
    title: 'Younis in the Kinder Garden',
    text: 'A comics series I write and Illustrate for Ammar Magazine',
    samples: [{'src': ammar1}]
  }
]
function Work() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [samples, changeSamples] = useState([]);

  function openLightbox(images)  {
    console.log(images)
    changeSamples(images)
    setCurrentImage(0);
    setViewerIsOpen(true);
  };

  function closeLightbox () {
    setViewerIsOpen(false);
  };

  const rendered = workArray.map((work, i) => {
    return (
        <Col key={i} xs={12} md={6} className="d-flex justify-content-center" onClick={()=> {openLightbox(work.samples)}}>
          <Card className="card-container">
            <Card.Img variant="top" src={work.mainImage} />
            <Card.Body>
              <Card.Title className="hand-text card-main-text">{work.title}</Card.Title>
              <Card.Text className="hand-text card-sub-text">
                {work.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    )
  })

  return (
    <Container>
      <Row className="cards-section">
        {rendered}
      </Row>
      <ModalGateway>
      {viewerIsOpen ? (
        <Modal onClose={closeLightbox}>
          <Carousel
            currentIndex={currentImage}
            views={samples.map(x => ({
              ...x
            }))}
          />
        </Modal>
      ) : null}
      </ModalGateway>
    </Container>
  );
}

export default Work;
