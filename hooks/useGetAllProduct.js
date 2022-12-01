import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { perPage } from '../config';

const ALL_PRODUCT_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
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

const useGetAllProduct = (page) => {
  const { data, error, loading } = useQuery(ALL_PRODUCT_QUERY, {
    variables: {
      first: perPage,
      skip: perPage * page - perPage,
    },
  });

  return {
    loading,
    error,
    data,
  };
};

export default useGetAllProduct;

export { ALL_PRODUCT_QUERY };
