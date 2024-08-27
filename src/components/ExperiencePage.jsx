import React from 'react';
import { Grid, Typography, Paper, Box, Divider } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const experiences = [
  {
    title: 'Process Engineer Trainee',
    company: 'National Tsing Hua University',
    duration: '22 Jul 2024 - 02 Aug 2024',
    description: 'Completed specialized training in Semiconductor Fabrication Engineering, gaining hands-on experience in advanced semiconductor manufacturing processes.',
  },
  {
    title: 'Process Engineer Trainee',
    company: 'Department of MSME, IIT Hyderabad',
    duration: '10 Jun 2024 - 12 Jul 2024',
    description: 'Completed a 4-week training to learn and understand Semiconductor Process Technologies.',
  },
  {
    title: 'Certification in Embedded Systems',
    company: 'Design Innovation Center, Panjab University',
    duration: 'July 7, 2022 - August 5, 2022',
    description: 'Completed a training program focused on Embedded Systems, Embedded C, and PCB Design, gaining practical knowledge and skills in these areas.'
  }
];

function ExperiencePage() {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        padding: { xs: '20px', md: '50px' },
        backgroundColor: '#e8f5e9',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h3"
          align="center"
          marginTop={8}
          sx={{
            fontWeight: 'bold',
            color: '#1b5e20',
            marginBottom: '30px',
            fontSize: { xs: '2rem', md: '3rem' }, // Responsive font size
          }}
        >
          My Experience
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index < experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  sx={{
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    backgroundColor: '#ffffff',
                    '&:hover': {
                      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#1b5e20',
                      marginBottom: '10px',
                    }}
                  >
                    {exp.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: '#388e3c',
                      marginBottom: '5px',
                    }}
                  >
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#555',
                      marginBottom: '10px',
                    }}
                  >
                    {exp.duration}
                  </Typography>
                  <Divider sx={{ margin: '10px 0' }} />
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    {exp.description}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid>
      </Grid>
  );
}

export default ExperiencePage;
