import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const auth = useAuth();
  const navigate = useNavigate();

  if (auth.user) {
    return (
      <div className="ui container" style={{ minHeight: "77vh" }}>
        <h3>
          You are already logged in!
        </h3>
        <button style={{ marginTop: "10px" }} className="ui red button" onClick={() => auth.logout()}>Logout</button>
      </div>

    );
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      try {
        const userData = { name, email, password };
        await auth.login(userData);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!name)
      errors.name = 'Name is required';
    if (!email)
      errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email))
      errors.email = 'Email is invalid';

    if (!password)
      errors.password = 'Password is required';
    else if (password.length < 6)
      errors.password = 'Password should be at least 6 characters long';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="ui container" style={{ minHeight: "77vh" }}>
      <h2 className="ui header">Login</h2>
      <form className="ui middle floated form segment" style={{ width: "40%" }}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name &&
            <div className="ui pointing red basic label">
              {errors.name}
            </div>
          }
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email &&
            <div class="ui pointing red basic label">
              {errors.email}
            </div>
          }
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password &&
            <div class="ui pointing red basic label">
              {errors.password}
            </div>
          }
        </div>
        <button className="ui button primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div >
  );
};

export default Login;
