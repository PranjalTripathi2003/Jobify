import React from "react";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Link } from "react-router-dom";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo></Logo>
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue=""></FormRow>
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue=""
        ></FormRow>
        <FormRow type="text" name="location" defaultValue=""></FormRow>
        <FormRow type="email" name="name" defaultValue=""></FormRow>
        <FormRow type="password" name="password" defaultValue=""></FormRow>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
