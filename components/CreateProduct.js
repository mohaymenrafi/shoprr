import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../hooks/useForm';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import { ALL_PRODUCT_QUERY } from '../hooks/useGetAllProduct';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        price: $price
        description: $description
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      name
      id
      price
      description
    }
  }
`;

export default function CreateProduct() {
  const { inputs, clearForm, resetForm, handleChange } = useForm({
    image: '',
    name: 'nice shoes',
    price: 40,
    description: 'Lorem ipsum dolor',
  });

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct({
      variables: inputs,
      refetchQueries: [
        {
          query: ALL_PRODUCT_QUERY,
        },
      ],
    });
    clearForm();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            name="price"
            id="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">+ Add Products</button>
      </fieldset>
    </Form>
  );
}
