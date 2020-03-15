import React from "react";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Signup.scss";

// TEST ENV FOR CARPAL LABSPT8 - GITHUB/MIKLO88
function Signup(props) {
  const { errors, touched } = props;

  return (
    <div className='singup-container'>
      <div className='module-nav'>
        {/* login container */}
        <p>Already a user? Click here.</p>
        <Link className='login-link' to='/login'>
          Login
        </Link>

        {/* food for thought. make this a new dropdown option so you don't get re-rendered to a whole new page. save time. */}
      </div>

      <Form className='formik-container'>
        <p className='singup-p'>Sign Up</p>
        {touched.first_name && errors.first_name && <p>{errors.first_name}</p>}
        <label className='field-label'>
          <Field
            className='formik-fields'
            type='text'
            name='first_name'
            placeholder='First Name'
          />
        </label>
        {touched.last_name && errors.last_name && <p>{errors.last_name}</p>}
        <label className='field-label'>
          <Field
            className='formik-fields'
            type='text'
            name='last_name'
            placeholder='Last Name'
          />
        </label>
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

        <Link className='form-btn' type='submit' to='/users'>
          Submit
        </Link>
      </Form>
    </div>
  );
}
export default withFormik({
  mapPropsToValues: values => {
    return {
      first_name: values.first_name || "",
      last_name: values.last_name || "",
      email: values.email || "",
      password: values.password || ""
    };
  },
  validationSchema: Yup.object().shape({
    first_name: Yup.string()
    .required("Please enter your first name."),
    last_name: Yup.string()
    .required("Please enter your last name."),
    email: Yup.string()
      .email("Please enter a valid email.")
      .required("Please enter your email."),
    password: Yup.string()
      .min(10, "Password must be at least 10 characters.")
      .required("Please enter your password")
  }),
  handleSubmit(values) {
    console.log(values);
  }
})(Signup);
