import React from 'react';

import HeroSection from './HeroSection';
import ListSection from './ListSection';
import FeedbackSection from './FeedbackSection';
import Map from './Map';

import { QuestionForm } from '../../components';

import './ContactsPage.sass';

const ContactsPage = () => (
  // const [data, setData] = React.useState({});
  // React.useEffect(() => {
  //   const fetchPage = async () => {
  //     const response = await fetch(
  //       'https://tgi.thelegacy.com.ua/wp-json/wp/v2/pages/29',
  //     );
  //     const responseData = await response.json();
  //     setData(responseData);
  //   };
  //   fetchPage();
  // }, []);
  // console.log(data);
  <main className="contacts">
    <HeroSection />
    <ListSection />
    <Map />
    <FeedbackSection />
    <QuestionForm />
  </main>
);
export default ContactsPage;
