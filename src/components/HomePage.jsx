import React from "react";
import { Grid, Typography, Button, Avatar, Box } from "@mui/material";
import { Link } from 'react-router-dom'; // Import Link
import profilePhoto from "../assets/profilePhoto.jpg";
import resume from '../assets/resume.pdf';

function HomePage() {
  return (
    <div id="home">
    <Grid
      container
      sx={{
        padding: { xs: "50px", md: "50px" },
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* Profile Photo */}
      <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center",
          marginBottom: { xs: "20px", md: "0" }, }}>
        <Avatar
          alt="Vaibhav Gupta"
          src={profilePhoto}
          sx={{ width: { xs: 300, md: 300 },
            height: { xs: 300, md: 300 }, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", objectFit: "cover", }}
        />
      </Grid>

      {/* Summary Section */}
      <Grid item xs={12} md={8}>
        <Box sx={{ textAlign: { xs: "center", md: "left",display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%", } }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold",marginLeft:'2.1vw', color: "#1a237e", marginBottom: "20px", fontSize: { xs: "2rem", md: "3rem" }}}
          >
            Vaibhav Gupta
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#555",
              marginBottom: "30px",
              lineHeight: "1.2",
              fontFamily: "Arial, sans-serif",
              marginLeft:'2.5vw',
              fontSize: { xs: "1.3rem", md: "1.7rem" },
            }}
          >
            Passionate Electronics and Communication Engineer with expertise in semiconductor fabrication, IC design, and embedded systems. I also have knowledge of data structures and web development and am looking forward to contributing and working in the field to gain more knowledge. Let's create something amazing together!
          </Typography>
          {/* Resume Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              flexDirection: { xs: "column", md: "row" },
              marginLeft:'2.5vw',
              gap: { xs: "10px", md: "20px" }, // Space between buttons
            }}
          >
          <Button
            variant="contained"
              color="primary"
              href={resume}
              target="_blank"
              sx={{
                padding: "10px 20px",
                fontSize: { xs: "1rem", sm: "1.2rem" }, // Responsive font size
                fontWeight: "bold",
                backgroundColor: "#1a237e",
                '&:hover': {
                  backgroundColor: "#3949ab",
                },
                width: { xs: "100%", md: "auto" }, // Ensure button width is consistent
              }}
          >
            Open Resume
          </Button>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  padding: "10px 20px",
                  fontSize: { xs: "1rem", sm: "1.2rem" }, // Responsive font size
                  fontWeight: "bold",
                  borderColor: "#1a237e",
                  color: "#1a237e",
                  '&:hover': {
                    borderColor: "#3949ab",
                    color: "#3949ab",
                  },
                  width: { xs: "100%", md: "auto" }, // Ensure button width is consistent
                }}
              >
                Contact Me
              </Button>
            </Link>
            </Box>
        </Box>
      </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
