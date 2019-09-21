import React from 'react';

import HeroSection from './HeroSection';
import ListSection from './ListSection';
import FeedbackSection from './FeedbackSection';

import './ContactsPage.sass';

const ContactsPage = () => (
  <div className="contacts container">
    <HeroSection />
    <ListSection />
    {/* just image of map */}
    <img
      style={{ width: '100%' }}
      src="https://i.imgur.com/nuYbe9h.png"
      alt=""
    />
    <FeedbackSection />
    {/* FOOTER */}
  </div>
);

export default ContactsPage;
