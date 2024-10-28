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
    <div>
      <h2 className="font-bold text-[22px]">
        {initialValues ? "Edit" : "Add new"} capsule
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <h3 className="font-semibold text-[20px] my-3">User details</h3>
        <div className="flex gap-2 justify-between mt-2">
          <div className="flex flex-col w-[48%]">
            <label htmlFor="id" className="text-[14px]">
              Capsule ID*
            </label>
            <input
              id="id"
              name="id"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.id}
              disabled={!!initialValues}
              className="border-2 py-2 px-2 rounded-md "
            />
            {formik.errors.id ? <div>{formik.errors.id}</div> : null}
          </div>
          <div className="flex flex-col w-[48%]">
            <label htmlFor="status" className="text-[14px]">
              Status
            </label>
            <select
              id="status"
              name="status"
              onChange={formik.handleChange}
              value={formik.values.status}
              className="border-2 py-2 px-2 rounded-md"
            >
              <option value="">Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="retired">Retired</option>
            </select>
            {formik.errors.status ? <div>{formik.errors.status}</div> : null}
          </div>
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="original_launch" className="text-[14px]">
            Original Launch Date*
          </label>
          <input
            id="original_launch"
            name="original_launch"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.original_launch}
            className="border-2 py-2 px-2 rounded-md"
          />
          {formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="type" className="text-[14px]">
            Type
          </label>
          <input
            id="type"
            name="type"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.type}
            className="border-2 py-2 px-2 rounded-md"
          />
          {formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="bg-[#1d1d1d] text-white py-2 px-8 mt-2 rounded-md"
        >
          {initialValues ? "Update" : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default CapsuleForm;
