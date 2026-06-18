import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px", background: "#e8f5e9", minHeight: "300px" }}>
      <h1>📊 Dashboard</h1>
      <p>Welcome to your protected dashboard!</p>
      <p>Only logged-in users can see this.</p>

      <button
        onClick={handleLogout}
        style={{ background: "red", color: "white" }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard
