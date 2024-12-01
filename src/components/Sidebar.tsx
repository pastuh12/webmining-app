import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemButton,
  SxProps,
} from '@mui/material';
import { Theme } from '@emotion/react';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();

  const navButtonStyles: SxProps<Theme> = {
    '&:hover': { backgroundColor: '#1565c0' },
  };

  return (
    <Box
      sx={{
        width: '200px',
        backgroundColor: '#f5f5f5',
        height: '100%',
        minHeight: '100vh',
      }}
    >
      <List>
        <ListItemButton component={Link} to="/resume" sx={navButtonStyles}>
          <ListItemText primary={t('resume')} />
        </ListItemButton>
        <ListItemButton component={Link} to="/biography" sx={navButtonStyles}>
          <ListItemText primary={t('biography')} />
        </ListItemButton>
        <ListItemButton component={Link} to="/abstract" sx={navButtonStyles}>
          <ListItemText primary={t('abstract')} />
        </ListItemButton>
        <ListItemButton component={Link} to="/library" sx={navButtonStyles}>
          <ListItemText primary={t('library')} />
        </ListItemButton>
        <ListItemButton component={Link} to="/links" sx={navButtonStyles}>
          <ListItemText primary={t('links')} />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/search-report"
          sx={navButtonStyles}
        >
          <ListItemText primary={t('searchReport')} />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/custom-section"
          sx={navButtonStyles}
        >
          <ListItemText primary={t('customSection')} />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
