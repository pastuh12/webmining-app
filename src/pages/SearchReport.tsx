import { Box } from '@mui/material';
import React from 'react';
import { pageGeneralStyles } from '../styles/pages';

const SearchReport: React.FC = () => {
  return (
    <Box sx={pageGeneralStyles}>
      <h1>Отчет о поиске</h1>

      <Box>
        <p>
          Перед началом поиска информации по теме выпускной работы необходимо
          составить перечень из 5 поисковых фраз на русском и английском языках:
        </p>
        <ol>
          <li>
            разработка программного обеспечения для автоматизации
            бизнес-процессов в сфере исполнения заказов / Development of
            software for automation of business processes in the field of order
            fulfillment;
          </li>
          <li>Лукащик Елена Павловна / Lukashchik Elena Pavlovna;</li>
          <li>
            бизнес процессы в сфере исполнения заказов / business processes in
            the field of order fulfillment;
          </li>
          <li>
            сравнение blazor webassembly и blazor server / comparison of blazor
            webassembly and blazor server;
          </li>
          <li>
            расчет дохода курьера за заказ / calculation of courier revenue per
            order.
          </li>
        </ol>
        <p>
          Затем выполняем запросы в 3 поисковых системах:{' '}
          <ul>
            <li>Google;</li>
            <li>Yandex;</li>
            <li>Bing.</li>
          </ul>
        </p>
        <p>
          Перед выполнением запросов на английском языке в поисковых необходимо
          настроить язык, на котором будет выполняться поиск (рис. 1-3).
        </p>
        <figure
          //@ts-ignore
          align="center"
        >
          <img
            src="https://storage.yandexcloud.net/my-notes/pic4.png"
            alt="Описание изображения"
            width="700"
          />
          <figcaption>
            Рисунок 1 – Схема МСА для схема информационной системы управления
            образовательным процессом
          </figcaption>
        </figure>
        <figure
          //@ts-ignore
          align="center"
        >
          <img
            src="https://storage.yandexcloud.net/my-notes/pic5.png"
            alt="Описание изображения"
            width="700"
          />
          <figcaption>Рисунок 2 – Настройка языка поиска в Google</figcaption>
        </figure>
        <figure
          //@ts-ignore
          align="center"
        >
          <img
            src="https://storage.yandexcloud.net/my-notes/pic6.png"
            alt="Описание изображения"
            width="700"
          />
          <figcaption>Рисунок 3 – Настройка языка поиска в Bing</figcaption>
        </figure>
        <p>
          Собрав информацию о количестве найденных документов и ссылки на
          документы, составим таблицу, изображенную на рисунке 4.
        </p>
        <figure
          //@ts-ignore
          align="center"
        >
          <img
            src="https://storage.yandexcloud.net/my-notes/pic7.png"
            alt="Описание изображения"
            width="700"
          />
          <figcaption>
            Рисунок 4 – Таблица результатов мультиязычного информационного
            поиска
          </figcaption>
        </figure>
        <p>
          Заметим, что в столбце Документы зеленым помечены те запросы, которые
          дали значительно больший результат относительно большинства запросов в
          своей языковой группе.
        </p>
        <p>
          Итог: из данных, представленных на рисунке 4, видно, что максимальное
          количество документов достигается в Google, однако в некоторых случаях
          данная поисковая система уступает остальным системам.
        </p>
      </Box>
    </Box>
  );
};

export default SearchReport;
