import React, { useState, useEffect } from 'react';
// import { useState, useEffect } from 'react';
import './about.css';
import Accordion from 'react-bootstrap/Accordion';

export function About() {
  const [activeKey, setActiveKey] = useState('');

  useEffect (() => {
    if (activeKey !== '') {
      const timer = setTimeout(() => {
        setActiveKey('')
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [activeKey]
);


  return (
    <main>
       <div className=" "
       style={{paddingLeft: "40px", paddingRight: "40px", color: "#141414"}}
       data-mce-style="padding-left: 40px; padding-right: 40px; color: #141414">
       <p className="schoolbell-para" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
        Pop Depot is the online extension of the popular Pop Mart store. 
        It brings the excitement of blind boxes to the digital world, featuring popular characters like Hirono, Nyota, and Inosoul. 
        Collect virtual figurines, build your collection, and share with your friends, all in one platform.
      </p>
     </div>

     <div className=" "
       style={{paddingLeft: "40px", paddingRight: "40px", color: "#141414"}}
       data-mce-style="padding-left: 40px; padding-right: 40px; color: #141414">
      <p className="schoolbell-para" style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
        The name Pop Depot is an online adaptation of Pop Mart and is a registered trademark. 
        The use of the name, figures, and related content is strictly for non-profit educational purposes only. 
        No part of this code or program may be used outside of that definition.
      </p>
      </div>

    <Accordion style={{width:'600px'}}activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is Pop Depot?</Accordion.Header>
        <Accordion.Body>
          Pop Depot is the online version of the store Pop Mart.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How do I chat with my friends?</Accordion.Header>
        <Accordion.Body>
          Navigate to the 'Chat' page and search the friend you wish to chat with.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How do I get a blind box?</Accordion.Header>
        <Accordion.Body>
          Navigate to the 'Blind Box' page and select a blind box from a collection.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Does it cost anything to use Pop Depot?</Accordion.Header>
        <Accordion.Body>
          Pop Depot is a free service!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </main>
  );
}

export default About;

