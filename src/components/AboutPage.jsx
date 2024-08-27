
import { Grid, Typography, Avatar, Box, Divider } from "@mui/material";
import React from "react";
import aboutPhoto from "../assets/aboutPhoto.png";

function AboutPage() {
  return (
    <div id="about">
    <Grid
      container
      sx={{
        padding: { xs: "20px", md: "50px" },
        backgroundColor: "#e0f7fa",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* Photo and Introduction Section */}
      <Grid
        item
        xs={12}
        md={4}
        marginTop={8}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: "20px", md: "0" },
        }}
      >
        <Avatar
          alt="Vaibhav Gupta"
          src={aboutPhoto}
          sx={{
            width: { xs: 200, md: 280 }, // Responsive width
            height: { xs: 200, md: 280 }, // Responsive height
            borderRadius: "15%", // Slightly rounded corners
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
            objectFit: "cover",
            border: "5px solid #004d40", // Add a border for a stylish effect
          }}
        />
      </Grid>

      {/* Introduction Text Section */}
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          padding: { xs: "10 10px", md: "0 20px" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#004d40",
            marginBottom: "20px",
            marginTop:{xs:"0px", md:"25px"},
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "2rem", md: "3rem" }, // Responsive font size
          }}
        >
          About Me
        </Typography>
        <Divider sx={{ marginY: "20px", width: { xs: "80%", md: "50%" }, backgroundColor: "#004d40" }} />
        <Typography
          variant="body1"
          sx={{
            color: "#004d40",
            lineHeight: "1.6",
            fontFamily: "Arial, sans-serif",
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "1.1rem", md: "1.2rem" }, // Responsive font size
            marginBottom: "20px",
          }}
        >
          Hello! I'm Vaibhav Gupta, a final-year Electronics and Communication Engineering student at Panjab University with a solid background in semiconductor fabrication and research. I've gained hands-on experience through specialized training at National Tsing Hua University and IIT Hyderabad, where I delved into advanced semiconductor manufacturing processes and technologies.
          <br /><br />
          My academic journey includes a Bachelor's degree in Electronics & Communication Engineering with a CGPA of 8.67, and I have achieved a commendable GATE score of 490 with an All India Rank of 2344. I have developed a digital calculator app using MATLAB and designed an automatic vending machine in Verilog, showcasing my skills in both software and hardware domains.
          <br /><br />
          I'm passionate about contributing to technological advancements in the semiconductor industry and am keen to bring innovative solutions to the table. My research work on High Dielectric Metal Gate Semiconductor Fabrication Technology and my role as a student editor for Panjab University's Campus Reporter Magazine have further honed my research and technical writer skills and deepened my knowledge in the field.
          <br /><br />
          Let's connect and explore opportunities to create something impactful together!
        </Typography>
      </Grid>
      </Grid>
      </div>
  );
}

export default AboutPage;
