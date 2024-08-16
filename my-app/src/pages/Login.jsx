import { useNavigate } from "react-router-dom";

import TSInput from "../controls/TSInput.jsx";
import TSButton from "../controls/TSButton.jsx";

function LoginPage() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/");
  }
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 content-center">
      <div className=" bg-white rounded p-16 shadow-2xl w-1/3 mx-auto">
        <h1 className="font-bold text-2xl text-center">Login</h1>
        <div className="mt-4">
          <TSInput type="text" label="Username:" />
        </div>
        <div className="mt-4">
          <TSInput type="password" label="Password:" />
        </div>

        <div className="mt-4 text-center space-x-2">
          <TSButton name="Login" onClick={() => handleLogin()} />
          <TSButton name="Sign up" onClick={() => handleLogin()} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
