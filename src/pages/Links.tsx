import { Box } from '@mui/material';
import React from 'react';
import { pageGeneralStyles } from '../styles/pages';

const Links: React.FC = () => {
  return (
    <Box sx={pageGeneralStyles}>
      <h1>Ссылки</h1>

      <Box>
        <Box>
          <h3>Ресурсы из Wikipedia</h3>
          <ul>
            <li>
              <a href="https://ru.wikipedia.org/wiki/WebAssembly">
                WebAssembly
              </a>
            </li>
            <li>
              <a href="https://ru.wikipedia.org/wiki/OAuth">OAuth</a>
            </li>
            <li>
              <a href="https://ru.wikipedia.org/wiki/OpenID">OpenID</a>
            </li>
            <li>
              <a href="https://ru.wikipedia.org/wiki/Node.js">Nodejs</a>
            </li>
          </ul>
        </Box>
        <Box>
          <h3>NodeJS</h3>
          <ul>
            <li>
              <a href="https://nodejs.org/en">официальный сайт NodeJS</a>
            </li>
            <li>
              <a href="https://docs.nestjs.com/">
                официальный сайт фреймворка NestJS
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/">официальный сайт NPM</a>
            </li>
          </ul>
        </Box>
        <Box>
          <h3>Реляционные базы данных</h3>
          <ul>
            <li>
              <a href="https://www.postgresql.org/">
                официальный сайт PostgreSQL
              </a>
            </li>
            <li>
              <a href="https://typeorm.io/">официальный сайт TypeORM</a>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Links;
