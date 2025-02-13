import React from 'react';
import './BlindBoxes.css';

export function BlindBoxes() {
  return (
    <main className="container-fluid bg-light text-center">
      <p className="schoolbell-para p-color" style={{textAlign: "center", marginBottom: "50px", marginTop: "80px"}}>
      A blind box is a type of packaging that keeps its contents a mystery until it is opened.
        Select any of the collections below to reveal a mystery figurine.
      </p>
      <div>
        <h2 style ={{textAlign: "center"}} className = "schoolbell-header">Hirono Collection</h2>
      <div>
        <table style={{marginTop: "50 px"}}>
          <tbody>
          <tr>
            <td className="table-padding">
              <button>
                <svg aria-hidden="true" viewBox="0 0 200 200" height="200" width="200">
                <image href="Hirono_1.png" x="0" y="0" height="200" width="200" />
                </svg>
              </button>
            </td>
            <td className="table-padding">
              <button>
                <svg aria-hidden="true" viewBox="0 0 200 200" height="200" width="200">
                  <image href="Hirono_2.png" x="0" y="0" height="200" width="200" />
                </svg>
              </button>
            </td>
          </tr>
          <tr>
            <td className="table-padding">
              <button>
                <svg aria-hidden="true" viewBox="0 0 200 200" height="200" width="200">
                  <image href="Hirono_3.png" x="0" y="0" height="200" width="200" />
                </svg>
              </button>
            </td>
            <td className="table-padding">
              <button>
                <svg aria-hidden="true" viewBox="0 0 200 200" height="200" width="200">
                  <image href="Hirono_4.png" x="0" y="0" height="200" width="200" />
                </svg>
              </button>
            </td>
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
            <td className="table-padding">
              <button>
                <svg aria-hidden="true" viewBox="0 0 200 200" height="200" width="200">
                <image href="Nyota_1.png" x="0" y="0" height="200" width="200" />
                </svg>
              </button>
            </td>
            <td className="table-padding">
              <button>
                <svg aria-hidden="true" viewBox="0 0 200 200" height="200" width="200">
                  <image href="Nyota_2.png" x="0" y="0" height="200" width="200" />
                </svg>
              </button>
            </td>
          </tr>
          <tr>
            <td className="table-padding">
              <button>
                <svg aria-hidden="true" viewBox="0 0 200 200" height="200" width="200">
                  <image href="Nyota_3.png" x="0" y="0" height="200" width="200" />
                </svg>
              </button>
            </td>
            <td className="table-padding">
              <button>
                <svg aria-hidden="true" viewBox="0 0 200 200" height="200" width="200">
                  <image href="Nyota_4.png" x="0" y="0" height="200" width="200" />
                </svg>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2 style ={{textAlign: "center"}} className = "schoolbell-header">Inosoul Collection</h2>
        <table style={{marginBottom: "50px"}}>
        <tbody>
          <tr>
            <td className="table-padding">
              <button>
                <svg aria-hidden="true" viewBox="0 0 200 200" height="200" width="200">
                <image href="Inosoul_1.png" x="0" y="0" height="200" width="200" />
                </svg>
              </button>
            </td>
            <td className="table-padding">
              <button>
                <svg aria-hidden="true" viewBox="0 0 200 200" height="200" width="200">
                  <image href="Inosoul_2.png" x="0" y="0" height="200" width="200" />
                </svg>
              </button>
            </td>
          </tr>
          <tr>
            <td className="table-padding">
              <button>
                <svg aria-hidden="true" viewBox="0 0 200 200" height="200" width="200">
                  <image href="Inosoul_3.png" x="0" y="0" height="200" width="200" />
                </svg>
              </button>
            </td>
            <td className="table-padding">
              <button>
                <svg aria-hidden="true" viewBox="0 0 200 200" height="200" width="200">
                  <image href="Insoul_4.png" x="0" y="0" height="200" width="200" />
                </svg>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}