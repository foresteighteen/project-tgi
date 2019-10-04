import React from 'react';
import { VacancyList } from '../../../components';

import './VacancySection.sass';

const VacancySection = props => {
  return (
    <section id="vacancy-section">
      <div className="container">
        <VacancyList {...props} />
      </div>
    </section>
  )
}

export default VacancySection;

