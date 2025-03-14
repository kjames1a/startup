import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config } from '/src/chat/keys-config';


export function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [roomId, setRoomId] = useState('');
  const [error, setError] = useState('');

  const accessToken = config.MATRIX_ACCESS_TOKEN;

  const fetchMessages = async () => {
    try {
      const res = await axios.get(`https://gitter.ems.host/_matrix/client/r0/rooms/${roomId}/messages?access_token=${accessToken}`);
      setMessages(res.data.chunk);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setError('Failed to fetch messages. Please try again.');
    }
  };

  const sendPrivateMessage = async (roomId, message) => {
    try {
      const res = await axios.post(`https://gitter.ems.host/_matrix/client/r0/rooms/${roomId}/send/m.room.message?access_token=${accessToken}`, {
        msgtype: "m.text",
        body: message
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setMessages([...messages, res.data]);
      setMessage(''); // Clear the input field after sending the message
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again.');
    }
  };

  const handleSendMessage = () => {
    sendPrivateMessage(roomId, message);
  };

  useEffect(() => {
    if (roomId) {
      fetchMessages();
    }
  }, [roomId]);

  return (
    <main>
      <h1 className="schoolbell-header" style={{ textAlign: "center" }}>Chat</h1>
      <div className="input-container">
        <input
          className="input-text"
          type="text"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
          placeholder="Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <input
          className="input-text"
          type="text"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
          placeholder="Type Message Here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="chat-handdrawn-button" type="button" onClick={handleSendMessage}>Send</button>
      </div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.sender}</strong>: {msg.body}
          </div>
        ))}
      </div>
      {error && <div className="error">{error}</div>}
    </main>
  );
}
