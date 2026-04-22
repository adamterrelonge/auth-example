import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        <span className="brand-icon">🔐</span>
        Auth Tutorial
      </NavLink>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/github">Github</NavLink></li>
        <li><NavLink to="/firebase">Firebase</NavLink></li>
        <li><NavLink to="/example">Example</NavLink></li>
      </ul>
    </nav>
  )
}
