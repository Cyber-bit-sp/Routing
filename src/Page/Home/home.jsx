import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return(
    <div style={{ padding: '20px' }}>
      <h1> 🏚️ Home Page</h1>
      <p>Welcome to the simple router demo!</p>

      <button onClick={() => navigate('/about')}>
        Go to About
      </button>

      <button onClick={() => navigate('/profile/JohnDoe')}>
        View John's Profiel
      </button>
    </div>
  )
}

export default Home;