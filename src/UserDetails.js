import { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import Avatar from './Avatar';
import {Container, Row, Col} from 'react-bootstrap';

function UserDetails(props) {

  const [data, setData] = useState(props.data);

  useEffect(() => {
    setData(props.data)
  }, [props.data])

    return (
      <Container>
        <Row>
          <Col md={4} lg={4} xs={4} >
            <Avatar />
          </Col>
          <Col> 
            <UserInfo data={data} />
          </Col>      
        </Row>
      </Container> 
    );
  }

export default UserDetails;
