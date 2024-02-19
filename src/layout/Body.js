import React from "react";
import Box from "@mui/material/Button";
import Cesar from '../images/me.JPG';
import { styled, createTheme } from '@mui/material/styles';
import { Grid, Typography } from "@mui/material";
import border from '../images/border.svg'
import untitle from '../images/borderdesign.png';
import newborder from '../images/blackborder.png';
import square from '../images/desig.svg'
import square2 from '../images/square2.svg'
import { Blob } from "../component/Blob";

const theme = createTheme(); 

// const StyledImage = styled('img')`
//   ${({ theme }) => `
//   cursor: pointer;
//   border-image: url('../images/border.svg') 30round;
//   border: 5px solid transparent;
//   background-color: ${theme.palette.primary.main};
//   transition: ${theme.transitions.create(['background-color', 'transform'], {
//     duration: theme.transitions.duration.standard,
//   })};
//   &:hover {
//     background-color: ${theme.palette.secondary.main};
//     transform: scale(1.3);
//   }
//   `}
// `;
const BorderDiv = styled('div')`
 ${({ theme }) =>`
 
   
    background-color:#ded1c8;
    border: 15px solid red;
    border-image-repeat: round;
    border-image-slice: 24%;
    border-image-source: url(${square2});
`  };
`
const AnimatedImage = styled('img')`
  ${({ theme }) => `
 

  height:300px;
 
  // border-image-source:url(/static/media/blackborder.c7d7328f6ba7e2f5a962.png);  
  transition: ${theme.transitions.create('transform', {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    transform: scale(1.1); // Adjust the scale factor as needed
  }
  `}
`;

export const Body = () => {
  
    const skills=[{
        id:1,
        name:'HTML'
    },
    {
        id:2,
        name:'CSS'
    }]
    
  return (

    <Grid container spacing={2} mt={2} >
      <Grid item xs={6}>
        <Typography variant="h2" color="textPrimary">Hello My Name is <strong color="#23123">Cesar Zaitoun</strong></Typography>
     
        <Typography variant='body1' color="textPrimary">Analytical thinker skilled in developing responsive web and mobile applications using React and Angular, I bring two years of experience in Frontend Development and Quality Assurance. Proficient in ensuring top-notch production quality through strategic implementation of automated processes, I navigate complex manufacturing workflows with ease. My</Typography>

        {skills.map((skill)=>(
          <Box component='div' key={skill.id} mt={2}>
            <Typography variant="h3" color="textPrimary">{skill.name}</Typography>
          </Box>
        ))}
      </Grid>

      <Grid item xs={6} display='flex' justifyContent='center'>

       <Blob></Blob>



      </Grid>
    </Grid>
 

  );
};
