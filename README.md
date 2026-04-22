# React + Firebase Auth Tutorial

A guided, interactive tutorial for **A-Level Computer Science students** learning how to implement user authentication in a React web application using Firebase.

---

## What This Project Is

This project walks you through building a working sign-up and sign-in system from scratch. Rather than just reading about it, you can see the live forms running alongside the actual code that powers them.

The tutorial is split across four pages:

| Page | What it covers |
|------|----------------|
| **Home** | The 8 steps needed to wire Firebase Auth into a React app |
| **GitHub** | Version control concepts and how to connect VS Code to GitHub |
| **Firebase** | What Firebase is, what it offers, and how to set up a project |
| **Example** | A live Sign Up / Sign In demo with code shown side by side |

---

## What You Will Learn

- How to create a Firebase project and register a web app
- How to install and configure the Firebase JavaScript SDK
- How to use React Context (`AuthContext`) to share login state across an entire app
- How `onAuthStateChanged` works and why it matters
- How to build Sign Up and Sign In forms using Firebase Auth
- How to connect a local VS Code project to GitHub for version control

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 19](https://react.dev) | UI framework |
| [Vite](https://vite.dev) | Development server and bundler |
| [Firebase](https://firebase.google.com) | Authentication backend |
| [React Router](https://reactrouter.com) | Client-side navigation between pages |

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd auth-example
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your Firebase config

Open `src/firebase.js` and replace the placeholder values with the config from your own Firebase project (Project Settings → Your apps → SDK setup):

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}
```

### 4. Enable Email/Password Authentication

In the Firebase Console go to **Authentication → Sign-in method** and enable the **Email/Password** provider.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
├── firebase.js              # Firebase initialisation and auth export
├── context/
│   └── AuthContext.jsx      # AuthProvider and useAuth() hook
├── components/
│   └── Navbar.jsx           # Navigation bar with active link highlighting
└── pages/
    ├── Home.jsx             # 8-step auth tutorial cards
    ├── Github.jsx           # GitHub concepts and VS Code setup guide
    ├── Firebase.jsx         # Firebase concepts and project setup guide
    └── Example.jsx          # Live auth demo with code snippets
```

---

## A-Level Relevance

This project directly supports the following areas of the A-Level Computer Science specification:

- **Abstraction** — Firebase abstracts away the complexity of storing and hashing passwords securely
- **Decomposition** — the app is split into small, single-purpose components and pages
- **Data flow** — React Context demonstrates how state can flow through an application without being passed manually between every component
- **Security** — authentication, password rules, and the separation of client keys from source control (`.gitignore`, environment variables)
- **Software development** — version control with Git and GitHub as part of a real development workflow

---

## License

This project is intended for educational use.
