import React, { useState, useEffect } from 'react';
import { IconButton, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

interface StyledFooterProps {
  visible: boolean;
}

const StyledFooter = styled("footer")<StyledFooterProps>(({ theme, visible }) => `
  margin-block: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateX(${visible ? '0' : '-70%'});
  transition: transform 0.2s ease-out;
`);

export const Footer: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const transitionEndHandler = () => {
      if (!visible) {
        setVisible(true);
      }
    };

    if (!visible) {
      window.addEventListener('transitionend', transitionEndHandler);
    }

    return () => {
      window.removeEventListener('transitionend', transitionEndHandler);
    };
  }, [visible]);

  const toggleFooter = () => {
    setVisible(prevVisible => !prevVisible);
  };

  return (
    <StyledFooter visible={visible}>
      <Typography variant="h4">Let's Get in Touch</Typography>
      <Stack direction="row" spacing={1}>
        <Link href='https://www.linkedin.com/in/cezar-zaitoun'>
          <IconButton color="info" aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
        </Link>
        <Link href='https://github.com/cesarNeZe'>
          <IconButton color="secondary" aria-label="GitHub">
            <GitHubIcon />
          </IconButton>
        </Link>
      </Stack>
    </StyledFooter>
  );
};
