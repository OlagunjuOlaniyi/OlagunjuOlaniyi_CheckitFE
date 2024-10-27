import * as Yup from "yup";

const capsuleValidationSchema = Yup.object().shape({
  id: Yup.string()
    .required("ID is required")
    .matches(/^[A-Za-z0-9]+$/, "ID can only contain letters and numbers"),

  status: Yup.string()
    .required("Status is required")
    .oneOf(["active", "inactive", "retired"], "Invalid status value"),

  type: Yup.string().required("Type is required"),

  original_launch: Yup.date()
    .nullable()
    .typeError("Must be a valid date format (YYYY-MM-DD)"),
});

export default capsuleValidationSchema;
