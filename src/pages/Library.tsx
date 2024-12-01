import React from 'react';
import { pageGeneralStyles } from '../styles/pages';
import { Box } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { textDefaultStyles } from '../styles/texts';

const Library: React.FC = () => {
  return (
    <Box sx={pageGeneralStyles}>
      <Header />
      <h1>Собственные публикации и доклады</h1>
      <Box sx={textDefaultStyles}>
        <ol>
          <li>
            <div>
              <h4>
                <Link to="1">
                  Исследование возможности разбиения системы управления учебным
                  процессом на микросервисы
                </Link>
              </h4>
              <div style={{ fontWeight: 400 }}>
                <b>Авторы:</b> Тарасов И.А., Полетайкин А.Н.
              </div>
              <div style={{ fontWeight: 400 }}>
                <b>Описание:</b> В рамках данной работы рассматриваются вопросы
                разработки настольного приложения на языке программирования C#,
                реализующего инструментарий выполнения бизнес-процессов приемной
                комиссии
              </div>
              <div>
                <b>Источник:</b> Прикладная математика: современные проблемы
                математики, информатики и моделирования: Мат. VI Всеросс.
                науч.-практ. конф. Краснодар, 2024 Изд-во: Краснодарский ЦНТИ -
                филиал ФГБУ "РЭА" Минэнерго России. Краснодар, 2024. С. 125-129.
              </div>
            </div>
          </li>
        </ol>
      </Box>
      <div>
        <Outlet />
      </div>
    </Box>
  );
};

export default Library;
