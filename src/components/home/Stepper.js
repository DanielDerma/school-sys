import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Grid } from "@mui/material";

export default function DotsMobileStepper({ count, handleData }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    handleData("next");
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    handleData("prev");
  };

  const steps = Math.ceil(count / 2);

  return (
    <Grid item xs={12} md={12}>
      <MobileStepper
        variant="dots"
        steps={steps}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 350, flexGrow: 1, mx: "auto" }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === steps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Grid>
  );
}
