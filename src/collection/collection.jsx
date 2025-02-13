import React from 'react';
import { NavLink } from 'react-router-dom';
import './collection.css';

export function Collection() {
  return (
    <main>
      <h2 className="schoolbell-regular" style={{ textAlign: "center", marginBottom: "40px", color: "black" }}>
        Your Figurine Collection
      </h2>
      <div className="shelf">
        <div className="figures">
          <div className="figure">
            <img src="Nyota_1.png" alt="Nyota" />
          </div>
          <div className="figure">
            <img src="Hirono_draw.png" alt="Hirono" />
          </div>
          <div className="figure">
            <img src="Inosoul_4.png" alt="Inosoul" />
          </div>
        </div>
      </div>
      <NavLink className="fig-handdrawn-button" to="/chat">Share collection with friends</NavLink>
    </main>
  );
}