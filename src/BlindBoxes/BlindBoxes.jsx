import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCollection } from '/src/collection/figureStorage';
import { SelectedBlindBox } from './selectedBlindBox';
import Button from 'react-bootstrap/Button';
import './BlindBoxes.css';
import './selectedBlindBox';

export function BlindBoxes() {
  const [selectedbox, setSelectedBox] = useState(null);
  const [selectedbutton, setSelectedButton] = useState(null);
  const navigate = useNavigate();


  const hironoBlindBoxes = [
    { image: 'Hirono_1_draw.png', name: "Hirono 1" },
    { image: 'Hirono-3_draw.png', name: "Hirono 2" },
    { image: 'Hirono_2_draw.png', name: "Hirono 3" },
    { image: 'Hirono_draw.png', name: "Hirono 4" }
  ];

  const nyotaBlindBoxes = [
    { image: 'Nyota-1.png', name: "Nyota 1"},
    { image: 'Nyota-2.png', name: "Nyota 2"},
    { image: 'Nyota-3.png', name: "Nyota 3"},
    { image: 'nyota-4.png', name: "Nyota 4"}
  ]

  const inosoulBlindBoxes = [
    { image: 'Inosoul-1.png', name: "Inosoul 1"},
    { image: 'inosoul-2.png', name: "Inosoul 2"},
    { image: 'inosoul-3.png', name: "Inosoul 3"},
    { image: 'Inosoul-4.png', name: "Inosoul 4"}
  ]

  const blindboxCollections = [...hironoBlindBoxes, ...nyotaBlindBoxes, ...inosoulBlindBoxes];

  const randombox = (blindboxCollections) => {
    const randomIndex = Math.floor(Math.random() * blindboxCollections.length);
    return blindboxCollections[randomIndex];
  };

  const handleSelection = (boxNumber, blindboxCollections) => {
    const box = randombox(blindboxCollections); 
    setSelectedBox(box);
    setSelectedButton(boxNumber); 
    navigate("/selected-blind-box", { state: { box } }); 
  };

  return (
    <main className="container-fluid bg-light text-center">
      <p className="schoolbell-para p-color" style={{ textAlign: "center", marginBottom: "50px", marginTop: "80px" }}>
        A blind box is a type of packaging that keeps its contents a mystery until it is opened.
        Select any of the collections below to reveal a mystery figurine.
      </p>
      <div>
        <h2 style={{ textAlign: "center" }} className="schoolbell-header">Hirono Collection</h2>
        <div>
          <table style={{ marginTop: "50px" }}>
            <tbody>
              <tr>
              {hironoBlindBoxes.map((box, index) => (
              <td key={index} className="table-padding">
                <div>
                  <Button className='handdrawn-button' style={{ height: 'auto', maxHeight: '400px' }} onClick={() => handleSelection(index, hironoBlindBoxes)}>
                    <svg aria-hidden="true" viewBox="0 0 200 200" height="200" width="200">
                      <image href={'Hirono-box.png'} x="0" y="0" height="200" width="200" />
                    </svg>
                  </Button>
                </div>
              </td>
            ))}
          </tr>
          </tbody>
        </table>
      </div> 
      </div>
       <div>
        <h2 style ={{textAlign: "center"}} className = "schoolbell-header">Nyota Collection</h2>
        <table>
        <tbody>
        <tr>
              {nyotaBlindBoxes.map((box, index) => (
              <td key={index} className="table-padding">
                <div>
                  <Button className='handdrawn-button' style={{ height: 'auto', maxHeight: '400px' }} onClick={() => handleSelection(index, nyotaBlindBoxes)}>
                    <svg aria-hidden="true" viewBox="0 0 200 200" height="200" width="200">
                      <image href={'Nyota-box.png'} x="0" y="0" height="200" width="200" />
                    </svg>
                  </Button>
                </div>
              </td>
            ))}
          </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2 style ={{textAlign: "center"}} className = "schoolbell-header">Inosoul Collection</h2>
        <table style={{marginBottom: "50px"}}>
        <tbody>
        <tr>
              {inosoulBlindBoxes.map((box, index) => (
              <td key={index} className="table-padding">
                <div>
                  <Button className='handdrawn-button' style={{ height: 'auto', maxHeight: '400px' }} onClick={() => handleSelection(index, inosoulBlindBoxes)}>
                    <svg aria-hidden="true" viewBox="0 0 200 200" height="200" width="200">
                      <image href={'Inosoul-box.png'} x="0" y="0" height="200" width="200" />
                    </svg>
                  </Button>
                </div>
              </td>
            ))}
          </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default BlindBoxes;

