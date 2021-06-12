import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Comics(props) {
  const language = props.match.params.language
  if(language !== 'english' && language !== 'arabic') {
    props.history.push('/comics/english')
  }
  return (
    <Container>
      <div className="d-flex justify-content-center" style={{'marginBottom' : 40}}>
        <Link to="/comics/english" className="remove-decoration" style={{marginRight: 20}}><h1 className={`hand-text ${language !== 'english' ? 'inactive' : ''}`}>English Comics</h1></Link>
        <Link to="/comics/arabic" className="remove-decoration" style={{marginLeft: 20}}><h1 className={`hand-text ${language !== 'arabic' ? 'inactive' : ''}`}>Arabic Comics</h1></Link>
      </div>
    </Container>
  );
}

export default Comics;
