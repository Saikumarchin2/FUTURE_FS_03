//Skills.js
import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Grid,
  ListItemAvatar,
  Avatar,
  Container
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
//skills icon
import avatarImg from './components/html-5.svg';
import avatarReact from './components/react.svg';
import avatarMui from './components/MUI.png';
import avatarWp from './components/wp.webp';
import javaIcon from './components/java.svg';
import python from './components/py.svg';
import coding from './components/code.png';
import mysql from './components/mysql.png';
import mongoDB from './components/mongoDB.png';
import os from './components/os.png';
import cn from './components/cn.png';
import DBMS from './components/DBMS.png';

// Icons for each skill section
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const SkillProgress = ({ label, value }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="subtitle2" gutterBottom>
      {label} - {value}%
    </Typography>
    <LinearProgress
      variant="determinate"
      value={value}
      aria-label={`${label} skill proficiency ${value}%`}
      sx={{ height: 8, borderRadius: 5, bgcolor: '#e0e0e0', '& .MuiLinearProgress-bar': { backgroundColor: '#1976d2' } }}
    />
  </Box>
);

const Skills = () => {
    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up("md")); // md = 900px

  // dynamically decide grid size
    const gridSize = isBigScreen ? 6 : 12;
  return (
    <Container
      id="skills"
      sx={{
        p: 4,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box textAlign="center" mt={10} mb={5}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Skills
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          My Technical skills
        </Typography>
      </Box>

<Grid container spacing={5} justifyContent="center" sx={{ maxWidth: 1000 }}>

  <Grid item xs={12} md={6} size={gridSize}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box display="flex" alignItems="center">
                <CodeIcon color="primary" sx={{ mr: 1 }} />
                <Typography sx={{ color: '#1976d2', fontWeight: 600 }}>Languages</Typography>
              </Box>
            </AccordionSummary>
<AccordionDetails>
<ListItem>
  <ListItemAvatar>
    <Avatar
      variant="square"
      src={python}
      alt="Python"
      sx={{ width: 30, height: 30 }}
    />
  </ListItemAvatar>
  <ListItemText>
   <SkillProgress label="Python" value={85} />
  </ListItemText>
</ListItem>
<ListItem>
  <ListItemAvatar>
    <Avatar
      variant="square"
      src={javaIcon}
      alt="Java"
      sx={{ width: 30, height: 30 }}
    />
  </ListItemAvatar>
  <ListItemText>
    <SkillProgress label="Java" value={80} />
  </ListItemText>
</ListItem>
<ListItem>
  <ListItemAvatar>
    <Avatar
      variant="square"
      src={coding}
      alt="C/C++"
      sx={{ width: 30, height: 30 }}
    />
  </ListItemAvatar>
  <ListItemText>
    <SkillProgress label="C/C++" value={75} />
  </ListItemText>
</ListItem> 
</AccordionDetails>
</Accordion>
</Grid>

        {/* Web Development */}
         <Grid item xs={12} md={6} size={gridSize}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box display="flex" alignItems="center">
                <WebIcon color="success" sx={{ mr: 1 }} />
                <Typography sx={{ color: 'green', fontWeight: 600 }}>Web Development</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>

<ListItem >
      <ListItemAvatar>
        <Avatar
          variant="square"
          src={avatarImg}
          alt="HTML CSS JS"
          sx={{ width: 30, height: 30 }}
        />
         </ListItemAvatar>
           <ListItemText>
        <SkillProgress label={<strong>HTML | CSS | JavaScript</strong>} value={90} />
      </ListItemText>
          </ListItem>         
           <ListItem>
             <ListItemAvatar>
        <Avatar
          variant="square"
          src={avatarReact}
          alt="BackEnd"
          sx={{ width: 30, height: 30 }}
        />
         </ListItemAvatar>
            <ListItemText>
        <SkillProgress label={<strong>React.js | Node.js | Express.js</strong>} value={85} />
      </ListItemText>
      </ListItem>
      <ListItem>
      <ListItemAvatar>
        <Avatar
          variant="square"
          src={avatarMui}
          alt="MUI"
          sx={{ width: 30, height: 30 }}
        />
         </ListItemAvatar>
              <ListItemText>
        <SkillProgress label={<strong>Material UI</strong>} value={80} />
      </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <Avatar
          variant="square"
          src={avatarWp}
          alt="WordPress"
          sx={{ width: 30, height: 30 }}
        />
         </ListItemAvatar>
      <ListItemText>
        <SkillProgress label={<strong>WordPress</strong>} value={80} />
      </ListItemText>
    </ListItem>
  </List>
  </AccordionDetails>
 </Accordion>
</Grid>
        {/* Databases */}
       <Grid item xs={12} md={6} size={gridSize}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box display="flex" alignItems="center">
                <StorageIcon color="warning" sx={{ mr: 1 }} />
                <Typography sx={{ color: '#f57c00', fontWeight: 600 }}>Databases</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
       <ListItem>
              <ListItemAvatar>
               <Avatar
      variant="square"
      src={mysql}
      alt="Mysql"
      sx={{ width: 30, height: 30 }}
    />
  </ListItemAvatar>
  <ListItemText>
   <SkillProgress label="Mysql" value={80} />
  </ListItemText>
  </ListItem>
  <ListItem>
  <ListItemAvatar>
    <Avatar
      variant="square"
      src={mongoDB}
      alt="MongoDb"
      sx={{ width: 30, height: 30 }}
    />
  </ListItemAvatar>
      <ListItemText>
   <SkillProgress label="MongoDb" value={85} />
     </ListItemText> 
  </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>

        {/* Courses */}
         <Grid item xs={12} md={6} size={gridSize}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box display="flex" alignItems="center">
                <MenuBookIcon color="secondary" sx={{ mr: 1 }} />
                <Typography sx={{ color: '#9c27b0', fontWeight: 600 }}>Courses</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemAvatar>
    <Avatar
      variant="square"
      src={os}
      alt="os"
      sx={{ width: 30, height: 30 }}
    />
  </ListItemAvatar>
        <ListItemText>
        <SkillProgress label={<strong>Operating Systems</strong>} value={85} />
      </ListItemText>
      </ListItem>
                <ListItem>
                  <ListItemAvatar>
    <Avatar
      variant="square"
      src={cn}
      alt="cn"
      sx={{ width: 30, height: 30 }}
    />
  </ListItemAvatar>
        <ListItemText>
        <SkillProgress label={<strong>Computer Networks</strong>} value={80} />
      </ListItemText>
      </ListItem>
                <ListItem>
                  <ListItemAvatar>
    <Avatar
      variant="square"
      src={DBMS}
      alt="DBMS"
      sx={{ width: 30, height: 30 }}
    />
  </ListItemAvatar>
        <ListItemText>
        <SkillProgress label={<strong>DBMS</strong>} value={78} />
      </ListItemText>
      </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
