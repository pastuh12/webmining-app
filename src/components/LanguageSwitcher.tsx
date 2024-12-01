import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button } from '@mui/material';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: 2,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => changeLanguage('en')}
        sx={{ marginRight: 1 }}
      >
        English
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => changeLanguage('ru')}
      >
        Русский
      </Button>
    </Box>
  );
};

export default LanguageSwitcher;
