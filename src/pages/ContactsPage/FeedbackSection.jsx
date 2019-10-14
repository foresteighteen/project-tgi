import React from 'react';
import ContactsForm from '../../containers/ContactsForm';

const FeedbackSection = () => (
  <div className="row contacts__form-container">
    <div className="contacts__form">
      <h2 className="contacts__form-title">Напишите Нам</h2>
      <ContactsForm />
    </div>
  </div>
);

export default FeedbackSection;
