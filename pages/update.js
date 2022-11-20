import React from 'react';
import UpdateProduct from '../components/UpdateProduct';

export default function update({ query }) {
  return <UpdateProduct id={query.id} />;
}

export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}
