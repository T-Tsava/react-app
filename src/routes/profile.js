import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Profile</h2>
      <Outlet />
    </main>
  );
}

export default Profile;