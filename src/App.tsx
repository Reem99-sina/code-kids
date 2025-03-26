import { Route, Routes } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import MainHeader from "./components/header/main-header";
import Login from "./pages/Login";
import GoogleCallbackHandler from "./pages/AuthGoogle";
import Dashboard from "./pages/Dashboard";
import AddChild from "./pages/AddChild";
import ForgetPassword from "./pages/Forget-Password";

function App() {
  return (
    <div className="flex flex-col h-full w-full bg-blackPurple">
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route path="/" element={<Home />} index />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-child" element={<AddChild />} />
        </Route>
        <Route path="/auth/google/login" element={<GoogleCallbackHandler />} />
      </Routes>
    </div>
  );
}

export default App;
