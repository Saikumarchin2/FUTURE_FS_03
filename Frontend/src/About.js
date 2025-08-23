// About.js
import React from 'react';
import { Typography, Container, Avatar, Box, Stack } from '@mui/material';
import avatarImg from './components/about_me.jpg';

const About = () => {
  return (
    <Container
      id="about"
      maxWidth="lg"
      sx={{
        py: 6,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box', 
      }}
    >
      {/* Title Section */}
      <Box textAlign="center" mb={10}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Me
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          My introduction
        </Typography>
      </Box>

      <Stack
        direction={{ xs: 'column', md: 'row' }} 
        alignItems="center" 
        justifyContent="center"
      >
        <Avatar
          alt="Portrait of Saikumar Mukkamula"
          src={avatarImg}
          sx={{
            width: { xs: 260, sm: 300, md: 350 },
            height: { xs: 260, sm: 300, md: 350 },
            objectFit: 'cover',
            objectPosition: 'top',
            borderRadius: '50%',
          }}
        />

        <Box
          sx={{
            flex: 1, 
            maxWidth: 600, 
            textAlign: { xs: 'center', md: 'left' },

          }}
        >
<Typography
  variant="h5"
  fontWeight="bold"
  gutterBottom
  sx={{
    fontWeight: 'bold',
    mb: 2,
    fontSize: { xs: '1.1rem', sm: '1.25rem' }
  }}
>
  👋 Hi, I'm Saikumar Mukkamula
</Typography>
  <Typography
  variant="body1"
  sx={{
    fontSize: '1rem',
    lineHeight: 1.8,
    textAlign: 'justify',
  }}
>
  I'm a passionate and driven Computer Science student specializing in Data Science, with a keen interest in full-stack web development. I enjoy turning ideas into real-world applications using modern technologies like React.js, Node.js, Express, and MongoDB. 
  From building intelligent classifiers to analyzing climate change impacts through machine learning, I love solving problems with code. I'm always exploring new tools, sharpening my skills, and collaborating on projects that make a difference. 🧑‍💻✨
</Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default About;