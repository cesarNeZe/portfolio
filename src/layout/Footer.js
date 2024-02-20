import { IconButton, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import React, { useState, useEffect ,useNavigate} from 'react';

const StyledFooter = styled("footer")`
  ${({ theme, visible }) => `
   margin-block :50px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    flex-direction: column;
    transform: translateX(${visible ? '0' : '-70%'}); // Move from 0% to 100% on the x-axis
    transition: transform 0.2s ease-out; // Adjusted transition property for movement only
  `}
`;

export const Footer = () => {
 
    const [visible, setVisible] = useState(false);
  

    useEffect(() => {
      const transitionEndHandler = () => {
        if (!visible) {
          // Reset transform property once the transition is complete
          setVisible(true);
        }
      };

      if (!visible) {
        // Add event listener for transition end
        window.addEventListener('transitionend', transitionEndHandler);
      }

      // Remove event listener when component unmounts
      return () => {
        window.removeEventListener('transitionend', transitionEndHandler);
      };
    }, [visible]);

    // Function to toggle visibility of the footer
    const toggleFooter = () => {
      setVisible(prevVisible => !prevVisible);
    };

  return (
      <StyledFooter visible={visible} >
        <Typography variant="h4">Lets Get in Touch</Typography>
        <Stack direction="row" spacing={1}>
            <Link href='https://www.linkedin.com/in/cezar-zaitoun'>
          <IconButton color="info" aria-label="LinkedIn"  >
            <LinkedInIcon />
          </IconButton>
          </Link>
          <Link href='https://github.com/cesarNeZe'>
          <IconButton color="secondary" aria-label="GitHub"  >
            <GitHubIcon />
          </IconButton>
          </Link>
     
        </Stack>
      </StyledFooter>
  );
};
