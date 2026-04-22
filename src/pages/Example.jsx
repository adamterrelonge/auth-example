import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useAuth } from '../context/AuthContext'
import './pages.css'
import './Example.css'

// ─── Code snippets shown alongside each view ────────────────────────────────

const FIREBASE_CONFIG_CODE = `// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)`

const AUTH_CONTEXT_CODE = `// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // onAuthStateChanged fires whenever the user logs in or out.
    // Returning the unsubscribe function cleans up the listener.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const logout = () => signOut(auth)

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}`

const MAIN_WRAP_CODE = `// src/main.jsx
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)`

const SIGNUP_CODE = `// Sign Up — createUserWithEmailAndPassword
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

async function handleSignUp(email, password) {
  try {
    // Firebase creates the account and signs the user
    // in immediately. onAuthStateChanged fires next.
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    console.log('Signed up as:', credential.user.email)
  } catch (err) {
    // err.code — e.g. 'auth/email-already-in-use'
    // err.message — human-readable description
    console.error(err.message)
  }
}`

const SIGNIN_CODE = `// Sign In — signInWithEmailAndPassword
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

async function handleSignIn(email, password) {
  try {
    const credential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    console.log('Signed in as:', credential.user.email)
  } catch (err) {
    // err.code — e.g. 'auth/wrong-password'
    //              or 'auth/user-not-found'
    console.error(err.message)
  }
}`

// ─── Steps data ─────────────────────────────────────────────────────────────

const STEPS = [
  {
    title: 'Create a Firebase Project',
    image: '/Firebase set-up.png',
    description:
      'Head to the Firebase Console (console.firebase.google.com) and click "Add project". Enter a name, skip Google Analytics, and click "Create project". Firebase provisions your backend in seconds.',
  },
  {
    title: 'Register Your Web App',
    image: '/Firebase-Web-App selection.png',
    description:
      'From the project dashboard, click the web icon (</>) to register your React app. Give it a nickname — this ties your frontend to the Firebase project and unlocks the SDK config you need next.',
  },
  {
    title: 'Copy the SDK Config',
    image: '/Firebase SDK.png',
    description:
      'After registration Firebase shows a firebaseConfig object. These are your project\'s unique API keys. Copy the real values and paste them into firebase.js, replacing the placeholders below.',
    code: FIREBASE_CONFIG_CODE,
  },
  {
    title: 'Create AuthContext',
    description:
      'Create src/context/AuthContext.jsx. This uses React\'s Context API to share the signed-in user everywhere in your app without prop drilling. onAuthStateChanged is the Firebase listener that fires whenever the user logs in or out — it runs once on mount and cleans up automatically.',
    code: AUTH_CONTEXT_CODE,
  },
  {
    title: 'Wrap Your App with AuthProvider',
    description:
      'In main.jsx, wrap <App /> with <AuthProvider>. From this point on, any component in the tree can call useAuth() to read the current user or call logout().',
    code: MAIN_WRAP_CODE,
  },
  {
    title: 'Sign Up Component',
    description:
      'createUserWithEmailAndPassword creates a new Firebase account and signs the user in immediately. The password must be at least 6 characters. On success onAuthStateChanged fires, updating the context automatically.',
    code: SIGNUP_CODE,
  },
  {
    title: 'Sign In Component',
    description:
      'signInWithEmailAndPassword checks the credentials against Firebase and returns a UserCredential on success. The user\'s email, uid, and other profile fields are then available via useAuth() throughout the app.',
    code: SIGNIN_CODE,
  },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

function CodeBlock({ code }) {
  return (
    <div className="code-block">
      <pre><code>{code}</code></pre>
    </div>
  )
}

function SignedInBanner({ user, logout }) {
  return (
    <div className="signed-in-banner">
      <span>✅ Signed in as <strong>{user.email}</strong></span>
      <button className="signout-btn" onClick={logout}>Sign out</button>
    </div>
  )
}

function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Create an account</h2>
      <p className="form-hint">Enter an email and password to register.</p>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />
      </label>
      <label>
        Password <span className="field-note">(min 6 characters)</span>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="••••••••"
          required
        />
      </label>
      {error && <p className="form-error">{error}</p>}
      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? 'Creating account…' : 'Sign Up'}
      </button>
    </form>
  )
}

function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Welcome back</h2>
      <p className="form-hint">Sign in to your existing account.</p>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="••••••••"
          required
        />
      </label>
      {error && <p className="form-error">{error}</p>}
      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? 'Signing in…' : 'Sign In'}
      </button>
    </form>
  )
}

// ─── Main page ───────────────────────────────────────────────────────────────

export default function Example() {
  const [tab, setTab] = useState('signup')
  const { user, logout } = useAuth()

  return (
    <main className="page">
      <header className="page-header">
        <h1>Live Example</h1>
        <p>
          Try the auth forms below. The Steps tab walks through every piece of
          code that makes this work.
        </p>
      </header>

      {user && <SignedInBanner user={user} logout={logout} />}

      {/* Tab toggle */}
      <div className="tab-bar">
        {[
          { key: 'signup', label: 'Sign Up' },
          { key: 'signin', label: 'Sign In' },
          { key: 'steps', label: 'Steps' },
        ].map(t => (
          <button
            key={t.key}
            className={`tab-btn ${tab === t.key ? 'active' : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Sign Up */}
      {tab === 'signup' && (
        <div className="example-split">
          <div className="example-demo">
            {user
              ? <div className="already-in">You are already signed in. Sign out first to create a new account.</div>
              : <SignUpForm />
            }
          </div>
          <div className="example-code">
            <p className="code-label">createUserWithEmailAndPassword</p>
            <CodeBlock code={SIGNUP_CODE} />
          </div>
        </div>
      )}

      {/* Sign In */}
      {tab === 'signin' && (
        <div className="example-split">
          <div className="example-demo">
            {user
              ? <div className="already-in">You are signed in as <strong>{user.email}</strong>.</div>
              : <SignInForm />
            }
          </div>
          <div className="example-code">
            <p className="code-label">signInWithEmailAndPassword</p>
            <CodeBlock code={SIGNIN_CODE} />
          </div>
        </div>
      )}

      {/* Steps */}
      {tab === 'steps' && (
        <div className="steps-list">
          {STEPS.map((step, i) => (
            <div className="step-card" key={step.title}>
              <div className="step-header">
                <div className="guide-step-num">{i + 1}</div>
                <h3>{step.title}</h3>
              </div>
              {step.image && (
                <div className="step-image-wrap">
                  <img src={step.image} alt={step.title} className="step-image" />
                </div>
              )}
              <p className="step-desc">{step.description}</p>
              {step.code && <CodeBlock code={step.code} />}
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
