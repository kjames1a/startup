<<<<<<< HEAD
# Simon

[My Notes](notes.md)

In 1978 Milton-Bradley, now Hasbro, released an electronic game named Simon. It was cutting edge at the time since there were so few electronic games, and all the cool kids had one.

We are going to build a peer to peer multiplayer web application modeled after Simon. We will build it together by adding new functionality every time we learn a new technology. The example version of code and production deployment for each iteration are available to you. Your job will be to review the example and then deploy it to your production environment. The goal is to make you think about every line of code. Ask, "why is it done this way?" and "Is there a better way?". You can then take what you have learned, or even portions of the Simon code, and apply it to your Startup application.

## 🚀 Specification Deliverable

Simon is a simple game where you repeat a sequence of color flashes. The longer sequence you repeat the higher your score is.

=======
# Pop Depot

Pop Depot is the online extension of the popular Pop Mart store. It brings the excitement of blind boxes to the digital world, featuring popular characters like Hirono, Nyota, and Inosoul. Collect virtual figurines, build your collection, and share with your friends, all in one platform. 



## 🚀 Specification Deliverable

>>>>>>> 55fe970821fd738f9532cbe73bb01a6b5c2569d5
For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

<<<<<<< HEAD
A mind is a beautiful thing, but it needs stimulation. Lights, color, sound, and action. Simon give you hours of fun as you complete to remember the longest sequence of colors. See if you can top the charts with you efforts. Receive automatic notification of how your friends are doing.

### Design

![Design](designDiagram.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```mermaid
sequenceDiagram
    actor User
    User->>Login: Enter login information
    Login->>About: See about information
    About-->>Login: Login
    About->>About: Read inspirational quote
    Login->>Play: Start game
    Play->>Play: repeat sequences
    Play->>Play: View other player's game notifications
    Play-->>Login: Logout
    Login-->>Scores: view high scores
=======
Have you ever been tempted by the adorable figures at Pop Mart but hesitated at the $15.99 price tag? Pop Cloud brings the same thrill of opening blind boxes to your screen –– for free! With Pop Cloud, you can collect virtual figures, experience the excitement of surprise, and share your collection with friends near and far, all without spending a dime.  

### Design
![PopCloud_Design](https://github.com/user-attachments/assets/a65c91f2-93d1-43bb-8de7-25c0c817815f)
![PopCloud_Design2](https://github.com/user-attachments/assets/fcc4824a-3ff5-4719-885e-3c9e10851090)
![PopCloud_Design3](https://github.com/user-attachments/assets/fa3dbaca-6e6a-4d2c-aed3-1f95a88a6500)



Here is a sequence diagram of how users would interact with the backend to share their collections.

```mermaid
sequenceDiagram
    actor You as User
    participant Frontend as Web App
    participant Backend as Server/Database

    You->>Frontend: Browse or Open Collection
    Frontend->>Backend: Fetch Collection Data
    Backend-->>Frontend: Return Collection Data
    Frontend-->>You: Display Collection

    You->>Frontend: Share Collection
    Frontend->>Backend: Log Sharing Activity
    Backend-->>Frontend: Confirm Share Logged
    Frontend-->>You: Display Share Confirmation
>>>>>>> 55fe970821fd738f9532cbe73bb01a6b5c2569d5
```

### Key features

<<<<<<< HEAD
- Login, logout, and register
- See high scores
- Receive notifications for other player's achievements
- Play by repeating color sequences
- See a description of the app
- Read inspirational quotes
=======
- Secure login over HTTPS
- Ability to select blind box collection
- Randomization of selected collection
- Ability to add to collection
- Ability to view full collection
- Ability to chat with friends
- Share collection with friends
>>>>>>> 55fe970821fd738f9532cbe73bb01a6b5c2569d5

### Technologies

I am going to use the required technologies in the following ways.

<<<<<<< HEAD
- **HTML** - Four different views, login/register controls, play, scoreboard, and about.
- **CSS** - Complementary color scheme, responsive design, button highlighting during play.
- **React** - Single page application with routing between views, reactive user controls, and state hooks.
- **Service** - Endpoints for authentication, storing/retrieving scores. Third party call to get inspirational quotes.
- **DB/Login** - Stores authentication and scores.
- **WebSocket** - Broadcast user's game notifications.
=======
- **HTML** - Use correct HTML structure. Use HTML for all 5 pages: login, blind box selection, blind box reveal, figurine collection, and chatroom. Links will be used on the blind box reveal page and figurine  collection page.
- **CSS** - Application styling that looks good on different size screens. Complementary colors that pass accessibility. Even spacing between collections. Links styled as buttons.
- **React** - Provides login, collection display, adding figurine to collection, display full collection, share full collection, view friend's collection
- **Service** - Backend service with endpoints for: login, saving figure to collection, and sharing collection with friends. The public API 'Gitter' will be used for the chatroom. 
- **DB/Login** - Stores users, figures collections, and chats with friends in database. Register and login users. Credientials securely stored in database.
- **WebSocket** - Chatting and sharing collection with friends.
>>>>>>> 55fe970821fd738f9532cbe73bb01a6b5c2569d5

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

<<<<<<< HEAD
- [x] **Server deployed and accessible with custom domain name** - [My server link](https://simon.cs260.click).
=======
- [x] **Server deployed and accessible with custom domain name** - [My server link - Pop Depot](https://popdepot.click/).
>>>>>>> 55fe970821fd738f9532cbe73bb01a6b5c2569d5

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

<<<<<<< HEAD
- [x] **HTML pages** - Four different pages. One for each view. `index.html` (Login), `play.html`, `scores.html`, and `about.html`.
- [x] **Proper HTML element usage** - I spent a lot of time learning about elements. I used header, footer, main, nav, img, a, fieldset, input, button, form, and many more.
- [x] **Links** - Links between views.
- [x] **Text** - About page has text.
- [x] **3rd party API placeholder** - About page has a place to display an inspirational quote.
- [x] **Images** - Image is displayed on the about page.
- [x] **Login placeholder** - Placeholder for auth on the login page.
- [x] **DB data placeholder** - High scores displayed on scores page.
- [x] **WebSocket placeholder** - The play page has a text area that will show what other user notifications.
=======
- [x] **HTML pages** - Five HTML pages: Home, Blind Box Selection, Collection, Chat, and About. Each page presents its respective layout and functionality.
- [x] **Proper HTML element usage** - Each page has head, body, nav, and footer. Header tags, table tags, div tags, and paragraph tags were used to format the rest of the pages.
- [x] **Links** - Updated link names. All links can be accessed from every page. Created an additional link for the chat page and a link to directly share collection on the collection page.
- [x] **Text** - The text describing the application on the 'About' page was updated. A description of what a blind box is has been added to the 'Blind Box' page.
- [x] **3rd party API placeholder** - Created a page for the chatting API 'Gitter' to be used. Placeholder is represented by the messaging box.
- [x] **Images** - Changed the image on the about.html page. Added in images of what the figures will be for the blind boxes and what it will look like on the shelves in the collection page. 
- [x] **Login placeholder** - The login placeholder is located on the 'Home' page, in the index.html file.
- [x] **DB data placeholder** - Database data will be used for managing users, figure collections, and chatting with friends. Specifically, the database placeholders are found in the login functionality, the 'Collection' page, and the 'Chat' page. The 'Collection' page will use database data to track which figures the user has received, and the 'Chat' page will use it to save friends and chat history.
- [x] **WebSocket placeholder** - The WebSocket placeholder is on the'Chat' page. 
>>>>>>> 55fe970821fd738f9532cbe73bb01a6b5c2569d5

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

<<<<<<< HEAD
- [x] **Header, footer, and main content body** - I used a common CSS file to style these `main.css`. The views specific things are in `about.css` and `play.css`.
- [x] **Navigation elements** - Bootstrap NavBar. What a time saver.
- [x] **Responsive to window resizing** - Bootstrap and `display:flex' did most the work here. I'm really happy with the game rendering.
- [x] **Application elements** - I used a lot of `display:flex` to get things to align correctly.
- [x] **Application text content** - Set all my text to Helvetica and it looks nice and clean.
- [x] **Application images** - I left the about image as is.
=======
- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
>>>>>>> 55fe970821fd738f9532cbe73bb01a6b5c2569d5
