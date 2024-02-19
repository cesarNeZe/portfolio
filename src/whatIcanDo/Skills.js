import { Grid, Typography, Box } from "@mui/material";

const skills = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
];
export const Skills = () => {
  return (
    <Grid container mt={2}>
      <Grid item xs={6}>
        <Box  p={2} sx={{border:'5px solid black', borderRadius:'20px 10px'}}>
          <Typography variant="h4" >What can I do</Typography>
          {skills.map((skill) => (
            <Box component="div" key={skill.id} mt={2}>
              <Typography variant="h6" color="textPrimary">
              &#x2714; {skill.name}

              </Typography>
              <Typography variant="p" color="textPrimary">
            Description 
              
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid item xs={6}>
      <Box  p={2} sx={{border:'5px solid green', borderRadius:'10px 20px'}}>
          <Typography variant="h4">Skills</Typography>
          {skills.map((skill) => (
            <Box component="div" key={skill.id} mt={2}>
              <Typography variant="h6" color="textPrimary">
              &#x2714; {skill.name}

              </Typography>
           
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};
