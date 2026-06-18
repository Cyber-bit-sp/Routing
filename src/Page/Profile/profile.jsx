import { useParams, useNavigate } from "react-router-dom";

const Profile = () => {
  const { username } = useParams(); // Get username from url
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>👨‍🎓 Profile</h1>
      {username ? (
        <p>
          Viewing Profile For: <strong>{username}</strong>
        </p>
      ) : (
        <p>No UserName specified. Try /profile/YourName</p>
      )}

      <button onClick={() => navigate("/")}>🔙 Go Home</button>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => navigate("/profile/Alice")}>Alice</button>
        <button onClick={() => navigate("/profile/Bob")}>Bob</button>
        <button onClick={() => navigate("/profile/Charlie")}>Charlie</button>
      </div>
    </div>
  );
};

export default Profile;
