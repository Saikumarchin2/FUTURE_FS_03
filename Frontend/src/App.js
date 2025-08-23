// App.js
import React, { useMemo, useState, useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Box, Typography, Grid, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { getDesignTokens } from './theme';
import { createTheme } from '@mui/material/styles';
import Home from './Home.js';
import About from './About.js';
import Skills from './Skills.js';
import Contact from './Contact.js';
import Qualifications from './Qualification.js';
import Projects from './Projects.js';

function App() {
  const [mode, setMode] = useState('light');
const [currentTime, setCurrentTime] = useState(new Date());

useEffect(() => {
     // Update the time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') || 'light';
    setMode(savedMode);
  }, []);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ mt: '64px' }}>
         <div style={{ scrollBehavior: 'smooth' }}> 
        <Home mode={mode} toggleTheme={toggleTheme} />
        <>
          <About />
          <Skills />
          <Qualifications />
          <Projects /> 
          <Contact />
        </>
  <Box
  sx={{
    bgcolor: '#6C63FF',
    color: 'white',
    py: 8,
    px: 4,
  }}
>
  <Grid container spacing={6} justifyContent="center">
    
    {/* Navigation Links */}
    <Grid item xs={12} sm={4}>
      <Box display="flex" flexDirection="column" gap={2} alignItems="center">
         <Link href="#home" underline="hover" color="inherit" fontSize="1.1rem">Home</Link>
        <Link href="#about" underline="hover" color="inherit" fontSize="1.1rem">About</Link>
        <Link href="#skills" underline="hover" color="inherit" fontSize="1.1rem">Skills</Link>
         <Link href="#qualifications" underline="hover" color="inherit" fontSize="1.1rem">Qualifications</Link>
        <Link href="#projects" underline="hover" color="inherit" fontSize="1.1rem">Projects</Link>
        <Link href="#contact" underline="hover" color="inherit" fontSize="1.1rem">Contact</Link>
      </Box>
    </Grid>
  
 {/* Name & Role */}
    <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
      <Typography variant="h5" fontWeight="bold">
        Saikumar Yadav
      </Typography>
      <Typography variant="body1" mt={2}>
        Full Stack Developer | Tech Enthusiast
      </Typography>
    </Grid>

    {/* Social Icons */}
    <Grid item xs={12} sm={4}>
      <Box display="flex" justifyContent="center" gap={3}>
        <IconButton href="https://www.linkedin.com/in/saikumar-mukkamula-1627a922a" target="_blank" sx={{ color: 'white', fontSize: 30 }}>
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton href="https://github.com/saikumarchin2" target="_blank" sx={{ color: 'white', fontSize: 30 }}>
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton href="https://twitter.com/saikumaryadav" target="_blank" sx={{ color: 'white', fontSize: 30 }}>
          <TwitterIcon fontSize="large" />
        </IconButton>
        <IconButton href="https://www.instagram.com/saikumar_chin2?igsh=ZnAyaWg3Z3Y4amY5" target="_blank" sx={{ color: 'white', fontSize: 30 }}>
          <InstagramIcon fontSize="large" />
        </IconButton>
      </Box>
    </Grid>
  </Grid>

  {/* Copyright */}
  <Box textAlign="center" mt={6}>
    <Typography variant="body1" color="rgba(255,255,255,0.7)">
      {formattedDate} | {formattedTime} <br /> Portfolio by © Saikumar Yadav.<br/> All rights reserved.
    </Typography>
  </Box>
</Box>

      </div>
      </Box>
      
    </ThemeProvider>
  );
}

export default App;
