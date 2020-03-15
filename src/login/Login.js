import React from "react";
import { NavLink } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Login.scss";

// TEST ENV FOR CARPAL LABSPT8 - GITHUB/MIKLO88
function Login(props) {
  const { errors, touched } = props;

  return (
    <div className='login-container'>
      <div className='module-nav'>
        {/* signup container */}
        <p className='signup-p'>New to the site? Create an account here!</p>
        <NavLink className='signup-link' to='/signup'>
          Sign Up
        </NavLink>
      </div>

      {/* form container */}
      <Form className='formik-container'>
        <p className='login-p'>Login</p>

        {touched.email && errors.email && <p>{errors.email}</p>}
        <label className='field-label'>
          <Field
            className='formik-fields'
            type='email'
            name='email'
            placeholder='email'
          />
        </label>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <label className='field-label'>
          <Field
            className='formik-fields'
            type='password'
            name='password'
            placeholder='password'
          />
        </label>

        <NavLink className='form-btn' type='submit' to='/user'>
          Submit
        </NavLink>
      </Form>
    </div>
  );
}

export default withFormik({
  mapPropsToValues: values => {
    return {
      email: values.email || "",
      password: values.password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email.")
      .required("Please enter your email."),
    password: Yup.string()
      .min(10, "Password must be at least 10 characters.")
      .required("Please enter your password.")
  }),
  handleSubmit(values) {
    console.log(values);
  }
})(Login);
