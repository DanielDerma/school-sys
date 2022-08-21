import { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { updateUser, createUser } from "../../utils/firebaseStorage";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

export default function TableAdd({
  open,
  handleClose,
  preview,
  change,
  query,
}) {
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    if (open && preview) {
      setIsEdit(true);
      formik.setValues(
        {
          fname: preview.fname,
          lname: preview.lname,
          contact_add: preview.contact_add,
          age: preview.age,
          role: preview.role,
          email: preview.email,
        },
        false
      );
    }
  }, [open]);

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      contact_add: "",
      age: "",
      email: "",
    },
    validationSchema: Yup.object({
      fname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lname: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      contact_add: Yup.number()
        .typeError("Amount must be a number")
        .required("Please supply your number")
        .test("len", "Must be exactly 10 characters", (val) =>
          val ? val.toString().length === 10 : true
        ),
      age: Yup.number()
        .typeError("Amount must be a number")
        .required("Please supply your age")
        .min(18, "You must be at least 18 years")
        .max(100, "You're too old"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log({ values });
      if (open && preview) {
        updateUser(preview.email, values).then(() => {
          handleClose();
          resetForm();
          change(query);
        });
      } else {
        createUser({ ...values, role: query }).then(() => {
          handleClose();
          resetForm();
          change(query);
        });
      }
    },
  });

  console.log({ preview, query });

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>
            {open && preview ? "Modificar Usuario" : "Agregar Usuario"}
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="fname"
              label="Nombre"
              type="text"
              fullWidth
              variant="standard"
              error={formik.touched.fname && Boolean(formik.errors.fname)}
              helperText={formik.touched.fname && formik.errors.fname}
              {...formik.getFieldProps("fname")}
            />
            <TextField
              margin="dense"
              id="lname"
              label="Apellido"
              type="text"
              fullWidth
              variant="standard"
              error={formik.touched.lname && Boolean(formik.errors.lname)}
              helperText={formik.touched.lname && formik.errors.lname}
              {...formik.getFieldProps("lname")}
            />
            <TextField
              margin="dense"
              id="contact_add"
              label="Numero"
              type="number"
              fullWidth
              variant="standard"
              error={
                formik.touched.contact_add && Boolean(formik.errors.contact_add)
              }
              helperText={
                formik.touched.contact_add && formik.errors.contact_add
              }
              {...formik.getFieldProps("contact_add")}
            />

            <TextField
              margin="dense"
              id="age"
              label="Edad"
              type="number"
              fullWidth
              variant="standard"
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}
              {...formik.getFieldProps("age")}
            />
            {!isEdit && (
              <TextField
                margin="dense"
                id="email"
                label="Email"
                type="text"
                fullWidth
                variant="standard"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                {...formik.getFieldProps("email")}
              />
            )}
            {/* <Box
              sx={{
                "& .MuiTextField-root": { width: "100%" },
              }}
            >
              <TextField
                id="outlined-select-currency"
                select
                label="Role"
                variant="standard"
                error={formik.touched.role && Boolean(formik.errors.role)}
                helperText={formik.touched.role && formik.errors.role}
                {...formik.getFieldProps("role")}
              >
                {roles.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Subscribe</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
