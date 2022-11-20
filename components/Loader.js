import React from 'react';
import { Puff } from 'react-loader-spinner';

const Loader = () => (
  <Puff
    height="80"
    width="80"
    radisu={1}
    color="#ff0000"
    ariaLabel="puff-loading"
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    wrapperClass=""
    visible
  />
);

export default Loader;
