
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import cesarlogo from '../images/Cesarlogo.png';

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
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
        <StyledLogo src={cesarlogo}></StyledLogo>

    </Box>
   
     </>
    )
}