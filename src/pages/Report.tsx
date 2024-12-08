import { Box } from '@mui/material';
import React from 'react';
import { pageGeneralStyles } from '../styles/pages';
import { Header } from '../components/Header';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

const Report: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={pageGeneralStyles}>
      <Header />
      {parse(t('report'))}
    </Box>
  );
};

export default Report;
