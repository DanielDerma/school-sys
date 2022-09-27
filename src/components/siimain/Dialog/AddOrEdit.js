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
import { updateCourse, createCourse } from "../../../utils/firebaseStorage";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import {
  createCourseInitialValues,
  createCourseValidationSchema,
  generateInputs,
} from "../../../utils/dataTableValidation";

export default function TableAdd({
  open,
  nUnit,
  handleClose,
  query,
  preview,
  change,
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log({ preview });
    if (preview) {
      formik.setValues({ ...preview.ranks, email: preview.email }, false);
    }
  }, [formik, preview]);

  const isEdit = useMemo(() => {
    return preview;
  }, [preview]);

  const handleCloseWithReset = () => {
    handleClose();
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: createCourseInitialValues(nUnit),
    validationSchema: createCourseValidationSchema(nUnit),
    onSubmit: (values, { resetForm }) => {
      setLoading(true);

      if (preview) {
        const { email, ...ranks } = values;
        console.log({ ranks, email });
        updateCourse(email, ranks, query)
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
        const { email, ...ranks } = values;
        createCourse(email, ranks, query).then(() => {
          handleClose();
          resetForm();
          change(query);
          setLoading(false);
        });
      }
    },
  });

  console.log({ formik });

  return (
    <div>
      <Dialog open={open}>
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>
            {isEdit ? "Modificar Usuario" : "Agregar Usuario"}
          </DialogTitle>
          <DialogContent>
            {generateInputs(nUnit).map((elem) => (
              <TextField
                key={elem}
                margin="dense"
                id="nombre"
                label={elem.toUpperCase()}
                type="number"
                fullWidth
                variant="standard"
                error={formik.touched[elem] && Boolean(formik.errors[elem])}
                helperText={formik.touched[elem] && formik.errors[elem]}
                {...formik.getFieldProps(elem)}
              />
            ))}

            {!isEdit && (
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
