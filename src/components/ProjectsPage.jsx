import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, Tooltip, Box, Chip } from '@mui/material';
import digitalCalculatorImg from '../assets/digitalCalculator.png'; // Replace with actual image paths
import vendingMachineImg from '../assets/vendingMachine.png'; // Replace with actual image paths

const projects = [
  {
    title: 'Digital Calculator App',
    description: 'A functional digital calculator app designed using MATLAB App Designer, supporting basic arithmetic operations like addition, subtraction, multiplication, division, and exponentiation.',
    image: digitalCalculatorImg,
    link: 'https://github.com/vaibhavgupta03/Digital-Calculator-App-MATLAB',
    skills: ['MATLAB', 'GUI Design', 'App Designer', 'Arithmetic Operations'],
  },
  {
    title: 'Automatic Vending Machine',
    description: 'The vending machine accepts two types of inputs and provides the appropriate change or delivers the product based on the amount inserted, designed using Verilog.',
    image: vendingMachineImg,
    link: 'https://github.com/vaibhavgupta03/Automatic-Vending-Machine',
    skills: ['Verilog', 'FSM Design', 'Digital Logic', 'Hardware Description Language'],
  }
];

function ProjectsPage() {
  return (
    <div id="projects">
    <Grid
      container
        spacing={3}
        marginTop={{md:1,xs:3}}
      sx={{
        padding: { xs: '20px', md: '50px' },
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 'bold',
            color: '#1a237e',
            fontSize: { xs: '2rem', md: '3rem' }, // Responsive font size
          }}
        >
          My Projects
        </Typography>
      </Grid>
      {projects.map((project) => (
        <Grid item xs={12} md={6} lg={4} key={project.title}>
          <Tooltip title={project.description} arrow>
            <Card
              sx={{
                maxWidth: 345,
                margin: 'auto',
                marginBottom:'3vh',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
                sx={{
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 'bold',
                    color: '#1a237e',
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    color: '#555',
                  }}
                >
                  {project.description}
                </Typography>
                <Box
                  sx={{
                    marginTop: '10px',
                    textAlign: 'center',
                  }}
                >
                  {project.skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      sx={{
                        margin: '5px',
                        backgroundColor: '#e3f2fd',
                        color: '#1a237e',
                        fontWeight: 'bold',
                      }}
                    />
                  ))}
                </Box>
                <Box
                  sx={{
                    marginTop: '10px',
                    textAlign: 'center',
                  }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      color: '#1a237e',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      transition: 'color 0.3s ease',
                      '&:hover': {
                        color: '#90caf9',
                      },
                    }}
                  >
                    View Project
                  </a>
                </Box>
              </CardContent>
            </Card>
          </Tooltip>
        </Grid>
      ))}
      </Grid>
      </div>
  );
}

export default ProjectsPage;
