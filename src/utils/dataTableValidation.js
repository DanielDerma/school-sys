import { TextField } from "@mui/material";
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

// const Inputs = () =>
//   values.map((value) => (
//     <TextField
//       key={value}
//       margin="dense"
//       id="contact_add"
//       label={`Unit ${value}`}
//       type="number"
//       fullWidth
//       variant="standard"
//       error={formik.touched[value] && Boolean(formik.errors[value])}
//       helperText={formik.touched[value] && formik.errors[value]}
//       {...formik.getFieldProps(value)}
//     />
//   ));

export const generateInputs = (nUnit) => {
  return Array.from(Array(nUnit), (_, i) => `u${i + 1}`);

  // return (
  //   <>
  //     <TextField
  //       margin="dense"
  //       id="contact_add"
  //       label="Numero"
  //       type="email"
  //       fullWidth
  //       variant="standard"
  //       error={formik.touched.email && Boolean(formik.errors.email)}
  //       helperText={formik.touched.email && formik.errors.email}
  //       {...formik.getFieldProps("email")}
  //     />
  //     <Inputs values={values} />
  //   </>
  // );
};
