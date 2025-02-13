import React from 'react';
import './about.css';

export function About() {
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

      <h2 className="schoolbell-header" style={{textAlign: "center"}}>Commonly Asked Questions</h2>
      <details><summary className="schoolbell-para">How do get a blind box?</summary>Click on the collection that you want</details>
      <details><summary className="schoolbell-para">Can I trade the figurine that I got?</summary>No.</details>
      <details><summary className="schoolbell-para">How do I chat with my friend?</summary>........</details>
      <details><summary className="schoolbell-para">What if I did not get the figure that I wanted?</summary>Try again.</details>
    </main>
  );
}