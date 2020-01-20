import React from 'react';
import { connect } from 'react-redux';
import { Flex, Box, Button } from 'rebass';
import { Label, Radio, Input } from '@rebass/forms';
import PropTypes from 'prop-types';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { searchForFlights } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'flightDetails';

const FlightDetails = ({ dispatch }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <>
      <Box as="form" onSubmit={e => e.preventDefault()}>
        <Flex
          p={3}
          sx={{
            'max-width': '300px',
          }}
        >
          <Label
            sx={{
              'align-items': 'center',
            }}
          >
            <Radio
              name="planeRoute"
              id="roundTrip"
              value="RoundTrip"
              defaultChecked
            />
            Round Trip
          </Label>
          <Label
            sx={{
              'align-items': 'center',
            }}
          >
            <Radio name="planeRoute" id="oneWay" value="OneWay" />
            One Way
          </Label>
        </Flex>
        <Flex mx={2} py={1}>
          <Box mx={1} width={1 / 4}>
            <Label mb={1} htmlFor="fromCity">
              From City
            </Label>
            <Input
              id="fromCity"
              name="fromCity"
              type="text"
              placeholder="From"
            />
          </Box>
          <Box mx={1} width={1 / 4}>
            <Label mb={1} htmlFor="toCity">
              To City
            </Label>
            <Input id="toCity" name="toCity" type="text" placeholder="To" />
          </Box>
          <Box mx={1} width={1 / 4}>
            <Label mb={1} htmlFor="fromDate">
              From Date
            </Label>
            <Input id="fromDate" name="fromDate" type="date" />
          </Box>
          <Box mx={1} width={1 / 4}>
            <Label mb={1} htmlFor="toDate">
              To Date
            </Label>
            <Input id="toDate" name="toDate" type="date" />
          </Box>
        </Flex>
        <Flex
          mx={2}
          py={1}
          sx={{
            'align-items': 'center',
          }}
        >
          <Box mx={1} width={1 / 4}>
            <Label mb={1} htmlFor="numAdults">
              Number of Adults
            </Label>
            <Input id="numAdults" name="numAdults" type="text" />
          </Box>
          <Box mx={1} width={1 / 4}>
            <Button mt={3} onClick={() => dispatch(searchForFlights())}>
              Find
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

FlightDetails.propTypes = {
  dispatch: PropTypes.func,
};

FlightDetails.defaultProps = {};

export default connect()(FlightDetails);
