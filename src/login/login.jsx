import React from 'react';
// import { NavLink } from "react-router-dom";

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';


export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        {authState === AuthState.Unauthenticated && <h1 className="schoolbell-regular">Sign in or Register</h1>}  
        {/* {authState !== AuthState.Unknown && <h1>Sign in or Register</h1>} */}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}

// export function Login() {
//   return (
//     <main className="container-fluid bg-light text-center">
//     <div>
//       <h1 className="schoolbell-header">Sign in or Register</h1>
//       <form method="get" action="play.html">
//         <div className="input-group mb-3">
//           <span className="input-group-text">@</span>
//           <input className="form-control" type="text" placeholder="your@email.com" />
//         </div>
//         <div className="input-group mb-3">
//           <span className="input-group-text"><img src="lock.png" width="18"></img></span>
//           <input className="form-control" type="password" placeholder="password" />
//         </div>
//         <NavLink type="submit" style={{ marginRight: "15px" }} className="handdrawn-button" to="/blindboxes">Sign in</NavLink>
//         <NavLink type="submit" style={{ marginRight: "15px" }} className="secondary-handdrawn-button" to="/blindboxes">Register</NavLink>
//       </form>
//     </div>
//   </main>
//   );
// }