import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

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

const useGetAllProduct = () => {
  const { data, error, loading } = useQuery(ALL_PRODUCT_QUERY);
  return {
    loading,
    error,
    data,
  };
};

export default useGetAllProduct;

export { ALL_PRODUCT_QUERY };
