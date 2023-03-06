import React, { useState } from "react";
import "../styles/signup.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { login_user } from "../controllers/user";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
          let obj = {
            user_email: email,
            user_password: password,
          };
          login_user(obj).then((data) => {
            if (data.tag === true) {
              localStorage.setItem("user_token", data.token);
              navigate("/courses");
            } else {
              alert("Invalid login");
            }
            window.location.reload();
          });
      };

    return (
        <>
            <Navbar />
            <div className="h-full flex flex-col items-center justify-center">

            <div className="signup-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input
                            className="signup-inputs"
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            className="signup-inputs"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </label>
                    <br />
                    <button className="signup-button" type="submit">
                        Login
                    </button>
                </form>
            </div>
            </div>
        </>
    );
}

export default Login;
