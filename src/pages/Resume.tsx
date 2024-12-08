import React from 'react';
import { Box, Grid, Typography, Table, TableBody, Paper } from '@mui/material';
import { pageGeneralStyles } from '../styles/pages';
import { textDefaultStyles } from '../styles/texts';
import { ResumeTableRow } from '../components/ResumePage/ResumeTableRow';
import { Header } from '../components/Header';
import { useTranslation } from 'react-i18next';

const Resume: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={pageGeneralStyles}>
      <Header />
      <Grid item xs={12}>
        <Paper sx={{ padding: 2, boxShadow: 3 }}>
          <Table>
            <TableBody>
              <ResumeTableRow
                rowTitle={t('resume.fio')}
                rowValue={t('resume.fiov')}
              />
              <ResumeTableRow
                rowTitle={t('resume.date')}
                rowValue={t('resume.datev')}
              />
              <ResumeTableRow
                rowTitle={t('resume.birth')}
                rowValue={t('resume.birthv')}
              />
              <ResumeTableRow
                rowTitle={t('resume.school')}
                rowValue={t('resume.schoolv')}
              />
              <ResumeTableRow
                rowTitle={t('resume.vus')}
                rowValue={t('resume.vusv')}
              />
              <ResumeTableRow
                rowTitle={t('resume.len')}
                rowValue={t('resume.lenv')}
              />
              <ResumeTableRow
                rowTitle={t('resume.hob')}
                rowValue={t('resume.hobv')}
              />
              <ResumeTableRow
                rowTitle={t('resume.lich')}
                rowValue={t('resume.lichv')}
              />
              <ResumeTableRow
                rowTitle={t('resume.compSpec')}
                rowValue={
                  <Box>
                    <Box>
                      <Typography variant="h6" sx={textDefaultStyles}>
                        {t('resume.leng')}
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
                          {t('resume.paradig')}
                        </Typography>
                        <Box sx={{ marginLeft: '10px' }}>
                          <Typography variant="body1" sx={textDefaultStyles}>
                            {t('oop')}
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
                rowTitle={t('resume.workExp')}
                rowValue={
                  <Box>
                    <Typography variant="body1" sx={textDefaultStyles}>
                      {t('resume.workExpv1')}
                    </Typography>
                    <Typography variant="body1" sx={textDefaultStyles}>
                      {t('resume.workExpv2')}
                    </Typography>
                  </Box>
                }
              />
              <ResumeTableRow rowTitle={t('future')} rowValue={t('futurev')} />
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Resume;
