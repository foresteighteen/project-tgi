import React, { useState } from 'react';
import { QuestionForm } from '../../components';

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

const VacancyPage = () => {
  const [activeVacancy, changeActive] = useState('Moskov');
  const [currencySymbol, {}] = useState('₽');
  const [buttonText, {}] = useState('Откликнуться на вакансию');
  const [vacancies, {}] = useState(myVac);

  return (
    <main className="main vacancy-page">
      <HeroSection {...{ activeVacancy, vacancies, changeActive }} />
      <VacancySection
        buttonText={buttonText}
        currencySymbol={currencySymbol}
        vacancies={vacancies[activeVacancy]}
      />
      <QuestionForm />
    </main>
  );
};

export default VacancyPage;

