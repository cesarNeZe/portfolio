import React from 'react';
import styled from "@emotion/styled";
import { Link, Typography } from "@mui/material";
import project1 from '../images/project1.jpeg';
import project2 from '../images/project2.jpeg';
import project3 from '../images/project3.jpeg';

const ProjectSection = styled('div')`
  background-color: black;
  padding:20px;
  margin-top: 20px;
`;

const StyledBox =styled('div')`
height: 400px;
display:flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
background-color: black;
margin-top: 20px;
`;
const StyledImage = styled('img')`
    width: 300;
    height: 300;
    object-fit: cover;
`
export const Projects: React.FC = () => {
  return (
    <ProjectSection className="project-section">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h4' color='white'>Latest Projects</Typography>
      </div>
      <StyledBox >

      </StyledBox>
      <Typography variant='h6' color='white'>Project links and description</Typography>
      <Typography color='white'>
        1. Ziqaq: see all the historical sites in Palestine as a virtual tour <Link href='https://ziqaq.ps/landing'>Ziqaq</Link>
      </Typography>
      <Typography color='white'>
        2. TravelzMate: For Turkish local travel, users can sign up and register a tour in Turkey <Link href='https://travelzmate.com/'>TravelzMate</Link>
      </Typography>
      <Typography color='white'>
        3. SalesScript: Manage all sales and manufacturing from one website <Link href='https://s2cript.com/'>SalesScript</Link>
      </Typography>
    </ProjectSection>
  );
};
