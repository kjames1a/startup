import React from 'react';
import { YOUTUBE_API_KEY } from './youtube_api';
import { LoginEvent, LoginNotifier } from './LoginNotifier';
import './about.css';

export function About(props) {
  const [videos, setVideos] = React.useState([]);
  const [events, setEvents] = React.useState([]);
  const userName = props.userName;
  console.log("UserName:", userName);



  React.useEffect(() => {
    const PLAYLIST_KEY = 'PLi38YbIQaNoUgBicH6OX3KDWenHX3ZEUL';
    const vid_amount = 1;

    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${vid_amount}&playlistId=${PLAYLIST_KEY}&key=${YOUTUBE_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const vids = data.items.map(item => ({
          title: item.snippet.title,
          videoId: item.snippet.resourceId.videoId
        }));
        setVideos(vids);
      });
  }, []);

 
  React.useEffect(() => {
    LoginNotifier.addHandler(handleLoginEvent);

    return () => {
      LoginNotifier.removeHandler(handleLoginEvent);
    };
  }, []);

  function handleLoginEvent(event) {
    console.log("Received event:", event);
  
    setEvents((prevEvents) => {
      const newEvents = [...prevEvents, event];
      return newEvents.slice(-6); 
    });
  }


  function createMessageArray() {
    return events.map((event, i) => {
      const loginUserName = event.userName || event.value.userName; 
      const message = `${loginUserName} has logged in`;
  
      return (
        <div key={i} className='login'>
          <span className='login-event'>{message}</span>
        </div>
      );
    });
  }
  

  return (
    <main>
      <div style={{ paddingLeft: "40px", paddingRight: "40px", color: "#141414" }}>
        <p className="schoolbell-para" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
          Pop Depot is the online extension of the popular Pop Mart store. 
          It brings the excitement of blind boxes to the digital world, featuring popular characters like Hirono, Nyota, and Inosoul. 
          Collect virtual figurines, build your collection, and share with your friends, all in one platform.
        </p>
      </div>

      <div style={{ paddingLeft: "40px", paddingRight: "40px", color: "#141414" }}>
        <p className="schoolbell-para" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
          The name Pop Depot is an online adaptation of Pop Mart and is a registered trademark. 
          The use of the name, figures, and related content is strictly for non-profit educational purposes only. 
          No part of this code or program may be used outside of that definition.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2rem 0' }}>
        {videos.map((video, index) => (
          <iframe key={index} width="560" height="315" src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&enablejsapi=1&rel=0`}
            allow="autoplay; encrypted-media" allowFullScreen title={video.title} />
        ))}
      </div>

      <div className='users'>
        Users
        <div id='user-messages'>{createMessageArray()}</div>
      </div>
    </main>
  );
}

export default About;