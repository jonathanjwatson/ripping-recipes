import React, { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../../utils/UserContext";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios call to login
    axios
      .post("/api/login", { email: email, password: password })
      .then((response) => {
        console.log(response.data);
        user.handleLogin(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <form className="col s12" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="email">Email Address</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <div className="row">
              <div className="col s12">
                <button className="btn waves-effect waves-light" type="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
