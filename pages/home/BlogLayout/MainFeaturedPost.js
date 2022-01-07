import { useState } from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import MobileStepper from "@mui/material/MobileStepper";
import { Button } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { featuredPosts } from "../../../lib/Posts/data";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function MainFeaturedPost(props) {
  const theme = useTheme();
  const { post } = props;

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = featuredPosts.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const Stepper = () => (
    <MobileStepper
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
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
  );

  return (
    <Paper
    // sx={{
    //   position: "relative",
    //   backgroundColor: "grey.800",
    //   color: "#fff",
    //   mb: 4,
    //   // backgroundSize: "cover",
    //   // backgroundRepeat: "no-repeat",
    //   // backgroundPosition: "center",
    // }}
    >
      {/* Increase the priority of the hero background image */}

      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {featuredPosts.map((step, index) => (
          <Grid
            container
            key={step.id}
            sx={{
              backgroundImage: `url(${step.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "400px",
            }}
          >
            <Grid item md={6}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  sx={{
                    position: "relative",
                    p: { xs: 3, md: 6 },
                    pr: { md: 0 },
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    {step.title}
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    {step.description}
                  </Typography>
                </Box>
              ) : null}
            </Grid>
          </Grid>
        ))}
      </AutoPlaySwipeableViews>
      <Stepper />
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
