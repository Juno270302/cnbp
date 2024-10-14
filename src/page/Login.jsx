import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  return (
    <form >
      <h3>Login</h3>

      <div className="">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="">
        New user <a href="/register">Register Here</a>
      </p>

    </form>
  );
}

export default Login