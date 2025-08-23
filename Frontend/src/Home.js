//Home.js
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Container,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";

import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Typewriter } from "react-simple-typewriter";
import avatarImg from "./components/me.jpg";
import WidgetsIcon from "@mui/icons-material/Widgets";
import WidgetDrawer from "./Drawer.js";
import AvatarSky from "./components/sky.png";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
const resume ="https://drive.google.com/file/d/1K625qJSZEUNdWtULaelIIX0_Xt0nK_mo/view?usp=sharing"        
const sections = [
  "home",
  "about",
  "skills",
  "qualifications",
  "projects",
  "contact",
];

export default function Home({ mode, toggleTheme }) {
  const [activeSection, setActiveSection] = useState("home");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen((prev) => !prev);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* AppBar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: mode === "light" ? "#f5f5f5" : "#0f0e24",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 2, sm: 3 },
            height: "60px",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={AvatarSky}
              alt="Logo"
              sx={{ width: 62, height: 62,
                  border: "2px solid transparent",
                  transition: "0.3s",
                  "&:hover": {
                    borderColor: "primary.main",
                             },
                  }}
              onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
            />
          </Box>

          {/* Navigation */}
          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {sections.map((section) => (
                <Button
                  key={section}
                  href={`#${section}`}
                  sx={{
                    color:
                      activeSection === section
                        ? "primary.main"
                        : "text.primary",
                    borderBottom:
                      activeSection === section ? "2px solid" : "none",
                    fontWeight:
                      activeSection === section ? "bold" : "normal",
                    fontSize: "0.9rem",
                    textTransform: "none",
                    px: 1,
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              ))}
              <IconButton onClick={toggleTheme} sx={{ color: mode === "light" ? "#000000" : "#ffffff" }}>
                {mode === "light" ? <Brightness4 /> : <Brightness7 />}
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              {/* Mobile Menu and Theme Toggle */}
              <IconButton onClick={toggleTheme} sx={{ color: mode === "light" ? "#000000" : "#ffffff" }}>
                {mode === "light" ? <Brightness4 /> : <Brightness7 />}
              </IconButton>
              <IconButton onClick={handleDrawerToggle} sx={{ color: mode === "light" ? "#000000" : "#ffffff" }}>
                <WidgetsIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <WidgetDrawer
        open={drawerOpen}
        toggleDrawer={() => setDrawerOpen(false)}
      />

      {/* Main Content */}
      <Box
        id="home"
        sx={{
          pt: "60px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          overflow: "hidden", 
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: { xs: 2, sm: 3 },
            py: { xs: 4, sm: 8 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 4, md: 8 },
              width: "100%",
            }}
          >
            {/* Text Content */}
            <Box sx={{ flex: 1, minWidth: 0, textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.8rem" },
                  mb: 1,
                  wordBreak: 'break-word', 
                }}
              >
                Hi, I'm Saikumar Yadav
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                  flexWrap: "wrap",
                  minHeight: { xs: '3.5rem', sm: '1.8rem' }, 
                }}
              >
                <Typography
                  component="span"
                  variant="h6"
                  sx={{ mr: 1, fontSize: { xs: "1rem", sm: "1.2rem" } }}
                >
                  I am
                </Typography>
                <Typography
                  component="span"
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "primary.main",
                    fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.6rem" },
                  }}
                >
                  <Typewriter
                    words={["a Web Developer 💻", "a Data Analyst 📊"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={40}
                    delaySpeed={600}
                  />
                </Typography>
              </Box>
              <Typography
                sx={{
                  mt: 1.5,
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  wordBreak: 'break-word', 
                }}
              >
                A passionate technology enthusiast with a strong foundation in
                programming and innovation. Driven by a desire to learn and
                contribute, I seek opportunities where I can apply my technical
                skills and problem-solving abilities.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  px: { xs: 2.5, sm: 3.5 },
                  py: { xs: 0.7, sm: 1 },
                  fontSize: { xs: "0.8rem", sm: "0.95rem" },
                  borderRadius: "10px",
                }}
                href="#contact"
              >
                Contact Me
              </Button>
             <Button
                variant="contained"
                startIcon={<CloudDownloadIcon />}
                color="primary"
                sx={{
                  mt: 3,
                  ml: 2,
                  px: { xs: 2.5, sm: 3.5 },
                  py: { xs: 0.7, sm: 1 },
                  fontSize: { xs: "0.8rem", sm: "0.95rem" },
                  borderRadius: "10px",
                }}
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </Button>
            </Box>

            {/* Avatar */}
            <Box>
              <Avatar
                alt="Saikumar"
                src={avatarImg}
                sx={{
                  width: { xs: 160, sm: 200, md: 300 },
                  height: { xs: 160, sm: 200, md: 300 },
                  objectFit: "contain",
                  mx: "auto",
                  border: "4px solid transparent",
                  transition: "0.4s",
                  "&:hover": {
                  borderColor: "primary.main",
                             },
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}