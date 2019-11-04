import React from 'react';
import Select, { components } from 'react-select';
import CloseModalBtn from '../ContactsModal/CloseModalBtn';

import withPageData from '../../containers/withPageData';

import './ContactsForm.sass';

// const selectOptions = [
//   { value: 1, label: 'Отдел продаж #1' },
//   { value: 2, label: 'Отдел продаж #2' },
// ];

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <div className="select-arrow" />
  </components.DropdownIndicator>
);

const selectStyles = {
  control: (styles, state) => ({
    ...styles,
    minHeight: 'inherit',
    height: '100%',
    border: 'none',
    cursor: 'pointer',
    paddingLeft: '10px',
    paddingRight: '10px',
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
    color: 'rgba(17, 17, 17, 0.7)',
  }),
  option: (provided, state) => ({
    ...provided,
    padding: '25px 20px',
    backgroundColor: state.isFocused && '#EE9D35',
    color: state.isFocused && '#fff',
    transition: '.25s',
  }),
};

const WP_PAGE_ID = 772;

const ContactsForm = ({
  modal,
  onCloseModal,
  className,
  pageData,
  pageLoaded,
}) => {
  if (!pageLoaded) return null;
  const { acf: formData } = pageData;
  const selectOptions = formData.salesDepartment.items.map((item, i) => ({
    value: i,
    label: item.title,
  }));
  return (
    <form className={`form ${className}`}>
      <h2 className="form__title">{formData.title}</h2>
      {modal ? <CloseModalBtn onClick={onCloseModal} /> : null}
      <div className="form__row">
        <label htmlFor="department" className="form__label">
          {formData.salesDepartment.title}
        </label>
        {/* <select name="department" id="department" className="form__input">
        <option value="Отдел продаж" className="form__option">
          Отдел продаж
        </option>
      </select> */}
        <Select
          components={{ DropdownIndicator }}
          isSearchable={false}
          className="form__input form__input--select"
          styles={selectStyles}
          // value={controls.payment}
          // onChange={e => onChange.setPayment(e)}
          options={selectOptions}
          placeholder={formData.salesDepartment.placeholder}
        />
        <input
          tabIndex={-1}
          autoComplete="off"
          style={{ opacity: 0, height: 0, position: 'absolute' }}
          // value={controls.payment}
          required
        />
      </div>
      <div className="form__row">
        <label htmlFor="name" className="form__label">
          {formData.fio.title}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form__input"
          placeholder={formData.fio.placeholder}
        />
      </div>
      <div className="form__row">
        <label htmlFor="tel" className="form__label">
          {formData.tel.title}
        </label>
        <input
          type="text"
          name="tel"
          id="tel"
          className="form__input"
          placeholder={formData.tel.placeholder}
        />
      </div>
      <div className="form__row">
        <label htmlFor="email" className="form__label">
          {formData.email.title}
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="form__input"
          placeholder={formData.email.placeholder}
        />
      </div>
      <div className="form__row">
        <label htmlFor="comment" className="form__label">
          {formData.comment.title}
        </label>
        <textarea
          rows="6"
          type="text"
          name="comment"
          id="comment"
          className="form__input"
          placeholder={formData.comment.placeholder}
        />
      </div>
      <div className="form__row">
        {/* <div className="form__controls"> */}
        <button
          type="submit"
          className="form__btn mx-auto"
          onClick={onCloseModal}
        >
          отправить
        </button>
        {/* {modal && (
          <button
            type="button"
            className="form__btn form__btn--gray"
            onClick={onCloseModal}
          >
            Закрыть
          </button>
        )} */}
        {/* </div> */}
      </div>
      <div className="form__row">
        <p className="form__btn-sub col-md-8">{formData.policy}</p>
      </div>
    </form>
  );
};

export default withPageData(WP_PAGE_ID)(ContactsForm);
