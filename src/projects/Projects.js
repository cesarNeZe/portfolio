import styled from "@emotion/styled";

import project1 from '../images/project1.jpeg'
import project2 from '../images/project2.jpeg'
import project3 from '../images/project3.jpeg'
import { Link, Typography } from "@mui/material";
export const Projects =()=>{

    return(
        <div className="project-section">
            <div style={{display:'flex',justifyContent:'center'}}>
        <Typography variant='h4' color='white' >Latest Projects</Typography>
        </div>
    <div className="box">
     

  <div className="stack-div"><image src={project1}></image>  </div>
 
  <div className="stack-div"><image src={project2}></image></div>
  <div className="stack-div"><image src={project3}></image></div>
    </div>
    <Typography   variant='h6' color='white'>Project links and description</Typography>
    <Typography color='white'>1. Ziqaq : see all the historical sites in Palestine as a virtual tour  <Link href='https://ziqaq.ps/landing'>Ziqaq</Link></Typography>

    <Typography color='white'>2. TravelzMate : For turkish local travelz as users can sign up and register a tour in Turkey <Link href='https://travelzmate.com/'>TravelzMate</Link></Typography>
    <Typography color='white'>3. SalesScript : Manage all sales and manufacturing from on website  <Link href='https://s2cript.com/'>SalesScript</Link></Typography>

    </div>
    );
}