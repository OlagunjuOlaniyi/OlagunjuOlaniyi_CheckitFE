import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addCapsule, editCapsule } from "../../store/capsulesSlice";
import * as Yup from "yup";

const CapsuleForm = ({ initialValues, onClose }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValues || { id: "", status: "", description: "" },
    validationSchema: Yup.object({
      id: Yup.string().required("ID is required"),
      status: Yup.string().required("Status is required"),
      original_launch: Yup.date().required("Launch date is required"),
      type: Yup.string().required("Type is required"),
    }),
    onSubmit: (values) => {
      if (initialValues) {
        // If editing, dispatch editCapsule
        dispatch(editCapsule(values));
      } else {
        // If adding new, dispatch addCapsule
        dispatch(addCapsule(values));
      }
      onClose(); // Close modal after submit
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="id">ID</label>
        <input
          id="id"
          name="id"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.id}
          disabled={!!initialValues}
        />
        {formik.errors.id ? <div>{formik.errors.id}</div> : null}
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <input
          id="status"
          name="status"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.status}
        />
        {formik.errors.status ? <div>{formik.errors.status}</div> : null}
      </div>
      <div>
        <label htmlFor="original_launch">Launch Date</label>
        <input
          id="original_launch"
          name="original_launch"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.original_launch}
        />
        {formik.errors.description ? (
          <div>{formik.errors.description}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="type">Type</label>
        <input
          id="type"
          name="type"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.type}
        />
        {formik.errors.description ? (
          <div>{formik.errors.description}</div>
        ) : null}
      </div>
      <button type="submit">{initialValues ? "Update" : "Add"}</button>
    </form>
  );
};

export default CapsuleForm;
