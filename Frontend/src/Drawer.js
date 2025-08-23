// WidgetDrawer.js
import React from 'react';
import {
  Drawer,
  IconButton,
  Typography,
  useTheme,
  ButtonBase,
  Grid,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SendIcon from '@mui/icons-material/Send';

const navItems = [
  { id: 'home', label: 'Home', icon: <HomeIcon /> },
  { id: 'about', label: 'About', icon: <InfoOutlinedIcon /> },
  { id: 'skills', label: 'Skills', icon: <ArticleIcon /> },
  { id: 'qualifications', label: 'Qualifications', icon: <WorkspacePremiumIcon /> },
  { id: 'projects', label: 'Projects', icon: <PhotoLibraryIcon /> },
  { id: 'contact', label: 'Contact', icon: <SendIcon /> },
];

export default function WidgetDrawer({ open, toggleDrawer }) {
  const theme = useTheme();

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={toggleDrawer}
      PaperProps={{
        sx: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: theme.palette.background.default,
          padding: 4,
        },
      }}
    >
      <Grid container spacing={3}>
        {navItems.map((item, index) => (
          <Grid item size={4} key={item.id}>
            <ButtonBase
              href={`#${item.id}`}
              onClick={toggleDrawer}
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: theme.palette.text.primary,
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <IconButton
                sx={{
                  color: theme.palette.primary.main,
                }}
              >
                {item.icon}
              </IconButton>
              <Typography variant="body2">{item.label}</Typography>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </Drawer>
  );
}
