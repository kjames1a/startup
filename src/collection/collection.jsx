import React from 'react';
import { NavLink } from 'react-router-dom';
import './collection.css';

export function Collection(props) {
  const [collection, setCollection] = React.useState([]);
  const [selectedBlindBox, setSelectedBlindBox] = React.useState(null); 
  const userName = props.userName;


  const collectionToDisplay = Array.isArray(collection) ? collection : [];

  React.useEffect(() => {
    fetch('/api/collection')
      .then((res) => res.json())
      .then((figure_collection) => {
        setCollection(figure_collection);  
      })
  }, []);

React.useEffect(() => {
  if (selectedBlindBox) {
    const newFigure = { 
      name: userName, 
      figure: selectedBlindBox, 
      image: selectedBlindBox.image 
    };

    fetch('/api/collection', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFigure),
    })
    .then(response => response.json())
    .then((savedFigure) => {
      setCollection(prevCollection => [...prevCollection, savedFigure]);
      fetch('/api/collection')  
        .then((res) => res.json())
        .then((data) => setCollection(data));
    })
  }
}, [selectedBlindBox, userName]);

const handleDeleteFigure = (figureId) => {
  fetch(`/api/collection`, {
    method: 'DELETE',
  })
  .then((response) => {
    if (response.ok) {
      setCollection((prevCollection) => prevCollection.filter(figure => figure._id !== figureId));
    } 
  });
}


return (
  <main>
    <h2 className="schoolbell-regular" style={{ textAlign: "center", marginBottom: "40px", color: "black" }}>
      Your Figurine Collection
    </h2>
    <div className="shelf" style={{ marginTop: "100px"}}>
      <div className="figures">
        {collectionToDisplay.length === 0 ? (
          <p style={{ textAlign: "center", color: "gray" }}>No figures collected yet!</p>
        ) : (
          collection.slice(0,5).map((item, index) => (
            <div key={index}>
              <img src={item.figure.image} alt={item.figure.name} height="200" />
              <button onClick={() => handleDeleteFigure(item._id)}>Delete Figure</button>
            </div>
          ))
        )}
      </div>
    </div>
    <div className='link-container'>
      <NavLink className="fig-handdrawn-button" to="/blindboxes">Return to Blind Boxes</NavLink>
    </div>
  </main>
)};