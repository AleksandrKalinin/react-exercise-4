import { useState, useEffect, Fragment} from 'react';
import { Container, Row, Col, Table, Card, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums, getPhotos, addAlbum, addPhoto } from './actions/index';

function Content() {

  const dispatch = useDispatch();

  const albumsList = useSelector(state => state.albumsArray.albums);
  const photosList = useSelector(state => state.photosArray.photos);
  const allState = useSelector(state => state);

  useEffect(() => {
  	dispatch(getAlbums())
  }, []);

  const [albums, setAlbums] = useState([]);
  const [isSuccesful, setStatus] = useState(false);

  const [photos, setPhotos] = useState([]);
  const [photosShown, openPhotos] = useState(false);

  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [currentAlbumPhotos, setCurrentAlbumPhotos] = useState(null);

  useEffect(() => {
  	setStatus(true);
  	setAlbums(albumsList);
  }, [albumsList])

  useEffect(() => {
  	if (photosList.length !== 0) {
  		openPhotos(true);
  		setPhotos(photosList);   		
  	}
  }, [photosList])

  const showPhotos = (id) => {
  	dispatch(getPhotos(id))
  	setCurrentAlbum(id);
  	console.log(photosList);
  }

  const createAlbum = () => {
  	const newItem = {};
  	newItem.id = uuidv4();
  	newItem.userId = newItem.id;
  	newItem.title = 'New item';
  	newItem.photos = [];
  	dispatch(addAlbum(newItem));
  }

  const createPhoto = () => {
  	const photo = {};
  	photo.title = 'Lorem ipsum dolor sit ament';
  	photo.url = 'token-image.jpg';
  	photo.id = uuidv4();
  	dispatch(addPhoto(photo));
  }

    return (
      <Container>
        { !photosShown ?
          <Row>
            <Col>
              {isSuccesful ?
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    {albums.map((item, index) => 
                      <tr key={item.id} onClick = {() => showPhotos(item.id)}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                      </tr>
                    )}
                    <tr>
	                    <td colSpan="2">
	                    	<Button onClick={() => createAlbum()} className="styled-button">Add new album</Button>
	                    </td>
                    </tr>                      
                  </tbody>
                </Table>                    
                : <div>Loading...</div>}
            </Col>
          </Row>
        : null }
        { photosShown ?
        	<Fragment>
	          <Row>
	            <Col md={12} lg={12} xs={12} style={{ justifyContent: 'center' }}>
	              <Button onClick={() => openPhotos(false)} className="styled-button">Back to albums</Button>
	            </Col>
	            <Col md={12} lg={12} xs={12} style={{ justifyContent: 'center' }}>
	              <p className="current-album">Photos for album {currentAlbum}</p>
	            </Col>
	            {photos.map((item) => 
	              <Col md={4} lg={4} xs={4} key={item.id}>
	                <Card className="styled-card">
	                  <Card.Img variant="top" src={item.url} />
	                  <Card.Body>
	                    <Card.Text>
	                      {item.title}
	                    </Card.Text>
	                  </Card.Body>
	                </Card>
	              </Col>
	            )}
	          </Row>
	          <Row>
	            <Col md={12} lg={12} xs={12} style={{ justifyContent: 'center' }}>
	              <Button onClick={() => createPhoto()} className="styled-button">Add photo</Button>
	            </Col>	          
	          </Row>
	        </Fragment>  
        : null }
      </Container>
    );
  }

export default Content;
