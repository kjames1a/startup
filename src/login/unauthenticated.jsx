import React from "react";

import Button from "react-bootstrap/Button";
import { MessageDialog } from "./messageDialog";
import { LoginEvent, LoginNotifier } from "../about/LoginNotifier";

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState("");
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate("/api/auth/login");
  }

  async function createUser() {
    loginOrCreate("/api/auth/create");
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: "post",
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response?.status === 200) {
      localStorage.setItem("userName", userName);
      props.onLogin(userName);
      if (userName && userName.trim() !== "") {
        props.onLogin(userName);
        LoginNotifier.broadcastEvent(userName, LoginEvent.User, {
          userName: userName,
          msg: `${userName} has logged in`,
        });
      }
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <>
      <div>
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input
            className="form-control"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="your@email.com"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <img
              src="/lock.png"
              alt="lock icon"
              style={{ width: "1em", height: "1.5em" }}
            />
          </span>
          <input
            className="form-control"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>
        <Button
          className="handdrawn-button"
          style={{ marginRight: "50px" }}
          variant="secondary"
          onClick={() => loginUser()}
          disabled={!userName || !password}
        >
          Login
        </Button>
        <Button
          className="handdrawn-button"
          variant="secondary"
          onClick={() => createUser()}
          disabled={!userName || !password}
        >
          Create
        </Button>
      </div>

      <MessageDialog
        message={displayError}
        onHide={() => setDisplayError(null)}
      />
    </>
  );
}
