import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Woo = () => {

  return (
    <>
      <div>
        Woo Studio
      </div>
    </>
  );
};
Woo.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
};

Woo.defaultProps = {
  match: {},
  location: {},
};
export default Woo;
