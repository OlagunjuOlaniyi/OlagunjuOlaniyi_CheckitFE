import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addCapsule, editCapsule } from "../../store/capsulesSlice";

const CapsuleSchema = Yup.object().shape({
  id: Yup.string().required("ID is required"),
  status: Yup.string().required("Status is required"),
  original_launch: Yup.date().required("Launch date is required"),
  type: Yup.string().required("Type is required"),
});

const CapsuleForm = ({ initialValues, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (initialValues && initialValues.id) {
      dispatch(editCapsule(values)); // Edit existing capsule
    } else {
      dispatch(addCapsule({ ...values, id: Date.now().toString() })); // Add new capsule with unique ID
    }
    resetForm();
    onClose(); // Close form modal
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CapsuleSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="id">ID</label>
            <Field name="id" disabled={!!initialValues} />
            <ErrorMessage name="id" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <Field name="status" />
            <ErrorMessage name="status" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="original_launch">Launch Date</label>
            <Field name="original_launch" type="date" />
            <ErrorMessage
              name="original_launch"
              component="div"
              className="error"
            />
          </div>
          <div>
            <label htmlFor="type">Type</label>
            <Field name="type" />
            <ErrorMessage name="type" component="div" className="error" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default CapsuleForm;
