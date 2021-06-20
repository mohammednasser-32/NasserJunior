import { Nav, Container, Row, Col, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import nasserJunior from './../assets/misc/nasserjunior.gif';
import avatar from './../assets/misc/avatar.gif';

export default function Header(props) {
  const path = props.location.pathname;
  let navigator = '';
  if(path !== '/') {
    navigator = (
      <div className="d-flex flex-wrap align-items-center justify-content-center w-100">
        <Link to="/" className='remove-decoration p-3'><h4 className="hand-text  inactive-link">Home</h4></Link>
        <Link to="/illustrations" className='remove-decoration p-3'><h4 className={"hand-text " + (path.includes('illustrations') ? 'active-link' : 'inactive-link')}>Illustrations</h4></Link>
        <Link to="/comics/english" className='remove-decoration p-3'><h4 className={"hand-text " + (path.includes('comics') ? 'active-link' : 'inactive-link')}>Comics</h4></Link>
        <Link to="/work" className='remove-decoration p-3 '><h4 className={"hand-text " + (path.includes('work') ? 'active-link' : 'inactive-link')}>Projects</h4></Link>
        <Link to="/about" className='remove-decoration p-3'><h4 className={"hand-text " + (path.includes('about') ? 'active-link' : 'inactive-link')}>About</h4></Link>
      </div>
    )
  }
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
      {navigator}
    </Nav>
  );
}
