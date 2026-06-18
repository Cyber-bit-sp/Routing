import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (username.trim()) {
      localStorage.setItem('user', username)
      navigate('/dashboard')
    }
  }

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>🔐 Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ 
            width: '100%', 
            padding: '10px', 
            margin: '10px 0' 
          }}
          required
        />
        <button type="submit" style={{ width: '100%', padding: '10px' }}>
          Login
        </button>
      </form>
      <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        Try: Alice, Bob, or any name
      </p>
    </div>
  )
}

export default Login