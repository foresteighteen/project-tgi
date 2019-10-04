import React from 'react';
import Select, { components } from 'react-select';
import { Hero, H1, HeroText } from '../../../components';

import './HeroSection.sass';

const selectStyles = {
  control: (styles, { opti }) => ({
    ...styles,
    height: '65px',
    width: (() => {
      console.log(state);
      // return activeVacancy.length*2+'px';
    })(state),
    borderRadius: '5px',
    paddingLeft: '20px',
    borderBottomLeftRadius: state.selectProps.menuIsOpen ? '0' : '5px',
    borderBottomRightRadius: state.selectProps.menuIsOpen ? '0' : '5px',
    borderColor: '#E0E9F1',
    ':hover': {
      borderColor: '#E0E9F1',
    },
    ':focus': {
      borderColor: '#E0E9F1',
      boxShadow: 'none',
    },
    ':focus-within': {
      borderColor: '#E0E9F1',
      boxShadow: 'none',
    },
  }),
  dropdownIndicator: (styles, state) => ({
    ...styles,
    transform: state.selectProps.menuIsOpen ? 'scaleY(-1)' : null,
  }),
  menu: styles => ({
    ...styles,
    margin: '0',
    padding: '0',
    boxShadow: 'none',
    border: '1px solid #E0E9F1',
    borderTop: 'none',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menuList: styles => ({
    ...styles,
    margin: '0',
    padding: '0',
  }),
  placeholder: styles => ({
    ...styles,
    color: '#11263B',
  }),
  option: (provided, state) => ({
    ...provided,
    padding: '15px 20px',
    backgroundColor: state.isFocused && '#3CB04A',
    color: state.isFocused && '#fff',
    transition: '.25s',
  }),
};

const HeroSection = ({ activeVacancy, vacancies, changeActive }) => {
  // console.log(activeVacancy, vacancies, changeActive)
  return (
    <section id="vacancy-hero">

        <Hero classes="white hero__full hero-covered" bgImg="/src/assets/img/hero/herovac.png">
          <div className="vacancy-hero-title">
          <H1 text="Вакансии" />
          <Select
          // menuIsOpen={true}
              // styles={{
              //   control: () => ({
              //     width: `${40 * activeVacancy.length + 20}px`,
              //   }),
              // }}
              className="vacancy-select"
              classNamePrefix="vacancy-select"
              // components={{ DropdownIndicator }}
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
          <HeroText />       
        </Hero>
    </section>
  );
};

export default HeroSection;
