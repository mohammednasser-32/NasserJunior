import PhotoGallery from './PhotoGallery';
import follow from './../assets/misc/follow.png'
import { Container, Image } from 'react-bootstrap';

function Illustrations(props) {
  return (
    <Container>
       <PhotoGallery tag={props.tag}/>
       <div className="d-flex justify-content-center">
          <Image src={follow} className="follow-image"/>
       </div>
    </Container>
  );
}

export default Illustrations;
