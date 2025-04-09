import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Login } from "./login/login";
import { BlindBoxes } from "./blindboxes/BlindBoxes";
import { Collection } from "./collection/collection";
import { About } from "./about/about";
import { AuthState } from "./login/authstate";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  const [userName, setUserName] = React.useState(
    localStorage.getItem("userName") || ""
  );
  const currentAuthState = userName
    ? AuthState.Authenticated
    : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className="body bg-light text-dark">
        <header className="container-fluid d-flex align-items-center justify-content-center px-4 py-2 position-relative">
          <h2
            className="schoolbell-regular m-0 position-absolute start-0"
            style={{ fontSize: "30px", paddingLeft: "30px" }}
          >
            Pop Depot
          </h2>
          <nav className="navbar">
            <ul className="navbar-nav d-flex flex-row justify-content-center align-items-center gap-4">
              <li className="nav-item">
                <NavLink
                  className="nav-link schoolbell-regular"
                  to="/"
                  style={{ fontSize: "30px" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link schoolbell-regular"
                  to="/blindboxes"
                  style={{ fontSize: "30px" }}
                >
                  Blind Boxes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link schoolbell-regular"
                  to="/collection"
                  style={{ fontSize: "30px" }}
                >
                  Figurine Collection
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link schoolbell-regular"
                  to="/about"
                  style={{ fontSize: "30px" }}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route
            path="/blindboxes"
            element={<BlindBoxes userName={userName} />}
          />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About userName={userName} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="text-dark-50">
          <div className="container-fluid">
            <span className="text-reset">Karly James</span>
            <a
              className="text-reset"
              href="https://github.com/kjames1a/startup"
            >
              Source
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container-fluid bg-secondary text-center">
      404: Return to sender. Address unknown.
    </main>
  );
}

export default App;
