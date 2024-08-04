
import * as React from 'react';

import Box from '@mui/material/Box';
import cesarlogo from '../images/cesarName.png';
import { IconButton, Link,  } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";

import { styled,  } from '@mui/material/styles';

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

        borderRadius: 1,
      }}
    >
        <Box py={3}>

        <StyledLogo src={cesarlogo}></StyledLogo>
        </Box>

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