import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { resetPassword } from "../features/registerSlice";
import "./Login.css";

export const Reset = () => {
  const [data, setData] = useState({});
  const [error, setErrr] = useState({});
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const handleData = (e) => {
    const { name, value } = e.target;
    setData((val) => ({ ...val, [name]: value }));
  };
  const handleReset = (e) => {
    let errorReset = validateReset(data);
    setErrr(errorReset);
    if (Object.keys(errorReset).length === 0) {
      dispatch(resetPassword(data));
      Navigate("/");
    }
  };
  return (
    <div className="Login_main">
      <h1>Reset your password</h1>
      <label className="Login_label">
        Email:<small style={{ color: "red" }}>*</small>
      </label>
      <input
        name="email"
        className="Login_input"
        type="email"
        placeholder="Enter email"
        onChange={handleData}
      ></input>
      <label className="Login_label">
        Password:<small style={{ color: "red" }}>*</small>
      </label>
      <small clasName="align" style={{ color: "red" }}>
        {error.email}
      </small>
      <input
        onChange={handleData}
        name="password"
        className="Login_input"
        type="password"
        placeholder="Enter password"
      ></input>
      <small clasName="align" style={{ color: "red" }}>
        {error.password}
      </small>
      <button className="Login_btn" onClick={handleReset}>
        Reset password
      </button>
    </div>
  );
};
const validateReset = (values) => {
  const error = {};
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email) {
    error.email = "email is required!";
  } else if (!regexEmail.test(values.email)) {
    error.email = "Enter a valid email";
  }
  if (!values.password) {
    error.password = "password is required!";
  } else if (values.password.length < 8) {
    error.password = "Password length should be >=8 ";
  }
  return error;
};
