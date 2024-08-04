import { Grid, Typography, Box , Link} from "@mui/material";
import { alpha } from '@mui/system';

const skills=[{
    id:1,
    name:'React',
},
{
    id:3,
    name:'HTML & CSS'
},
{
    id:4,
    name:'Material UI'
},
{
    id:5,
    name:'Bootstrap'
},
{
    id:6,
    name:'JavaScript'
},
{
    id:7,
    name:'TypeScript'
},
{
    id:8,
    name:'Responsive design'
},
{
    id:9,
    name:'Version Control/Git'
},
{
    id:10,
    name:'Testing/Debugging'
}]
const role = [
  {
    id: 1,
    name: "Build Web applications",
    example:'https://travelzmate.com/'
  },
  {
    id: 2,
    name: "Build mobile applications",
    example:'https://ziqaq.ps/landing'
  },
  {
    id: 3,
    name: "Test website for usability ",
  
  },
  {
    id: 4,
    name: "Client side development ",
   
  },
];
export const Skills = () => {
  return (
    <Box sx={{backgroundColor:alpha("#e41010",0.8)}}>

    <Grid container mt={2} >
      <Grid item xs={6} >
        <Box   p={2} sx={{border:'5px solid black', borderRadius:'20px 10px',height:'100%'}}>
          <Typography variant="h4" >What can I do</Typography>
          {role.map((skill) => (
            <Box component="div" key={skill.id} mt={2}>
              <Typography variant="h6" color="textPrimary">
              &#x2714; {skill.name}

              </Typography>
              <Link href={skill.example} >
            {skill?.example}
              
              </Link>
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid item xs={6} >
      <Box  p={2} sx={{border:'5px solid green', borderRadius:'10px 20px',   overflow: 'scroll', height:'100%'}}>
          <Typography variant="h4">Skills</Typography>
          {skills.map((skill) => (
            <Box component="div" key={skill.id} mt={2}>
              <Typography variant="h6" color="textPrimary">
              &#x2795; {skill.name}

              </Typography>
           
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
          </Box>
  );
};
