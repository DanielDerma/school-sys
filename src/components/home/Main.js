import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function Main(props) {
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
        recusandae facilis quasi aperiam natus repellat maiores doloremque
        sapiente et, reprehenderit libero, optio fugit? Consequuntur voluptates
        commodi, amet quasi est aperiam dolorem distinctio debitis molestias at
        aut, dolores praesentium. Adipisci obcaecati eum possimus quisquam
        itaque quod et reprehenderit quidem sequi laborum? Alias, distinctio,
        porro quidem nam sapiente dicta eum incidunt voluptatem necessitatibus,
        qui totam! Quidem aut quod adipisci iusto, fuga quos dignissimos qui non
        repudiandae, corrupti ullam, facere voluptatum eius deserunt.
        Consectetur blanditiis quo, id labore nisi tenetur pariatur quos quae
        veniam placeat qui molestiae eos eum obcaecati aut accusantium quod sint
        in! Temporibus hic, sapiente, optio inventore, eaque illo distinctio
        modi veniam suscipit voluptates recusandae magnam debitis dignissimos
        non tempore!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
        recusandae facilis quasi aperiam natus repellat maiores doloremque
        sapiente et, reprehenderit libero, optio fugit? Consequuntur voluptates
        commodi, amet quasi est aperiam dolorem distinctio debitis molestias at
        aut, dolores praesentium. Adipisci obcaecati eum possimus quisquam
        itaque quod et reprehenderit quidem sequi laborum? Alias, distinctio,
        porro quidem nam sapiente dicta eum incidunt voluptatem necessitatibus,
        qui totam! Quidem aut quod adipisci iusto, fuga quos dignissimos qui non
        repudiandae, corrupti ullam, facere voluptatum eius deserunt.
        Consectetur blanditiis quo, id labore nisi tenetur pariatur quos quae
        veniam placeat qui molestiae eos eum obcaecati aut accusantium quod sint
        in! Temporibus hic, sapiente, optio inventore, eaque illo distinctio
        modi veniam suscipit voluptates recusandae magnam debitis dignissimos
        non tempore!
      </Typography>
    </Grid>
  );
}

export default Main;
