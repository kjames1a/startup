import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { BlindBoxes } from './blindboxes/blindboxes';
import { Collection } from './collection/collection';
import { About } from './about/about';
import { Chat } from './chat/chat';

export default function App() {
  return (
    <BrowserRouter>
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
                <NavLink className=" nav-link schoolbell-regular" to="/" style={{ fontSize: '30px', marginBottom: '50px' }}>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link schoolbell-regular" to="BlindBoxes" style={{ fontSize: '30px'}}>Blind Boxes</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link schoolbell-regular " to="Collection" style={{ fontSize: '30px'}}>Figurine Collection</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link schoolbell-regular" to="chat" style={{ fontSize: '30px'}}>Chat</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link schoolbell-regular" to="about" style={{ fontSize: '30px'}}>About</NavLink>
            </li>
            </menu>
        </div>
        </div>
        </nav>
        </header>

        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/blindboxes' element={<BlindBoxes />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className="text-dark-50">
        <div className="container-fluid">
            <span className="text-reset">Karly James</span>
            <a className="text-reset" href="https://github.com/kjames1a/startup">Source</a>
        </div>
        </footer>
    </div>
    </BrowserRouter>
    );
}




function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }