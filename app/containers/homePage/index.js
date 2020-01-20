/*
 * HomePage
 *
 * This is the first thing users see of our Main, at the '/' route
 */

import React from 'react';
import { compose } from 'redux';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import FlightDetails from './flightDetails';

const key = 'home';

const HomePage = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <>
      <FlightDetails />
    </>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default compose(HomePage);
