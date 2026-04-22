import './pages.css'

const cards = [
  {
    step: 1,
    icon: '🔥',
    title: 'Create a Firebase Account',
    description:
      'Go to firebase.google.com and click "Get started". Sign in with your Google account — Firebase is free to start and no credit card is needed.',
  },
  {
    step: 2,
    icon: '📁',
    title: 'Create a New Project',
    description:
      'In the Firebase Console, click "Add project", give it a name (e.g. "my-auth-app"), and follow the prompts. You can skip Google Analytics for now.',
  },
  {
    step: 3,
    icon: '🌐',
    title: 'Register Your Web App',
    description:
      'Inside your project, click the "</>" web icon to register your app. Give it a nickname, then copy the firebaseConfig object — you\'ll need this soon.',
  },
  {
    step: 4,
    icon: '📦',
    title: 'Install the Firebase SDK',
    description:
      'In your React project terminal, run the install command to add Firebase as a dependency.',
    code: 'npm install firebase',
  },
  {
    step: 5,
    icon: '⚙️',
    title: 'Configure Firebase',
    description:
      'Create a file at src/firebase.js. Paste your firebaseConfig and call initializeApp() to connect your app to Firebase.',
    code: `import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = { /* your config */ }

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)`,
  },
  {
    step: 6,
    icon: '🧠',
    title: 'Set Up AuthContext',
    description:
      'Create src/context/AuthContext.jsx. Use createContext, useState, and useEffect with onAuthStateChanged to track the signed-in user across your whole app.',
    code: `const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    return onAuthStateChanged(auth, setUser)
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}`,
  },
  {
    step: 7,
    icon: '🎁',
    title: 'Wrap Your App',
    description:
      'In main.jsx, import AuthProvider and wrap your <App /> component so every page and component can access the current user via useContext.',
    code: `<AuthProvider>
  <App />
</AuthProvider>`,
  },
  {
    step: 8,
    icon: '🔑',
    title: 'Build Login & Signup',
    description:
      'Create Login and Signup components. Use signInWithEmailAndPassword and createUserWithEmailAndPassword from Firebase Auth to handle credentials.',
    code: `import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'`,
  },
]

export default function Home() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>React + Firebase Auth</h1>
        <p>
          A step-by-step guide to wiring up authentication in a React app using
          Firebase. Follow the cards below in order.
        </p>
      </header>

      <h2 className="section-title">Getting Started — 8 Steps</h2>

      <div className="cards-grid">
        {cards.map((card) => (
          <div className="card" key={card.step}>
            <div className="card-step">{card.step}</div>
            <span className="card-icon">{card.icon}</span>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            {card.code && <code>{card.code}</code>}
          </div>
        ))}
      </div>
    </main>
  )
}
