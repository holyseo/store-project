import React, { useState } from "react";
import { authenticateUser } from "../utils";

const Login = ({ setUser, setIsLogged }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const getUser = async () => {
      const response = await authenticateUser(email, password);
      // eslint-disable-next-line no-unused-expressions
      response
        ? (setUser(response), setIsLogged(true))
        : setErrorMsg("Invalid email or password");
      console.log(response);
    };
    getUser();
  };
  return (
    <form className="login-form">
      <span className="error-span">{errorMsg}</span>
      <label htmlFor="username" className="login-label">
        Email
      </label>
      <input
        type="text"
        name="email"
        className="login-inp"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="password" className="login-label">
        Password
      </label>
      <input
        type="text"
        name="password"
        className="login-inp"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit" onClick={handleLogin}>
        Submit
      </button>
    </form>
  );
};

export default Login;
