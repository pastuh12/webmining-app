import { Grid, Avatar, Typography } from '@mui/material';
import { textDefaultStyles } from '../styles/texts';

export const Header = () => {
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
          Тарасов Илья
        </Typography>
        <Typography variant="body1" sx={textDefaultStyles}>
          Факультет компьютерных технологий и прикладной математики
        </Typography>
        <Typography variant="body1" sx={textDefaultStyles}>
          Кафедра информационных технологий
        </Typography>
        <Typography variant="body1" sx={textDefaultStyles}>
          Специальность: «Технологии программирования и разработки
          информационно-коммуникационных систем»
        </Typography>
        <Typography variant="body1" sx={textDefaultStyles}>
          Диссертация: Исследование надежностных характеристик цифровой
          образовательной среды с микросервисной архитектурой
        </Typography>
        <Typography variant="body1" sx={textDefaultStyles}>
          Преподаватель: доц. кафедры Полетайкин Алексей Николаевич
        </Typography>

        <Typography variant="body1" sx={textDefaultStyles}></Typography>
      </Grid>

      {/* Таблица */}
    </Grid>
  );
};
