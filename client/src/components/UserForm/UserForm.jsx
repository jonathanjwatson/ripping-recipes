import React from "react";

const UserForm = ({ email, handleSubmit, password, setEmail, setPassword }) => {
  return (
    <form onSubmit={handleSubmit}>
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
          <label htmlFor="email">Email</label>
          <span className="helper-text" data-error="wrong" data-success="right">
            Helper text
          </span>
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
          <span className="helper-text" data-error="wrong" data-success="right">
            Helper text
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col s12 center-align">
          <button className="waves-effect waves-light btn">
            Create Account
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
