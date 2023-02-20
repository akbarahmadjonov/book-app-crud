import { Route, Routes } from "react-router-dom";
import { Signup } from "../components/Signup/Signup";
import { Login } from "../components/Login/Login";

export const Public = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
