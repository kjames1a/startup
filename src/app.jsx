import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="body bg-dark text-light"> 
        <header className="container-fluid">
        <h2 className="schoolbell-regular" style={{ marginTop: '15px' }}>Pop Depot</h2>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light d-flex justify-content-center">
            <div className="container d-flex justify-content-center">
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ marginTop: '20px'}}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <menu className="navbar-nav d-flex flex-row justify-content-center w-100">
            <li className="nav-item">
                <a className=" nav-link active schoolbell-regular" href="index.html" style={{ fontSize: '30px', marginBottom: '50px' }}>Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link schoolbell-regular" href="BlindBoxes.html" style={{ fontSize: '30px'}}>Blind Boxes</a>
            </li>
            <li className="nav-item">
                <a className="nav-link schoolbell-regular " href="Collection.html" style={{ fontSize: '30px'}}>Figurine Collection</a>
            </li>
            <li className="nav-item">
                <a className="nav-link schoolbell-regular" href="chat.html" style={{ fontSize: '30px'}}>Chat</a>
            </li>
            <li className="nav-item">
                <a className="nav-link schoolbell-regular" href="about.html" style={{ fontSize: '30px'}}>About</a>
            </li>
            </menu>
        </div>
        </div>
        </nav>
        </header>

        <main className="container-fluid bg-light text-center"> 
            App components go here
        </main>

        <footer className="text-dark-50">
        <div className="container-fluid">
            <span className="text-reset">Karly James</span>
            <a className="text-reset" href="https://github.com/kjames1a/startup">Source</a>
        </div>
        </footer>
    </div>
    );
}