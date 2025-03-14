import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCollection } from './figureStorage';
import './collection.css';

export function Collection() {
  const { collection, addFigure, removeFigure } = useCollection();

  return (
    <main>
      <h2 className="schoolbell-regular" style={{ textAlign: "center", marginBottom: "40px", color: "black" }}>
        Your Figurine Collection
      </h2>
      <div className="shelf">
        <div className="figures">
          {collection.length === 0 ? (
            <p style={{ textAlign: "center", color: "gray" }}>No figures collected yet!</p>
          ) : (
            collection.map((figure, index) => (
              <div className="figure" key={index}>
                <img src={figure.image} alt={figure.name} />
                {/* Uncomment the following lines if you want to add remove functionality */}
                {/* <p>{figure.name}</p> */}
                {/* <button className='remove-button' onClick={() => removeFigure(index)}>Remove</button> */}
              </div>
            ))
          )}
        </div>
      </div>
      <div className='link-container'>
        <NavLink className="fig-handdrawn-button" to="/blindboxes">Return to Blind Boxes</NavLink>
        <NavLink className="fig-handdrawn-button" to="/chat">Share collection with friends</NavLink>
      </div>
    </main>
  );
}