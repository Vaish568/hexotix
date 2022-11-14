import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Home = () => {
  const { email } = useParams();
  const state = useSelector((state) => state.register.olsUser);
  console.log(state);
  return (
    <div>
      <h1>Welcome </h1>
      <p>{email}</p>
    </div>
  );
};
