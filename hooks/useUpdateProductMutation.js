import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String!
    $description: String!
    $price: Int!
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
    }
  }
`;

const useUpdateProductMutation = ({ id, name, description, price }) => {
  const [updateProduct, { data, error, loading }] = useMutation(
    UPDATE_PRODUCT_MUTATION,
    {
      variables: {
        id,
        name,
        description,
        price,
      },
    }
  );
  return {
    updateProduct,
    data,
    error,
    loading,
  };
};

export default useUpdateProductMutation;
