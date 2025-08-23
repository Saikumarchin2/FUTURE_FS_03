//Contact.js
import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  TextField,
  Grid,
  Button,
  Container, 
  Stack, 
} from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
export default function Contact() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [snackbar, setSnackbar] = useState({
  open: false,
  message: "",
  severity: "success",
});

const handleCloseSnackbar = () => {
  setSnackbar({ ...snackbar, open: false });
};
  const handleSubmit = async (e) => {
  e.preventDefault();
 if (!name || !mail || !subject || !message) {
  setSnackbar({ open: true, message: "Please fill all fields", severity: "warning" });
  return;
}
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, mail, subject, message }),
    });
console.log('API URL:', API_URL);

    if (res.ok) {
  setSnackbar({ open: true, message: "Details saved successfully!", severity: "success" });
  setName("");
  setMail("");
  setSubject("");
  setMessage("");
} else {
  const data = await res.json();
  setSnackbar({ open: true, message: data.message || "Failed to save data", severity: "error" });
}
  } catch (err) {
    console.error('Error submitting form:', err);
  }
};
  return (
    <Container
      id="contact"
      maxWidth="lg"
      sx={{
        minHeight: '100vh',
        py: 8,
        px: { xs: 2, sm: 3 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 6, md: 4 }} 
        justifyContent="center"
        alignItems="center"
        sx={{ width: '100%' }}
      >

        <Box sx={{ width: '100%', maxWidth: { xs: '100%', md: 400 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <FormatListBulletedIcon sx={{ mr: 1.5 }} />
            <Typography variant="h6" fontWeight="bold">Contact Info</Typography>
          </Box>
          <Divider />

          <List>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="mailto:mukkamulasaikumar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton color="primary">
                  <EmailIcon />
                </IconButton>
                <ListItemText
                  primary="mukkamulasaikumar@gmail.com"
                  primaryTypographyProps={{ sx: { wordBreak: 'break-all' } }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <IconButton color="primary" >
                  <CalendarMonthIcon />
                </IconButton>
                <ListItemText primary="Schedule Online Meet" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="https://maps.google.com/?q=Warangal, Telangana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton color="primary">
                  <LocationOnIcon />
                </IconButton>
                <ListItemText primary="Warangal, Telangana" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        <Box sx={{ width: '100%', maxWidth: { xs: '100%', md: 600 } }}>
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Want to connect? My inbox is always open!
            </Typography>
          </Box>

          <form 
          onSubmit={handleSubmit} 
        >

 <Grid container spacing={2} direction={'column'} justifyContent="center">
            <Grid item xs={12}>
                        <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
            </Grid>
            <Grid item xs={12}>
              <TextField
              label="Your Email"
              name="mail"
              fullWidth
              required
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Subject"
                name="subject"
                fullWidth
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                fullWidth
                required
                multiline
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ px: 4, py: 1.5 }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
          </form>
        </Box>
      </Stack>
      <Snackbar
  open={snackbar.open}
  autoHideDuration={4000}
  onClose={handleCloseSnackbar}
  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
>
  <MuiAlert
    elevation={6}
    variant="filled"
    onClose={handleCloseSnackbar}
    severity={snackbar.severity}
    sx={{ width: "100%" }}
  >
    {snackbar.message}
  </MuiAlert>
</Snackbar>
    </Container>
  );
}