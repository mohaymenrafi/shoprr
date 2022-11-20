/* eslint-disable react/prop-types */
import React from 'react';
import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
  return <SingleProduct id={query?.id} />;
}

export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}
