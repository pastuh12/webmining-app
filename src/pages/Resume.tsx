import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Avatar,
  SxProps,
} from '@mui/material';
import { Theme } from '@emotion/react';
import { pageGeneralStyles } from '../styles/pages';
import { textDefaultStyles } from '../styles/texts';
import { ResumeTableRow } from '../components/ResumePage/ResumeTableRow';
import { Header } from '../components/Header';

const Resume: React.FC = () => {
  return (
    <Box sx={pageGeneralStyles}>
      <Header />
      <Grid item xs={12}>
        <Paper sx={{ padding: 2, boxShadow: 3 }}>
          <Table>
            <TableBody>
              <ResumeTableRow
                rowTitle={'ФИО'}
                rowValue={'Тарасов Илья Андреевич'}
              />
              <ResumeTableRow
                rowTitle={'Дата рождения'}
                rowValue={'04.08.2001'}
              />
              <ResumeTableRow
                rowTitle={'Место рождения'}
                rowValue={'г. Краснодар, Российская Федерация'}
              />
              <ResumeTableRow
                rowTitle={'Школа'}
                rowValue={'2008-2019 гг.: МБОУ лицей №4, 1-11 класс'}
              />
              <ResumeTableRow
                rowTitle={'ВУЗ'}
                rowValue={'2019-2023 гг.: бакалавриат КубГУ'}
              />
              <ResumeTableRow
                rowTitle={'Владение языками'}
                rowValue={'Русский – родной, Английский – средний уровень'}
              />
              <ResumeTableRow
                rowTitle={'Увлечения'}
                rowValue={
                  'Книги (русская классика, научная фантастика, классическая литература), Музыка (рок, классика, романсы, электронная музыка), Кинематограф (Детектив)'
                }
              />
              <ResumeTableRow
                rowTitle={'Личные качества'}
                rowValue={
                  'делегирование задач, умение слушать собеседника, работа в команде, критичность, внимательность, пунктуальность'
                }
              />
              <ResumeTableRow
                rowTitle={
                  'Профессиональная специализация и владение компьютером'
                }
                rowValue={
                  <Box>
                    <Box>
                      <Typography variant="h6" sx={textDefaultStyles}>
                        Языки программирования
                      </Typography>
                      <Box sx={{ marginLeft: '10px' }}>
                        <Typography variant="body1" sx={textDefaultStyles}>
                          Javascript
                        </Typography>
                        <Typography variant="body1" sx={textDefaultStyles}>
                          Typescript
                        </Typography>
                        <Typography variant="body1" sx={textDefaultStyles}>
                          SQL
                        </Typography>
                        <Typography variant="body1" sx={textDefaultStyles}>
                          Golang
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={textDefaultStyles}>
                          Парадигмы программирования
                        </Typography>
                        <Box sx={{ marginLeft: '10px' }}>
                          <Typography variant="body1" sx={textDefaultStyles}>
                            ООП
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={textDefaultStyles}>
                          Платформы
                        </Typography>
                        <Box sx={{ marginLeft: '10px' }}>
                          <Typography variant="body1" sx={textDefaultStyles}>
                            NodeJS
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={textDefaultStyles}>
                          Фреймворки
                        </Typography>
                        <Box sx={{ marginLeft: '10px' }}>
                          <Typography variant="body1" sx={textDefaultStyles}>
                            NestJS
                          </Typography>
                          <Typography variant="body1" sx={textDefaultStyles}>
                            React
                          </Typography>
                          <Typography variant="body1" sx={textDefaultStyles}>
                            Express
                          </Typography>
                          <Typography variant="body1" sx={textDefaultStyles}>
                            Echo
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={textDefaultStyles}>
                          СУБД
                        </Typography>
                        <Box sx={{ marginLeft: '10px' }}>
                          <Typography variant="body1" sx={textDefaultStyles}>
                            PostgreSQL 14
                          </Typography>
                          <Typography variant="body1" sx={textDefaultStyles}>
                            MySQL
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={textDefaultStyles}>
                          Методики
                        </Typography>
                        <Box sx={{ marginLeft: '10px' }}>
                          <Typography variant="body1" sx={textDefaultStyles}>
                            SOLID
                          </Typography>
                          <Typography variant="body1" sx={textDefaultStyles}>
                            REST
                          </Typography>
                          <Typography variant="body1" sx={textDefaultStyles}>
                            Микросервисная архитектура
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={textDefaultStyles}>
                          Системы контроля версий
                        </Typography>
                        <Box sx={{ marginLeft: '10px' }}>
                          <Typography variant="body1" sx={textDefaultStyles}>
                            Git
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                }
              />
              <ResumeTableRow
                rowTitle={'Дополнительные курсы'}
                rowValue={'Курсы по NodeJS, Архитектуре и паттернам ООП'}
              />
              <ResumeTableRow
                rowTitle={'Опыт работы'}
                rowValue={
                  <Box>
                    <Typography variant="body1" sx={textDefaultStyles}>
                      Fojin, Nodejs разработчик, 0.5 года
                    </Typography>
                    <Typography variant="body1" sx={textDefaultStyles}>
                      Брусника, Fullstack разработчик, 1.5 года
                    </Typography>
                  </Box>
                }
              />
              <ResumeTableRow
                rowTitle={'Планы на будущее'}
                rowValue={
                  'Дальнейшее профессиональное и карьерное развитие в качестве разработчика ПО, в том числе изучение новых методик и паттернов программирования, фреймворков, технологий и языков программирования, исследовать настолько много мест в России, насколько это возможно	Дальнейшее профессиональное и карьерное развитие в качестве разработчика ПО, в том числе изучение новых методик и паттернов программирования, фреймворков, технологий и языков программирования, исследовать настолько много мест в России, насколько это возможно'
                }
              />
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Resume;
