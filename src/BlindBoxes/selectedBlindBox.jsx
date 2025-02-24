import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './SelectedBlindBox.css';
import Button from 'react-bootstrap/Button';


export function SelectedBlindBox() {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const box = location.state?.box; 


    if (!box) {
      return <p>No box selected. Go back and pick one!</p>;
    }  

  return (
    <div className='background-img' style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 className='schoolbell-regular' style={{ textAlign: 'center'}}>You got: {box.name}!</h2>
      <img src={box.image} alt={box.name} height="300" />
      <br />
      <Button className='schoolbell-para handdrawn-button' style={{marginTop: '30px', marginBottom: '30px', width: 'auto', maxWidth: '200px'}} onClick={() => navigate("/blindboxes")}>Back to Selection</Button>
    </div>
  );
}

export default SelectedBlindBox;
