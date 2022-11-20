/* eslint-disable react/prop-types */
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import DisplayError from './ErrorMessage';
import useGetSingleProduct from '../hooks/useGetSingleProduct';

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SingleProduct = ({ id }) => {
  const { loading, error, data } = useGetSingleProduct(id);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { Product } = data;
  return (
    <ProductStyles>
      <Head>
        <title>Sick Fits | {Product.name}</title>
      </Head>
      <img
        src={Product.photo.image.publicUrlTransformed}
        alt={Product.photo.altText}
      />
      <div className="details">
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
      </div>
    </ProductStyles>
  );
};

export default SingleProduct;
