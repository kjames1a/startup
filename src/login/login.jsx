import React from 'react';

export function Login() {
  return (
    <main className="container-fluid bg-light text-center">
    <div>
      <h1 className="schoolbell-header">Sign in or Register</h1>
      <form method="get" action="play.html">
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input className="form-control" type="text" placeholder="your@email.com" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text"><img src="lock.png" width="18"></img></span>
          <input className="form-control" type="password" placeholder="password" />
        </div>
        <button type="submit" style={{ marginRight: "15px" }} className="handdrawn-button"> Sign in </button>
        <button type="submit" className="secondary-handdrawn-button">Register</button>
      </form>
    </div>
  </main>
  );
}