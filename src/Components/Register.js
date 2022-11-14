import React, { useState } from "react";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { addRegisterData } from "../features/registerSlice";
import { Link, useNavigate } from "react-router-dom";
import { validation } from "./validation";

export default function Register() {
  const Navigate = useNavigate();
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const state = useSelector((state) => state.register.oldUser);

  const dispatch = useDispatch();
  const handleData = (e) => {
    const { name, value } = e.target;
    setData((val) => ({ ...val, [name]: value }));
  };
  const handleSubmit = () => {
    console.log("data :", data);
    let errorData = validation(data);
    console.log(errorData);
    setError(errorData);
    if (Object.keys(errorData).length === 0) {
      dispatch(addRegisterData(data));
      Navigate(`/Home/${data.email}`);
    }
  };
  console.log("Entire data", data);
  return (
    <div className="Register_Main">
      <span className="Register_title">Register</span>

      <label>
        <span>first Name:</span>
        <input
          name="firstName"
          type="text"
          placeholder="Name"
          onChange={handleData}
        />
        {error.firstName && (
          <small clasName="align" style={{ color: "red" }}>
            {error.firstName}
          </small>
        )}
      </label>
      <label>
        <span>Last Name:</span>
        <input
          name="lastName"
          type="text"
          placeholder="Name"
          onChange={handleData}
        />
      </label>

      <label>
        <span>Email:</span>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleData}
        />
        {error.email && (
          <small clasName="align" style={{ color: "red" }}>
            {error.email}
          </small>
        )}
      </label>
      <label>
        <span>Address:</span>
        <input
          name="address"
          type="text"
          placeholder="Address"
          onChange={handleData}
        />
      </label>
      <label>
        <span>Phone Number:</span>
        <input
          name="Phone"
          type="text"
          placeholder="Ph No"
          onChange={handleData}
        />
        {error.Phone && (
          <small clasName="align" style={{ color: "red" }}>
            {error.Phone}
          </small>
        )}
      </label>
      <label>
        <span>Password:</span>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleData}
        />
        {error.password && (
          <small clasName="align" style={{ color: "red" }}>
            {error.password}
          </small>
        )}
      </label>
      <label>
        <span>Confirm Password:</span>
        <input
          name="confirmPassword"
          type="password"
          placeholder=" confirm Password"
          onChange={handleData}
        />
        {error.confirmPassword && (
          <small clasName="align" style={{ color: "red" }}>
            {error.confirmPassword}
          </small>
        )}
      </label>
      <button className="register_btn" onClick={handleSubmit}>
        Register
      </button>
      <span className="Account">
        Already have an account?
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <span className="Login">Login</span>
        </Link>
      </span>
    </div>
  );
}
