import './pages.css'

const concepts = [
  {
    icon: '🔥',
    title: 'What is Firebase?',
    description:
      'Firebase is Google\'s backend-as-a-service (BaaS) platform. It gives you a database, authentication, hosting, and more — all managed by Google so you can focus on building your app.',
  },
  {
    icon: '🔐',
    title: 'Authentication',
    description:
      'Firebase Auth handles sign-in for you. It supports email/password, Google, GitHub, Apple, and more. No need to build your own auth system from scratch.',
  },
  {
    icon: '🗄️',
    title: 'Firestore Database',
    description:
      'Cloud Firestore is a real-time NoSQL database that syncs data across devices instantly. Data is organized into collections and documents — similar to JSON objects.',
  },
  {
    icon: '🌍',
    title: 'Firebase Hosting',
    description:
      'Deploy your web app to a fast, secure global CDN with a single command. Firebase Hosting gives you a free .web.app domain and supports custom domains.',
  },
  {
    icon: '🛡️',
    title: 'Security Rules',
    description:
      'Security Rules let you control who can read or write your database. Rules run server-side and cannot be bypassed by the client — keeping your data safe.',
  },
  {
    icon: '📊',
    title: 'Firebase Console',
    description:
      'The Firebase Console at console.firebase.google.com is your project dashboard. Monitor users, browse your database, view logs, and configure every service from one place.',
  },
  {
    icon: '🔑',
    title: 'Environment Variables',
    description:
      'Your Firebase config keys should be stored in a .env file (e.g. VITE_API_KEY=...) and added to .gitignore. Never commit raw API keys to GitHub.',
  },
  {
    icon: '📐',
    title: 'Project Structure',
    description:
      'A typical Firebase React project keeps firebase.js at src/firebase.js for the SDK config, auth logic in context/, and Firestore queries in a services/ or hooks/ folder.',
  },
]

const steps = [
  {
    title: 'Go to Firebase Console',
    description:
      'Visit console.firebase.google.com and sign in with your Google account. You\'ll land on your projects dashboard.',
  },
  {
    title: 'Create a New Project',
    description:
      'Click "Add project", enter a project name, and click Continue. You can disable Google Analytics for a tutorial project. Click "Create project".',
  },
  {
    title: 'Enable Email/Password Authentication',
    description:
      'In the left sidebar, click "Authentication" → "Get started". On the Sign-in method tab, click "Email/Password", toggle it enabled, and click Save.',
  },
  {
    title: 'Register Your Web App',
    description:
      'Go to Project Settings (gear icon) → General. Scroll to "Your apps" and click the "</>" icon. Give your app a nickname and click "Register app".',
  },
  {
    title: 'Copy Your Firebase Config',
    description:
      'After registering, Firebase shows a firebaseConfig object with your project\'s API keys. Copy this — you\'ll paste it into your React project.',
    code: `const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
}`,
  },
  {
    title: 'Store Keys in .env',
    description:
      'Create a .env file in your project root. Prefix each key with VITE_ so Vite exposes them to your app. Add .env to .gitignore.',
    code: `# .env
VITE_API_KEY=your_api_key_here
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id`,
  },
  {
    title: 'Initialize Firebase in Your App',
    description:
      'Create src/firebase.js. Import initializeApp and getAuth, build the config from env variables, and export auth so any file can import it.',
    code: `import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)`,
  },
  {
    title: 'Test Authentication',
    description:
      'Run your app with npm run dev and attempt a sign-up. Then check the Firebase Console → Authentication → Users tab. Your new user should appear within seconds.',
    code: 'npm run dev',
  },
]

export default function Firebase() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>Firebase Guide</h1>
        <p>
          Learn what Firebase is, what it offers, and how to set up a project
          from scratch ready for use in your React app.
        </p>
      </header>

      <h2 className="section-title">Core Concepts</h2>
      <div className="cards-grid">
        {concepts.map((c) => (
          <div className="card" key={c.title}>
            <span className="card-icon">{c.icon}</span>
            <h2>{c.title}</h2>
            <p>{c.description}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Step-by-Step: Firebase Project Setup</h2>
      <div className="guide">
        <div className="guide-steps">
          {steps.map((step, i) => (
            <div className="guide-step" key={step.title}>
              <div className="guide-step-num">{i + 1}</div>
              <div className="guide-step-body">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {step.code && <code>{step.code}</code>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
