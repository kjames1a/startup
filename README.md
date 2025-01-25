# Pop Depot

Pop Depot is the online extension of the popular Pop Mart store. It brings the excitement of blind boxes to the digital world, featuring popular characters like Hirono, Nyota, and Inosoul. Collect virtual figurines, build your collection, and share with your friends, all in one platform. 



## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

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
```

### Key features

- Secure login over HTTPS
- Ability to select blind box collection
- Randomization of selected collection
- Ability to add to collection
- Ability to view full collection
- Ability to chat with friends
- Share collection with friends

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Use correct HTML structure. Use HTML for all 5 pages: login, blind box selection, blind box reveal, figurine collection, and chatroom. Links will be used on the blind box reveal page and figurine  collection page.
- **CSS** - Application styling that looks good on different size screens. Complementary colors that pass accessibility. Even spacing between collections. Links styled as buttons.
- **React** - Provides login, collection display, adding figurine to collection, display full collection, share full collection, view friend's collection
- **Service** - Backend service with endpoints for: login, saving figure to collection, and sharing collection with friends. The public API 'Gitter' will be used for the chatroom. 
- **DB/Login** - Stores users, figures collections, and chats with friends in database. Register and login users. Credientials securely stored in database.
- **WebSocket** - Chatting and sharing collection with friends.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link - Pop Depot](https://popdepot.click/).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

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
