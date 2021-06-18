import { Nav, Container, Row, Col, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import nasserJunior from './../assets/misc/nasserjunior.gif';
import avatar from './../assets/misc/avatar.gif';

export default function Header() {
  return (
    <Nav className="header p-3">
      <Container className="d-flex w-100 justify-content-center align-items-center">
        <Link className="" to="/">
            <Row>
              <Col className="d-flex align-items-center"><Image src={avatar} className="nasser-avatar-gif"/></Col>
              <Col className="d-flex align-items-center"><Image src={nasserJunior} className="nasser-text-gif"/></Col>
            </Row>
        </Link>
      </Container>
    </Nav>
  );
}
