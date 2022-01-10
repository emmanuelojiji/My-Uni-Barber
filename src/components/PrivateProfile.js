import { Navigate, Outlet } from "react-router-dom";

const PrivateProfile = () => {
  const loggedIn = true;
  return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateProfile;
