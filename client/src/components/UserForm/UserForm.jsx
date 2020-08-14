import React from "react";

const UserForm = ({ email, handleInputChange, handleSubmit, password }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="email"
            type="text"
            name="email"
            value={email.value}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email</label>
          <span className="helper-text" data-error="wrong" data-success="right">
            {email.error}
          </span>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="password"
            type="text"
            name="password"
            value={password.value}
            onChange={handleInputChange}
          />
          <label htmlFor="password">Password</label>
          <span
            className="helper-text"
            data-error="wrong"
            data-success="right"
            style={{ color: "red" }}
          >
            {password.error}
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
