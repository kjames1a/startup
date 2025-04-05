import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './BlindBoxes.css';

export function BlindBoxes(props) {
  const [selectedBlindBox, setSelectedBlindBox] = React.useState(null);
  const [collection, setCollection] = React.useState([]);
  const bottomOfPageRef = React.useRef(null);
  const userName = props.userName;
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
  ];

  const inosoulBlindBoxes = [
    { image: 'Inosoul-1.png', name: "Inosoul 1"},
    { image: 'inosoul-2.png', name: "Inosoul 2"},
    { image: 'inosoul-3.png', name: "Inosoul 3"},
    { image: 'Inosoul-4.png', name: "Inosoul 4"}
  ];

  const ClickedBlindBox = (blindbox) => {
    setSelectedBlindBox(blindbox);
  };

  React.useEffect(() => {
    if (bottomOfPageRef.current) {
      bottomOfPageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedBlindBox]);

  const addToCollection = async () => {
    if (selectedBlindBox) {
      const newFigure = { 
        name: userName, 
        figure: selectedBlindBox, 
        image: selectedBlindBox.image //if this is an html...could impact
      };
        const response = await fetch('/api/collection', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newFigure),
        });
        const savedFigure = await response.json();
        setCollection(prevCollection => [...prevCollection, savedFigure]);
        navigate('/collection');
       } 
  };
  
  
  return (
    <main className="container-fluid bg-light text-center">
      <p className="schoolbell-para p-color" style={{ textAlign: "center", marginBottom: "50px", marginTop: "80px" }}>
        A blind box is a type of packaging that keeps its contents a mystery until it is opened.
        Select any of the collections below to reveal a mystery figurine.
      </p>

      <div>
        <h2 className="schoolbell-header">Hirono Collection</h2>
        <div>
          <table style={{ marginTop: "50px" }}>
            <tbody>
              <tr>
                {hironoBlindBoxes.map((blindbox, index) => (
                  <td key={index} className="table-padding">
                    <div>
                      <Button
                        className='handdrawn-button'
                        style={{ height: 'auto', maxHeight: '400px' }}
                        onClick={() => ClickedBlindBox(blindbox)}>
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
        <h2 className="schoolbell-header">Nyota Collection</h2>
        <table>
          <tbody>
            <tr>
              {nyotaBlindBoxes.map((blindbox, index) => (
                <td key={index} className="table-padding">
                  <div>
                    <Button
                      className='handdrawn-button'
                      style={{ height: 'auto', maxHeight: '400px' }}
                      onClick={() => ClickedBlindBox(blindbox)}>
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
        <h2 className="schoolbell-header">Inosoul Collection</h2>
        <table style={{ marginBottom: "50px" }}>
          <tbody>
            <tr>
              {inosoulBlindBoxes.map((blindbox, index) => (
                <td key={index} className="table-padding">
                  <div>
                    <Button
                      className='handdrawn-button'
                      style={{ height: 'auto', maxHeight: '400px' }}
                      onClick={() => ClickedBlindBox(blindbox)}>
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

      <div ref={bottomOfPageRef} style={{ padding: '20px', marginTop: '50px' }}>
      {selectedBlindBox && (
        <div>
          <h2 className='schoolbell-regular' style={{ textAlign: 'center' }}>
            You got: {selectedBlindBox.name}!
          </h2>
          <img src={selectedBlindBox.image} alt={selectedBlindBox.name} height="300" />
          <br />
          <Button
            className='schoolbell-para handdrawn-button'
            style={{ marginTop: '30px', marginBottom: '30px', width: 'auto', maxWidth: '200px' }}
            onClick={addToCollection}>
            Add to Collection
          </Button>
          <Button
            className='schoolbell-para handdrawn-button'
            style={{ marginTop: '30px', marginBottom: '30px', width: 'auto', maxWidth: '200px' }}
            onClick={() => setSelectedBlindBox(null)}>
            Back to Selection
          </Button>
        </div>
        )}
      </div>
    </main>
  );
}

export default BlindBoxes;

