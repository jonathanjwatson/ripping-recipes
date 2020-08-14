import React, { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../../utils/UserContext";
import UserForm from "../../components/UserForm/UserForm";

const SignUp = (props) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const user = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = new RegExp(/^(?=.*\d).{4,16}$/);
    console.log(password.value);
    console.log(regex.test(password.value));
    if (!regex.test(password.value)) {
      setPassword({
        ...password,
        error:
          "Password does not meet minimum requirements: one lowercase letter, one uppercase letter, one number",
      });
    } else {
      axios
        .post("/api/users", { email: email.value, password: password.value })
        .then((response) => {
          user.handleLogin(response.data.data);
          setTimeout(() => {
            props.history.push("/recipes");
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setPassword({ value: value, error: "" });
    } else if (name === "email") {
      setEmail({ value: value, error: "" });
    }
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
            password={password}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
