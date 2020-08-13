import React, { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../../utils/UserContext";
import UserForm from "../../components/UserForm/UserForm";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users", { email, password })
      .then((response) => {
        user.handleLogin(response.data.data);
        setTimeout(() => {
          props.history.push("/recipes");
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 center-align">
          <h1>Sign Up!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <UserForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
