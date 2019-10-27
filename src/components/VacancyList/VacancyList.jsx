import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import { useTransition, animated } from 'react-spring';
import VacancyItem from './VacancyItem';
import { useMeasure, usePrevious } from '../../utils/Measure';

const VacancyList = ({ vacancies, currencySymbol, buttonText, activeVacancy }) => {
  // const [bind, {height:viewHeight}] = useMeasure();
  // const [listHeight, setlistHeight] = useState();

//   useEffect(()=>{
//     if(viewHeight) setlistHeight(viewHeight * vacancies.length);
//   }, [viewHeight])
// console.log(listHeight, viewHeight)
  const transition = useTransition(vacancies, item => item.id, {
    from: { opacity: 0, transform: 'translate3d(0,150px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-150px,0)', position: 'absolute' },
    // from: { opacity: 0},
    // enter: { opacity: 1},
    // leave: { opacity: 0},
  });

  const renderVacancy = props => <VacancyItem key={props.id} currencySymbol={currencySymbol} buttonText={buttonText} {...props} />;

    // {/* {vacancies.map(renderVacancy)} */}
    return(        
      <ul className="vacancy__list">
      {transition.map(({item, key, props}) => {
        console.log(key);
        return(

        // 

            <animated.div key={key} style={{...props, zIndex: `-${key}`}} className='vacancy-wrapp'>
              
                  <VacancyItem currencySymbol={currencySymbol} buttonText={buttonText} {...item} />
                {/* {vacancies.map(renderVacancy)} */}
              
          {/* <VacancyItem currencySymbol={currencySymbol} buttonText={buttonText} {...item} /> */}
          
          </animated.div>
         
        
      )})}
       </ul>
      )
      
    
  
}

export default VacancyList;

