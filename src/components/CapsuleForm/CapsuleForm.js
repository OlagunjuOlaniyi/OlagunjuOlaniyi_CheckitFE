import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const CapsuleSchema = Yup.object().shape({
  status: Yup.string().required("Status is required"),
  original_launch: Yup.date().required("Launch date is required"),
  type: Yup.string().required("Type is required"),
});

const CapsuleForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={CapsuleSchema}
    onSubmit={onSubmit}
  >
    {() => (
      <Form>
        <Field name="status" placeholder="Status" />
        <Field name="original_launch" placeholder="Launch Date" type="date" />
        <Field name="type" placeholder="Type" />
        <button type="submit">Save</button>
      </Form>
    )}
  </Formik>
);

export default CapsuleForm;
