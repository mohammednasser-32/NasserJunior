import { Image } from 'react-bootstrap';

function ClientsFeatures(props) {
  function importAll(r) {
    return r.keys().map(r);
  }
  var targetImages = []
  if (props.tag === 'features') {
    targetImages = importAll(require.context('../assets/features', false, /\.(png|jpe?g|svg)$/));
  } else {
    targetImages = importAll(require.context('../assets/clients', false, /\.(png|jpe?g|svg)$/));
  }

  const images = targetImages.map((image, i) => <Image key={i} src={image} className="client-image p-5"/>)
  return (
    <div className={`${props.tag === 'clients' ? 'clients' : 'features'} p-4`}>
      <div className="d-flex justify-content-center">
        <h2 className="m-2 hand-text">{props.tag === 'clients' ? 'Clients' : 'Featured in'}</h2>
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {images}
      </div>
    </div>
  );
}

export default ClientsFeatures;
