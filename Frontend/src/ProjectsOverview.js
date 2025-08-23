// ProjectsOverview.js
import React from "react";
import {
  Typography,
  Box,
  Chip,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew"; 
 
const ProjectsOverview = ({ open, onClose, project }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth
      sx={{
    "& .MuiDialog-paper": {
      backgroundColor: (theme) =>
        theme.palette.mode === "dark" ? theme.palette.background.default : "#fff",
    },
    "& .MuiBackdrop-root": {
      backgroundColor: (theme) =>
        theme.palette.mode === "dark" ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.5)",
    },
  }}
>
      <DialogTitle>
        {project.title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Key Skills:
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {project.skills.map((skill, i) => (
              <Chip key={i} label={skill} variant="outlined" />
            ))}
          </Stack>
        </Box>
        <Typography
          variant="body1"
          sx={{ whiteSpace: "pre-line" }}
          color="text.secondary"
        >
          {project.description}
        </Typography>
        {project.link && project.link !== "#" && (
          <Box mt={4} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              endIcon={<OpenInNewIcon />}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectsOverview;
