import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './Page/Home/home'
import About from './Page/About/about'
import Contact from './Page/Contact/contact'
import Profile from './Page/Profile/profile'
import Dashboard from './Page/Dashboard/dashboard'
import Login from './Page/Login/login'
import NotFound from './Page/404/404page'

// Simple Protected Route component
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('user')
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }
  return children
}

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav style={{ padding: '20px', background: '#333', color: 'white' }}>
        <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', marginRight: '15px' }}>About</Link>
        <Link to="/contact" style={{ color: 'white', marginRight: '15px' }}>Contact</Link>
        <Link to="/profile" style={{ color: 'white', marginRight: '15px' }}>Profile</Link>
        <Link to="/dashboard" style={{ color: 'white', marginRight: '15px' }}>Dashboard</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        
        {/* Profile with dynamic parameter */}
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        
        {/* Protected route */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* 404 - Must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App