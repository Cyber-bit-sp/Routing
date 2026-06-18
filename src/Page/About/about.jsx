import { Link } from "react-router-dom";

const About = () => {
  return(
    <div style={{ padding: '20px' }}>
      <h1>🧾 About Page</h1>
      <p> This is a simple React Router demo</p>
      <Link to="/">🔙Back to Home</Link>
    </div>
  )
}

export default About;