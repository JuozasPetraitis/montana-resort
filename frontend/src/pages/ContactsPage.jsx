import React from 'react';

//! Components
import HeroSection from '../components/molecules/HeroSection';
import ContactsSection from '../components/molecules/ContactsSection';

//! Main Component
const ContactsPage = () => {
  return (
    <>
      <HeroSection sendMeStyle={{ image: 'Contacts' }} />
      <ContactsSection />
    </>
  );
};

export default ContactsPage;
