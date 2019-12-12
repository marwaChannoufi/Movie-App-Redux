import React from 'react';
import { Input, Col } from 'reactstrap';
import Rate from './Rate';

const SearchBar = props => {
  return (
    <>
      <Col md={12}>
        <Input
          type='text'
          onChange={props.changeHandler}
          placeholder='Please Enter a search word...'
        />
      </Col>
      <Col >
        <Rate
          rating={props.rate}
          rateChange={props.rateChange}
          isClickeble={true}
        />
      </Col>
    </>
  );
};
export default SearchBar;