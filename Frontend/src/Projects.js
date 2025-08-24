//Projects.js
import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  CardMedia,
  CircularProgress
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProjectDialog from "./ProjectsOverview.js"; // popup dialog
const API_URL = process.env.REACT_APP_API_URL || "https://future-fs-03-wtwi.onrender.com";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_URL}/api/projects`);
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", py: 5 }}>
        <CircularProgress />
        <Typography variant="subtitle1" mt={2}>
          Loading projects...
        </Typography>
      </Box>
    );
  }

  return (
    <Box id="projects" margin={{ xs: 2, md: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
          My Projects
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mb={4}>
          My Recent Works
        </Typography>
      </Box>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Box
              onClick={() => handleOpen(project)}
              sx={{
                cursor: "pointer",
                textAlign: "center",
                p: 2,
                borderRadius: 2,
                border: "2px solid transparent",
                transition: "0.3s",
                "&:hover": {
                  borderColor: "primary.main",
                },
              }}
            >
              <CardMedia
                component="img"
                image={project.image} // backend sends image path or URL
                alt={project.title}
                sx={{
                  objectFit: "contain",
                  borderRadius: 2,
                  height: { xs: 200, sm: 300 },
                  width: "100%",
                  mb: 4,
                }}
              />
              <Typography variant="h6" component="h4" fontWeight="bold" mb={2}>
                {project.title}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Popup Dialog */}
      <ProjectDialog open={open} onClose={handleClose} project={selectedProject} />
    </Box>
  );
};

export default Projects;
