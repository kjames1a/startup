import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userName');
    props.onLogout();
  }

  return (
      <div>
            <h1 className="schoolbell-regular">Welcome to Pop Depot!</h1>
            <div className='schoolbell-para customerName'>{props.userName}</div>
            <Button className="schoolbell-para handdrawn-button" style={{ marginBottom: '15px' }} variant='primary' onClick={() => navigate('/blindboxes')}>
                Blind Boxes
            </Button>
            <Button className="schoolbell-para handdrawn-button" variant='secondary' onClick={() => logout()}>
                Logout
            </Button>
        </div>
  );
}