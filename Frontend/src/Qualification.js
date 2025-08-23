//Qualification.js
import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  Tabs,
  Tab,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

// Custom styled dot
const CustomTimelineDot = styled(TimelineDot)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `2px solid ${theme.palette.background.default}`,
  boxShadow: '0 0 0 4px rgba(126, 87, 194, 0.2)',
}));

// Main Component
const Qualifications = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_, newValue) => setTabIndex(newValue);

  const education = [
    {
      title: 'B.Tech- CSE( Data Science)',
      institution: 'CMR College of Engineering & Technology, Hyderabad',
      period: '2021 - 2025',
      details: 'CGPA: 8.60 / 10',
    },
    {
      title: '12th',
      institution: 'SR Edu Centre, Hyderabad',
      period: '2021',
      details: 'TSBIE | Percentage: 98.40 / 100',
    },
    {
      title: '10th',
      institution: 'Vishwa Shanthi High School, Warangal',
      period: '2019',
      details: 'BSET | Percentage: 90.25 / 100',
    },
  ];

  const experience = [
    {
      title: 'Web Development Intern',
      company: 'HOMA HEALTH Solutions',
      period: 'July 2025 - Sep 2025 (Remote)',
      details: 'Built responsive web apps using React & MUI',
    },
        {
      title: 'Full Stack Developer Intern',
      company: 'Future Interns',
      period: 'Aug 2025 - Sep 2025 (Remote)',
      details: 'Gaining Hands on experience on Full Stack Development',
    },
            {
      title: 'Full Stack web Development Intern',
      company: 'Unified Mentor Pvt Ltd',
      period: 'Sep 2025 - Dec 2025 (Remote)',
      details: 'Built real world projects using Full Stack Development',
    },
  ];

  const renderTimeline = (items, isEducation = false) => (
    <Timeline position="right" sx={{ mt: 2, '& .MuiTimelineItem-missingOppositeContent:before': { display: 'none' } }}>
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <CustomTimelineDot />
            {index < items.length - 1 && <TimelineConnector  />}
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.paper' }}>
              <Typography variant="h6" component="span" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography>{isEducation ? item.institution : item.company}</Typography>
              <Typography color="text.secondary">{item.period}</Typography>
              <Typography variant="body2">{item.details}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );

  return (
    <Container id="qualifications" maxWidth="lg" sx={{ py: 8, px: { xs: 2, sm: 3 } , mb:2}}>
      <Box textAlign="center" mb={4}>
       <Typography variant="h4" fontWeight="bold" gutterBottom>
          Qualifications
        </Typography>
      <Typography variant="subtitle1" gutterBottom color="text.secondary">
          My journey so far
        </Typography>
      </Box>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          centered
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Education" icon={<SchoolIcon />} iconPosition="start" />
          <Tab label="Experience" icon={<WorkIcon />} iconPosition="start" />
        </Tabs>
    </Box>

      {/* Tab Content */}
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10}>
          {tabIndex === 0 && renderTimeline(education, true)}
          {tabIndex === 1 && renderTimeline(experience)}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Qualifications;
