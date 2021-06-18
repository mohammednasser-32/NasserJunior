import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import PhotoGallery from './PhotoGallery';
import  { useState, useEffect } from 'react';

function Comics(props) {
  if(props.match.params.language !== 'english' && props.match.params.language !== 'arabic') {
    props.history.push('/comics/english')
  }

  const [ language, changLanguage ] = useState(props.match.params.language)

  useEffect(() => {
    changLanguage(props.match.params.language)
  }, [props]);

  return (
    <Container>
      <div className="d-flex justify-content-center" style={{'marginBottom' : 40}}>
        <Link to="/comics/english" className="remove-decoration" style={{marginRight: 20}}><h1 className={`hand-text ${language !== 'english' ? 'inactive' : ''}`}>English Comics</h1></Link>
        <Link to="/comics/arabic" className="remove-decoration" style={{marginLeft: 20}}><h1 className={`hand-text ${language !== 'arabic' ? 'inactive' : ''}`}>Arabic Comics</h1></Link>
      </div>
      <div style={{display: language !== 'english' ? 'none' : 'block'}}>
        <PhotoGallery tag='english_comics'/>
      </div>
      <div style={{display: language !== 'arabic' ? 'none' : 'block'}}>
        <PhotoGallery tag='arabic_comics'/>
      </div>
    </Container>
  );
}

export default Comics;
