import PhotoGallery from './PhotoGallery';
import { Container } from 'react-bootstrap';

function Illustrations(props) {
  return (
    <Container>
      <h1 className="hand-text text-center" style={{'marginBottom' : 40}}>{props.section}</h1>
       <PhotoGallery tag={props.tag}/>
    </Container>
  );
}

export default Illustrations;
