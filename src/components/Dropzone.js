import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import FormHelperText from "@mui/material/FormHelperText";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export default function StyledDropzone({ error, getImage, editPost }) {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      getImage(acceptedFiles);
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject || error ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject, error]
  );

  return (
    <>
      <div className="container">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          {!error ? (
            <p>Soltar imagen</p>
          ) : (
            <p style={{ color: "#d32f2f" }}>La imagen es requerida</p>
          )}
        </div>
        {error ? (
          <p style={{ color: "#d32f2f" }}>Contenido es necesario</p>
        ) : null}
      </div>
    </>
  );
}
