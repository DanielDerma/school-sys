import * as Yup from "yup";

export const createCourseInitialValues = (nUnit) => {
  const objUnit = {
    email: "",
  };
  for (let i = 1; i <= nUnit; i++) {
    objUnit[`u${i}`] = "";
  }
  return objUnit;
};
export const createCourseValidationSchema = (nUnit) => {
  const objUnit = {
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
  };
  for (let i = 1; i <= nUnit; i++) {
    objUnit[`u${i}`] = Yup.number()
      .min(0, "Must be 10 characters or less")
      .max(10, "Must be 10 characters or less")
      .required("Required");
  }
  return Yup.object().shape(objUnit);
};

export const generateInputs = (nUnit) => {
  return Array.from(Array(nUnit), (_, i) => `u${i + 1}`);
};
