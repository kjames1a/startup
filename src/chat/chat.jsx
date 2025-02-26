import React from 'react';
import './chat.css'



export function Chat() {
  const [msg, setMSG] = React.useState({ text: "...listening", image: "" });

  React.useEffect(() => {
    setInterval(() => {
      const messages = [
        "Look at what I got",
        "I want to share my collection with you!",
        "My favorite figure",
      ];
      const images = ["/Nyota-1.png", "/Nyota-2.png", "/Inosoul-1.png"]; 

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      const randomImage = images[Math.floor(Math.random() * images.length)];

      setMSG({ text: randomMessage, image: randomImage }); 
    }, 1500);

  })


  return (
    <main>
    <h1 className="schoolbell-header" style={{textAlign: "center"}}>Chat</h1>
    <div className="input-container">
      <input className="input-text" type="text" style={{backgroundColor: "rgb(255, 255, 255)"}} placeholder="Search for friend" />
      <button className="chat-handdrawn-button" type="submit">Search</button>
    </div>
    <div className="chat-square">
      <div>{msg.text}</div>
      <div>{msg.image && <img src={msg.image} style={{ width: 150, height: 150 }} />}</div>
    </div>
    <div className="input-container" style={{marginTop: "10px", marginBottom: "30px;"}}>
        <input className="input-text lined thick" type="text" style={{backgroundColor: "rgb(255, 255, 255)"}} placeholder="Type Message Here" />
        <button className="chat-handdrawn-button" type="submit">Send</button>
      </div>
  </main>
  );
}