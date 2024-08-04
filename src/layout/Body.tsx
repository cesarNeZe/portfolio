import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import { Blob } from "../component/Blob";

export const Body: React.FC = () => {
  return (
    <Grid container spacing={2} mt={2}>
      <Grid item xs={6} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
        <Typography variant="h2" color="darkblue" sx={{ fontSize: 25, fontWeight: 700 }}>
          Frontend Developer (React & Angular){" "} <Typography variant="body1">&#9996;</Typography>
        </Typography>

        <Typography variant="body1" color="textPrimary" mt={2}>
          Hello my name is Cesar Zaitoun a software engineer,
        </Typography>
        <Typography variant="body1">
          Let's have a chat &#128073;&#160;&#160;&#160;<Link href='https://calendly.com/cesarzaitoun/1to1-meeting'>Calendly</Link>
        </Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="center">
        <Blob />
      </Grid>
    </Grid>
  );
};
