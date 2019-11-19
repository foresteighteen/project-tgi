import React, { useState, useContext } from 'react';
import Select, { components } from 'react-select';
import Recaptcha from 'react-recaptcha';
import classNames from 'classnames';
import CloseModalBtn from '../ContactsModal/CloseModalBtn';
import { sendForm } from '../../api';
import { Spinner, SuccessCheck } from '../../components';
import useSignUpForm from '../../utils/useSignUpForm';
import { GlobalOptsContext } from '../../containers/GlobalOptsProvider';
import { LangContext } from '../../containers/LangProvider';
import './ContactsForm.sass';

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
  singleValue: (provided, state) => ({
    ...provided,
    overflow: 'visible',
  }),
};

const ContactsForm = ({
  modal,
  onCloseModal,
  className,
}) => {
  const { contact_form } = useContext(GlobalOptsContext);
  const { state: { lang } } = useContext(LangContext);
  const [requestProgress, setRequestProgress] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [showDanger, setShowDanger] = useState(false);
  const [successIndicator, setSuccessIndicator] = useState(false);
  const selectOptions = contact_form.salesDepartment.items.map((item, i) => ({
    value: item.email,
    label: item.title,
  }));
  const [selectedOption, setOption] = useState(selectOptions[0]);
  
  const verifyCallback = (response) => {
    if (response) setCaptchaVerified(true);
  };

  const handleSelectChange = option => setOption(option);
  const signup = async () => {
    if(!captchaVerified) {
      setShowDanger(true);
      setTimeout(()=>{
        setShowDanger(false);
      }, 1200);
      return;
    };
    setCaptchaVerified(false);
    setRequestProgress(true);
    const res = await sendForm(Object.assign({}, selectedOption, inputs));
    setRequestProgress(false);
    console.log(res.success);
    if (res.success) {
      setSuccessIndicator(true);
      setTimeout(()=>{
        onCloseModal();
      }, 2000);
    }
  };
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);
  const captchaRowClass = classNames({
    'form__row': true,
    'show__danger': showDanger
  });
  const recaptchaLoaded = () => {
    console.log('captcha loaded')
  };
  return (
    <form className={`form ${className}`} onSubmit={handleSubmit}>
      {requestProgress && (
        <div className="form__overlay">
          <div className="form__overlay__inner">
            <Spinner />
          </div>
        </div>
      )}
      {successIndicator && (
        <div className="form__overlay">
          <div className="form__overlay__inner">
            <SuccessCheck />
          </div>
        </div>
      )}
      <h2 className="form__title">{contact_form.title}</h2>
      {modal ? <CloseModalBtn onClick={onCloseModal} /> : null}
      <div className="form__row">
        <label htmlFor="department" className="form__label">
          {contact_form.salesDepartment.title}
        </label>
        <Select
          components={{ DropdownIndicator }}
          isSearchable={false}
          className="form__input form__input--select"
          styles={selectStyles}
          options={selectOptions}
          placeholder={contact_form.salesDepartment.placeholder}
          name="admin_email"
          onChange={handleSelectChange}
          defaultValue={selectedOption.email || null}
        />
      </div>
      <div className="form__row">
        <label htmlFor="name" className="form__label">
          {contact_form.fio.title}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form__input"
          placeholder={contact_form.fio.placeholder}
          onChange={handleInputChange}
          value={inputs.name || ''}
          required
        />
      </div>
      <div className="form__row">
        <label htmlFor="tel" className="form__label">
          {contact_form.tel.title}
        </label>
        <input
          type="tel"
          name="tel"
          id="tel"
          pattern="\+[\d| |\-|\(|\)]+$"
          className="form__input"
          placeholder={contact_form.tel.placeholder}
          onChange={handleInputChange}
          value={inputs.tel || ''}
          required
        />
      </div>
      <div className="form__row">
        <label htmlFor="email" className="form__label">
          {contact_form.email.title}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form__input"
          placeholder={contact_form.email.placeholder}
          onChange={handleInputChange}
          value={inputs.email || ''}
          required
        />
      </div>
      <div className="form__row">
        <label htmlFor="comment" className="form__label">
          {contact_form.comment.title}
        </label>
        <textarea
          rows="6"
          type="text"
          name="comment"
          id="comment"
          className="form__input"
          placeholder={contact_form.comment.placeholder}
          onChange={handleInputChange}
          value={inputs.comment || ''}
        />
      </div>
      <div className={captchaRowClass}>
        <label className="form__label"></label>
        <Recaptcha
          sitekey={contact_form.api_key}
          render="explicit"
          onloadCallback={recaptchaLoaded}
          verifyCallback={verifyCallback}
          hl={lang}
        />
      </div>
      <div className="form__row">
        <label className="form__label"></label>
        <button
          type="submit"
          className="form__btn"
        >
          {contact_form.btn_text}
        </button>
      </div>
      <div className="form__row">
        <p className="form__btn-sub col-md-8">
          {contact_form.policy}{' '}
          <a
            href={contact_form.pdf_link}
            className="form__politics"
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact_form.pdf_name}
          </a>
        </p>
      </div>
    </form>
  );
};

export default ContactsForm;
