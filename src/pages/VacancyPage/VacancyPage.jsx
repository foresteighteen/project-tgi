import React, { useState } from 'react';
import { indexBy, prop, pluck, map, assoc } from 'ramda';
import uniqid from 'uniqid';
import withPageData from '../../containers/withPageData';
import { HeaderContext } from '../../containers/HeaderProvider';
import { QuestionForm, ErrorBoundary } from '../../components';
import HeroSection from './HeroSection';
import VacancySection from './VacancySection';

import './VacancyPage.sass';

const myVac = {
  Moskov: [
    {
      position: 'Gruzchik',
      salary: 25000,
      info: [
        {
          title: 'Сфера деятельности',
          desc: 'сменный график',
        },
        {
          title: 'Сфера деятельности',
          desc: 'сменный график',
        },
        {
          title: 'Сфера деятельности',
          desc: 'сменный график',
        },
      ],
      duties: [
        {
          title: 'Objazanosti',
          items: [
            'Выполнение погрузочных и разгрузочных работ.',
            'Выполнение погрузочных и разгрузочных работ.',
          ],
        },
        {
          title: 'Objazanosti',
          items: [
            'Выполнение погрузочных и разгрузочных работ.',
            'Выполнение погрузочных и разгрузочных работ.',
          ],
        },
        {
          title: 'Plushki',
          items: ['Soc strah', 'Soc strah'],
        },
      ],
    },
    {
      position: 'Gruzchik',
      salary: 25000,
      info: [
        {
          title: 'Сфера деятельности',
          desc: 'сменный график',
        },
        {
          title: 'Сфера деятельности',
          desc: 'сменный график',
        },
        {
          title: 'Сфера деятельности',
          desc: 'сменный график',
        },
      ],
      duties: [
        {
          title: 'Objazanosti',
          items: [
            'Выполнение погрузочных и разгрузочных работ.',
            'Выполнение погрузочных и разгрузочных работ.',
          ],
        },
        {
          title: 'Objazanosti',
          items: [
            'Выполнение погрузочных и разгрузочных работ.',
            'Выполнение погрузочных и разгрузочных работ.',
          ],
        },
        {
          title: 'Plushki',
          items: ['Soc strah', 'Soc strah'],
        },
      ],
    },
  ],
  'Peter-burg': [
    {
      position: 'Gruzchik2',
      salary: 25000,
      info: [
        {
          title: 'Сфера деятельности',
          desc: 'сменный график',
        },
        {
          title: 'Сфера деятельности',
          desc: 'сменный график',
        },
        {
          title: 'Сфера деятельности',
          desc: 'сменный график',
        },
      ],
      duties: [
        {
          title: 'Objazanosti',
          items: [
            'Выполнение погрузочных и разгрузочных работ.',
            'Выполнение погрузочных и разгрузочных работ.',
          ],
        },
        {
          title: 'Objazanosti',
          items: [
            'Выполнение погрузочных и разгрузочных работ.',
            'Выполнение погрузочных и разгрузочных работ.',
          ],
        },
        {
          title: 'Plushki',
          items: ['Soc strah', 'Soc strah'],
        },
      ],
    },
    {
      position: 'Gruzchik',
      salary: 25000,
      info: [
        {
          title: 'Сфера деятельности',
          desc: 'сменный график',
        },
        {
          title: 'Сфера деятельности',
          desc: 'сменный график',
        },
        {
          title: 'Сфера деятельности',
          desc: 'сменный график',
        },
      ],
      duties: [
        {
          title: 'Objazanosti',
          items: [
            'Выполнение погрузочных и разгрузочных работ.',
            'Выполнение погрузочных и разгрузочных работ.',
          ],
        },
        {
          title: 'Objazanosti',
          items: [
            'Выполнение погрузочных и разгрузочных работ.',
            'Выполнение погрузочных и разгрузочных работ.',
          ],
        },
        {
          title: 'Plushki',
          items: ['Soc strah', 'Soc strah'],
        },
      ],
    },
  ],
};

const WP_PAGE_ID = 38;

const VacancyPage = ({ pageData, pageLoaded }) => {
  if (!pageLoaded) return <main className="main vacancy-page"></main>;

  const { setHeaderTheme } = React.useContext(HeaderContext);

  React.useEffect(() => {
    setHeaderTheme('light');
  }, []);

  const [activeVacancy, changeActive] = useState(
    pageData.acf.vacancies.city[0].city,
  );
  const [currencySymbol, {}] = useState(pageData.acf.vacancies.currency);
  const [buttonText, {}] = useState(pageData.acf.vacancies.btn_text);
  const [vacancies, {}] = useState(
    map(
      item => map(item => assoc('id', uniqid(), item), item),
      pluck('vacancy', indexBy(prop('city'), pageData.acf.vacancies.city)),
    ),
  );

  return (
    <ErrorBoundary>
      <main className="main vacancy-page">
        <ErrorBoundary>
          <HeroSection
            title={pageData.acf.hero.title}
            bgImg={pageData.acf.hero.bgImg}
            desc={pageData.acf.hero.description}
            {...{ activeVacancy, vacancies, changeActive }}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <VacancySection
            buttonText={buttonText}
            currencySymbol={currencySymbol}
            vacancies={vacancies[activeVacancy]}
            activeVacancy={activeVacancy}
          />
        </ErrorBoundary>
        <QuestionForm />
      </main>
    </ErrorBoundary>
  );
};

export default withPageData(WP_PAGE_ID)(VacancyPage);
