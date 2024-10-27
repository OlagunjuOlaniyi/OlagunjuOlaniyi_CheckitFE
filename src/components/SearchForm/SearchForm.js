import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SearchSchema = Yup.object().shape({
  status: Yup.string(),
  original_launch: Yup.date(),
  type: Yup.string(),
});

const SearchForm = ({ onSearch }) => (
  <Formik
    initialValues={{ status: "", original_launch: "", type: "" }}
    validationSchema={SearchSchema}
    onSubmit={(values) => onSearch(values)}
  >
    {() => (
      <Form>
        <Field name="status" placeholder="Status" />
        <Field name="original_launch" placeholder="Launch Date" />
        <Field name="type" placeholder="Type" />
        <button type="submit">Search</button>
      </Form>
    )}
  </Formik>
);

export default SearchForm;
