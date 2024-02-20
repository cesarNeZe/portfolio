
import * as React from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import cesarlogo from '../images/Cesarlogo.png';
import { IconButton, Link, Typography } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";

import { styled, createTheme } from '@mui/material/styles';
import {ColorModeContext} from '../App' // Make sure to provide the correct path

const StyledLogo = styled('img')
`
   width:200px;
   height:50px;
`
export const Header =()=>{

    return(
     <>
      <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >

        <StyledLogo src={cesarlogo}></StyledLogo>

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
    </Box>
   
     </>
    )
}