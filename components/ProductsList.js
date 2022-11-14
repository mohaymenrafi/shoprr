import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { ProductCard } from './ProductCard';

const ALL_PRODUCT_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      description
      status
      price
      photo {
        id
        image {
          publicUrl
          filename
        }
      }
    }
  }
`;

const ProductListStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

const ProductsList = () => {
  const { data, error, loading } = useQuery(ALL_PRODUCT_QUERY);
  console.log(data, error, loading);
  if (loading) return <h2>Loading</h2>;
  if (error) return <h2>Some Error happend</h2>;
  return (
    <div>
      <ProductListStyled>
        {data.allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductListStyled>
    </div>
  );
};

export default ProductsList;
