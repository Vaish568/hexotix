import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const state = useSelector((state) => state.register.oldUser);

  const Navigate = useNavigate();
  console.log("Old user", state);
  const handleLogin = () => {
    let errorLogin = validateLogin(data);
    setError(errorLogin);
    if (Object.keys(errorLogin).length === 0) {
      let found = state?.some((e) => e.email === data.email);
      let index = state?.findIndex((e) => e.email === data.email);
      console.log("Index :", index);
      console.log("found or not", found);

      if (!found) {
        alert("Please register!");
        Navigate("/register");
      } else if (state[index].password !== data.password) {
        alert("Incorrect password");
      } else {
        Navigate(`/Home/${data.email}`);
      }
    }
  };
  const handleData = (e) => {
    const { name, value } = e.target;
    setData((val) => ({ ...val, [name]: value }));
  };
  return (
    <div className="Login_main">
      <span className="title">Login</span>
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
      <small clasName="align" style={{ color: "red" }}>
        {error.email}
      </small>
      <label className="Login_label">
        Password:<small style={{ color: "red" }}>*</small>
      </label>
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
      <Link to={"/reset"} style={{ textDecoration: "none" }}>
        <small style={{ color: "blue" }} className="align_right">
          Forgot password ?
        </small>
      </Link>
      <button className="Login_btn" onClick={handleLogin}>
        Login
      </button>
      <span className="New">
        New here?
        <Link to={`/register`} style={{ textDecoration: "none" }}>
          <span className="Register">Register</span>
        </Link>
      </span>
    </div>
  );
}

const validateLogin = (values) => {
  const error = {};
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email) {
    error.email = "email is required!";
  } else if (!regexEmail.test(values.email)) {
    error.email = "Enter a valid email";
  }
  if (!values.password) {
    error.password = "password is required!";
  }
  return error;
};
