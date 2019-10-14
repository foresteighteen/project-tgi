import React from 'react';

import HeroSection from './HeroSection';
import ListSection from './ListSection';
import FeedbackSection from './FeedbackSection';

import { QuestionForm } from '../../components';

import './ContactsPage.sass';

const ContactsPage = () => (
  <main className="contacts">
    <HeroSection />
    <ListSection />
    {/* just image of map */}
    <img
      style={{ width: '100%' }}
      src="https://i.imgur.com/nuYbe9h.png"
      alt=""
    />
    <FeedbackSection />
    <QuestionForm />
    {/* FOOTER */}
  </main>
);

export default ContactsPage;
