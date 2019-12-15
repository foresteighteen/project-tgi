import React from 'react';
import Select from 'react-select';
import { Hero, H1, HeroText } from '../../../components';

import './HeroSection.sass';

const HeroSection = ({
  activeVacancy,
  vacancies,
  changeActive,
  desc,
  title,
  bgImg,
}) => {
  // console.log(activeVacancy, vacancies, changeActive)
  return (
    <section id="vacancy-hero">
      <Hero classes="white hero__full hero-covered" bgImg={bgImg}>
        <div className="vacancy-hero-title">
          <H1 text={title} />
          <Select
            styles={{
              container: (provided, state) => ({
                ...provided,
                input: {
                  textIndent: '-999999999px',
                },
              }),
            }}
            className="vacancy-select"
            classNamePrefix="vacancy-select"
            // menuIsOpen={true}
            isSearchable={false}
            placeholder={activeVacancy}
            value={activeVacancy}
            options={Object.keys(vacancies).map((e, i) => ({
              value: i,
              label: e,
            }))}
            onChange={e => changeActive(e.label)}
          />
        </div>
        <HeroText desc={desc} />
      </Hero>
    </section>
  );
};

export default HeroSection;
