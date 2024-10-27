import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setFilteredCapsules } from "../../store/capsulesSlice";

const SearchSchema = Yup.object().shape({
  status: Yup.string(),
  original_launch: Yup.date(),
  type: Yup.string(),
});

const SearchForm = ({ capsules }) => {
  const dispatch = useDispatch();

  const handleSearch = (values) => {
    const filtered = capsules.filter(
      (capsule) =>
        (!values.status || capsule.status.includes(values.status)) &&
        (!values.original_launch ||
          capsule.original_launch.includes(values.original_launch)) &&
        (!values.type || capsule.type.includes(values.type))
    );
    dispatch(setFilteredCapsules(filtered));
  };

  return (
    <Formik
      initialValues={{ status: "", original_launch: "", type: "" }}
      validationSchema={SearchSchema}
      onSubmit={handleSearch}
    >
      {() => (
        <Form className="flex gap-3">
          {/* <label htmlFor="status">Status</label> */}
          <Field
            name="status"
            as="select"
            className="border-2 rounded-md py-2 px-2"
          >
            <option value="">Select status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="retired">Retired</option>
          </Field>

          <Field
            name="original_launch"
            placeholder="Launch Date"
            className="border-2 rounded-md py-2 px-2"
          />
          <Field
            name="type"
            placeholder="Type"
            className="border-2 rounded-md py-2 px-2"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-[#161616] text-[#fff] border rounded-md"
          >
            Filter
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
