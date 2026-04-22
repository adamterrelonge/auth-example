import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Github from './pages/Github'
import Firebase from './pages/Firebase'
import Example from './pages/Example'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/github" element={<Github />} />
        <Route path="/firebase" element={<Firebase />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </>
  )
}

export default App
