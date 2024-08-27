import React from 'react';
import { Grid, Typography, Box, Chip, Divider } from '@mui/material';

function SkillsPage() {
  return (
    <div id="skills">
    <Grid
      container
      spacing={4}
      sx={{
        padding: { xs: '20px', md: '50px' },
        backgroundColor: '#f0f4f8', // Light grayish-blue background
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      {/* Header Section */}
      <Grid item xs={12}>
        <Typography
          variant="h3"
          marginTop={8}
          sx={{
            fontWeight: 'bold',
            color: '#2c3e50', // Dark gray-blue color
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          My Skills
        </Typography>
        <Divider sx={{ marginBottom: '20px', borderColor: '#3498db' }} /> {/* Blue divider */}
      </Grid>

      {/* Technical Skills Section */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#34495e', // Slightly lighter dark gray-blue
            marginBottom: '15px',
          }}
        >
          Technical Skills
        </Typography>
        <Box
          sx={{
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <Chip label="Semiconductor Fabrication" sx={{ backgroundColor: '#3498db', color: '#fff' }} />
          <Chip label="Semiconductor Process Technology" sx={{ backgroundColor: '#3498db', color: '#fff' }} />
          <Chip label="IC Design" sx={{ backgroundColor: '#3498db', color: '#fff' }} />
          <Chip label="Embedded Systems" sx={{ backgroundColor: '#3498db', color: '#fff' }} />
          <Chip label="MATLAB" sx={{ backgroundColor: '#3498db', color: '#fff' }} />
          <Chip label="Verilog" sx={{ backgroundColor: '#3498db', color: '#fff' }} />
          <Chip label="PCB Design (KiCad)" sx={{ backgroundColor: '#3498db', color: '#fff' }} />
          <Chip label="Arduino" sx={{ backgroundColor: '#3498db', color: '#fff' }} />
        </Box>
      </Grid>

      {/* Software Skills Section */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#34495e', // Slightly lighter dark gray-blue
            marginBottom: '15px',
          }}
        >
          Software Skills
        </Typography>
        <Box
          sx={{
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
          }}
              >
            <Chip label="Data Structures" sx={{ backgroundColor: '#2980b9', color: '#fff' }} />
            <Chip label="C++" sx={{ backgroundColor: '#2980b9', color: '#fff' }} />
          <Chip label="React" sx={{ backgroundColor: '#2980b9', color: '#fff' }} />
          <Chip label="Material-UI" sx={{ backgroundColor: '#2980b9', color: '#fff' }} />
          <Chip label="HTML/CSS" sx={{ backgroundColor: '#2980b9', color: '#fff' }} />
          <Chip label="JavaScript" sx={{ backgroundColor: '#2980b9', color: '#fff' }} />
          <Chip label="GitHub" sx={{ backgroundColor: '#2980b9', color: '#fff' }} />
          <Chip label="Node.js" sx={{ backgroundColor: '#2980b9', color: '#fff' }} />
          <Chip label="Express" sx={{ backgroundColor: '#2980b9', color: '#fff' }} />
          <Chip label="MongoDB" sx={{ backgroundColor: '#2980b9', color: '#fff' }} />
          <Chip label="MySQL" sx={{ backgroundColor: '#2980b9', color: '#fff' }} />
            <Chip label="MS Office" sx={{ backgroundColor: '#2980b9', color: '#fff' }} />
        </Box>
      </Grid>
      </Grid>
      </div>
  );
}

export default SkillsPage;
