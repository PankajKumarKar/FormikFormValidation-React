import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormWithFormik = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    subscribe: false,
    gender: "",
    comments: "",
    country: "",
    hobbies: [],
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    gender: Yup.string().required("Gender is required"),
    country: Yup.string().required("Country is required"),
    hobbies: Yup.array().min(1, "Select at least one hobby"),
  });

  const countries = ["Select a country", "USA", "Canada", "Australia", "Other"];
  const hobbiesList = ["Reading", "Traveling", "Sports", "Music", "Cooking"];

  const handleSubmit = (values, actions) => {
    console.log("Form submitted:", values);
    actions.setSubmitting(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Form with Formik and Bootstrap</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <Field
                type="text"
                name="name"
                className={`form-control ${
                  formik.touched.name && formik.errors.name
                    ? "is-invalid"
                    : formik.values.name
                    ? "is-valid"
                    : ""
                }`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                name="email"
                className={`form-control ${
                  formik.touched.email && formik.errors.email
                    ? "is-invalid"
                    : formik.values.email
                    ? "is-valid"
                    : ""
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                name="password"
                className={`form-control ${
                  formik.touched.password && formik.errors.password
                    ? "is-invalid"
                    : formik.values.password
                    ? "is-valid"
                    : ""
                }`}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label>
                <Field type="checkbox" name="subscribe" /> Subscribe to
                Newsletter
              </label>
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <div>
                <label>
                  <Field type="radio" name="gender" value="male" /> Male
                </label>
                <label>
                  <Field type="radio" name="gender" value="female" /> Female
                </label>
              </div>
              <ErrorMessage
                name="gender"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <Field
                as="select"
                name="country"
                className={`form-control ${
                  formik.touched.country && formik.errors.country
                    ? "is-invalid"
                    : formik.values.country
                    ? "is-valid"
                    : ""
                }`}
              >
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="country"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label>Hobbies:</label>
              <div>
                {hobbiesList.map((hobby) => (
                  <label key={hobby}>
                    <Field type="checkbox" name="hobbies" value={hobby} />{" "}
                    {hobby}
                  </label>
                ))}
              </div>
              <ErrorMessage
                name="hobbies"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comments:</label>
              <Field
                as="textarea"
                name="comments"
                className={`form-control ${
                  formik.touched.comments && formik.errors.comments
                    ? "is-invalid"
                    : formik.values.comments
                    ? "is-valid"
                    : ""
                }`}
              />
              <ErrorMessage
                name="comments"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormWithFormik;
