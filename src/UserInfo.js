import { Fragment, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function UserInfo(props) {

  const [isOpen, setVisibility] = useState(false);
  const [data, setData] = useState(props.data)

  useEffect(() => {
    setData(props.data);
  },[props.data])

  function changeVisibility() {
    setVisibility(!isOpen);
  }

     return (
      <div>    
        <p><span className="bold">Name: </span>{data.name}</p>
        <p><span className="bold">Username: </span>{data.username}</p>
        <p><span className="bold">Email: </span>{data.email}</p>
        {isOpen ?
          <>
            <p><span className="bold">Phone </span>{data.phone}</p>
            <p><span className="bold">Website: </span>{data.website}</p>
            <p><span className="bold">City: </span>{data.address.city}</p>
            <p><span className="bold">Address: </span>{data.address.street}</p>
          </>
        : null}
        <Button onClick = {changeVisibility}>{isOpen ? 'Less information' : 'More information' }</Button>
      </div>
    );
  }

export default UserInfo;
