import React from 'react';
import { Grid, Typography, Box, Divider, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ContactPage() {
  return (
    <div id="contact">
    <Grid
      container
      spacing={4}
      sx={{
        padding: { xs: '20px', md: '50px' },
        backgroundColor: '#e0f2f1',
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
            color: '#2c3e50',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Contact Me
        </Typography>
        <Divider sx={{ marginBottom: '20px', borderColor: '#3498db' }} />
      </Grid>

      {/* Contact Details */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: '#34495e',
            marginBottom: '15px',
          }}
        >
          Get in Touch
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#ffffff', // White background for the contact box
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IconButton color="primary" component={Link} href="mailto:vaibhavgupta6393@gmail.com">
              <EmailIcon />
            </IconButton>
            <Typography variant="body1" color="#2c3e50">
              vaibhavgupta6393@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IconButton color="primary" component={Link} href="tel:+919721201954">
              <PhoneIcon />
            </IconButton>
            <Typography variant="body1" color="#2c3e50">
              +91 97212 01954
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LocationOnIcon color="primary" />
            <Typography variant="body1" color="#2c3e50">
              Chheolaha, Fatehpur, Uttar Pradesh, India
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LocationOnIcon color="primary" />
            <Typography variant="body1" color="#2c3e50">
              Current: BH 4, Panjab University, Chandigarh, India
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Social Media Links */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: '#34495e',
            marginBottom: '15px',
          }}
        >
          Follow Me
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#ffffff', // White background for the social links box
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IconButton color="primary" component={Link} href="https://www.linkedin.com/in/vaibhavgupta03" target='_blank'>
              <LinkedInIcon />
            </IconButton>
            <Typography variant="body1" color="#2c3e50">
              LinkedIn
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IconButton color="primary" component={Link} href="https://github.com/vaibhavgupta03" target='_blank'>
              <GitHubIcon />
            </IconButton>
            <Typography variant="body1" color="#2c3e50">
              GitHub
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IconButton color="primary" component={Link} href="https://twitter.com/vaibhavgupta090" target='_blank'>
              <TwitterIcon />
            </IconButton>
            <Typography variant="body1" color="#2c3e50">
              Twitter
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IconButton color="primary" component={Link} href="https://www.facebook.com/vaibhavgupta090/" target='_blank'>
              <FacebookIcon />
            </IconButton>
            <Typography variant="body1" color="#2c3e50">
              Facebook
            </Typography>
          </Box>
        </Box>
      </Grid>
      </Grid>
      </div>
  );
}

export default ContactPage;
