import { Grid, Avatar, Typography } from '@mui/material';
import { textDefaultStyles } from '../styles/texts';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation();
  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      sx={{ marginBottom: '30px' }}
    >
      {/* Фото и текст */}
      <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
        <Avatar
          src="https://storage.yandexcloud.net/my-notes/photo_2024-11-30_21-45-19.jpg"
          alt="Profile"
          sx={{ width: 150, height: 150, margin: '0 auto', boxShadow: 3 }}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h4" gutterBottom sx={textDefaultStyles}>
          {t('name')}
        </Typography>
        <Typography variant="body1" sx={textDefaultStyles}>
          {t('fuc')}
        </Typography>
        <Typography variant="body1" sx={textDefaultStyles}>
          {t('kaf')}
        </Typography>
        <Typography variant="body1" sx={textDefaultStyles}>
          {t('spec')}
        </Typography>
        <Typography variant="body1" sx={textDefaultStyles}>
          {t('dis')}
        </Typography>
        <Typography variant="body1" sx={textDefaultStyles}>
          {t('prep')}
        </Typography>

        <Typography variant="body1" sx={textDefaultStyles}></Typography>
      </Grid>

      {/* Таблица */}
    </Grid>
  );
};
