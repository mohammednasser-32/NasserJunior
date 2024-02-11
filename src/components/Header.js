import { Nav, Container, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import nasserJunior from './../assets/misc/nasserjunior.png';
import avatar from './../assets/misc/avatar.png';

export default function Header(props) {
  const path = props.location.pathname;
  const navigator = (
    <div className="d-flex flex-wrap align-items-center justify-content-center w-100">
      <Link to="/comics" className='header-link'><span className={"hand-text header-text " + (path.includes('comics') ? 'active-link' : 'inactive-link')}>Comics</span></Link>
      <a href="https://getstickerpack.com/publisher/mohammed-nasser" target="_blank" className='header-link'><span className={"hand-text header-text inactive-link"}>Stickers</span></a>
      <a href="https://microbusstore.com/collections/microbus-nasser" target="_blank" className='header-link'><span className={"hand-text header-text inactive-link"}>Shop</span></a>
      <Link to="/projects" className='header-link'><span className={"hand-text header-text " + (path.includes('projects') ? 'active-link' : 'inactive-link')}>Projects</span></Link>
    </div>
  )

  return (
    <Nav className="header p-3 mt-4">
      <Container className="d-flex w-100 justify-content-center align-items-center">
        <Link className="" to="/">
            <div className="d-flex align-items-center justify-content-center">
              <Image src={avatar} className="nasser-avatar-gif"/>
              <Image src={nasserJunior} className="nasser-text-gif"/>
            </div>
        </Link>
      </Container>
      {navigator}
    </Nav>
  );
}
