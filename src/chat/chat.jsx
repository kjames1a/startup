import React from 'react';
import './chat.css'

export function Chat() {
  return (
    <main>
    <h1 className="schoolbell-header" style={{textAlign: "center"}}>Chat</h1>
    <div className="input-container">
      <input className="input-text" type="text" style={{backgroundColor: "rgb(255, 255, 255)"}} placeholder="Search for friend" />
      <button className="chat-handdrawn-button" type="submit">Search</button>
    </div>
    <div className="chat-square"></div>
    <div className="input-container" style={{marginTop: "10px", marginBottom: "30px;"}}>
        <input className="input-text lined thick" type="text" style={{backgroundColor: "rgb(255, 255, 255)"}} placeholder="Type Message Here" />
        <button className="chat-handdrawn-button" type="submit">Send</button>
      </div>
  </main>
  );
}