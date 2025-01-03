import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo></Logo>
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue=""></FormRow>
        <FormRow type="password" name="password" defaultValue=""></FormRow>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <button type="button" className="btn btn-block">
          Explore the App
        </button>
        <p>
          Not a member yet?
          <Link to="/Register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
