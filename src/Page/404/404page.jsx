import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '72px', color: '#e53e3e' }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: '#667eea' }}>
        Go Home
      </Link>
    </div>
  )
}

export default NotFound