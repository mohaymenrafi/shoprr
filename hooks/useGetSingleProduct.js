import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_SINGLE_PRODUCT = gql`
  query GET_SINGLE_PRODUCT($id: ID!) {
    Product(where: { id: $id }) {
      name
      description
      id
      price
      photo {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

const useGetSingleProduct = (id) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PRODUCT, {
    variables: {
      id,
    },
  });
  return {
    loading,
    error,
    data,
  };
};

export default useGetSingleProduct;
