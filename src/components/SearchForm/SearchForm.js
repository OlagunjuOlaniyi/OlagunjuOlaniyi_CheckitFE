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
        <Form>
          <Field name="status" placeholder="Status" />
          <Field name="original_launch" placeholder="Launch Date" />
          <Field name="type" placeholder="Type" />
          <button type="submit">Search</button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
