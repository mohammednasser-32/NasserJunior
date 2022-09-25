import PhotoGallery from './PhotoGallery';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function SeriesSection(props) {
  return (
    <Container>
        <div className="d-flex justify-content-center">
          <Image src={props.titleImage} className="series-title"/>
        </div>
       <PhotoGallery tag={props.tag}/>
    </Container>
  );
}

export default SeriesSection;
