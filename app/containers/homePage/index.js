/*
 * HomePage
 *
 * This is the first thing users see of our Main, at the '/' route
 */

import React from 'react';
import { compose } from 'redux';
import { Flex, Box } from 'rebass';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

const HomePage = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  return (
    <>
      <Flex>
        <Box>This is the home page</Box>
      </Flex>
    </>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default compose(HomePage);
