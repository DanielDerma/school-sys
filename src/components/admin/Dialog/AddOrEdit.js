import { useState, useEffect, useMemo } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import * as Yup from "yup";
import { updateUser, createUser } from "../../../utils/firebaseStorage";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";

export default function TableAdd({
  open,
  handleClose,
  query,
  preview,
  change,
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log({ preview });
    if (preview) {
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
  }, [formik, preview]);

  const isEdit = useMemo(() => {
    return !preview ? true : false;
  }, [preview]);

  const handleCloseWithReset = () => {
    handleClose();
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      age: "",
      contact_add: "",
      email: "",
    },
    validationSchema: Yup.object({
      fname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lname: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      age: Yup.number()
        .min(18, "Debe de ser mayor de edad")
        .max(100, "Must be 100 or less")
        .required("Required"),
      contact_add: Yup.number()
        .typeError("Amount must be a number")
        .required("Please supply your number")
        .test("len", "Must be exactly 10 characters", (val) =>
          val ? val.toString().length === 10 : true
        ),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      if (open && preview) {
        console.log("update");
        updateUser(preview.email, values)
          .then(() => {
            handleClose();
            resetForm();
            change(query);
            setLoading(false);
          })
          .catch((elem) => {
            console.log(elem);
            setLoading(false);
          });
      } else {
        const password = Math.random()
          .toString(36)
          .slice(-8);

        createUser({
          ...values,
          role: query,
          initialPassword: password,
        }).then(() => {
          handleClose();
          resetForm();
          change(query);
          setLoading(false);
        });
      }
    },
  });

  return (
    <div>
      <Dialog open={open} onClose={handleCloseWithReset}>
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>
            {!isEdit ? "Modificar Usuario" : "Agregar Usuario"}
          </DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="nombre"
              label="Nombres"
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
              label="Apellidos"
              type="text"
              fullWidth
              variant="standard"
              error={formik.touched.lname && Boolean(formik.errors.lname)}
              helperText={formik.touched.lname && formik.errors.lname}
              {...formik.getFieldProps("lname")}
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
            <TextField
              margin="dense"
              id="contact"
              label="Contacto"
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
            {isEdit && (
              <TextField
                margin="dense"
                id="email"
                label="Correo"
                type="email"
                fullWidth
                variant="standard"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                {...formik.getFieldProps("email")}
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseWithReset}>Cancel</Button>
            <LoadingButton type="submit" loading={loading}>
              Añadir
            </LoadingButton>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
