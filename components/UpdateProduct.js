/* eslint-disable react/prop-types */
import React from 'react';
import useForm from '../hooks/useForm';
import useGetSingleProduct from '../hooks/useGetSingleProduct';
import useUpdateProductMutation from '../hooks/useUpdateProductMutation';
import DisplayError from './ErrorMessage';
import Loader from './Loader';
import Form from './styles/Form';

const UpdateProduct = ({ id }) => {
  const { data, error, loading } = useGetSingleProduct(id);
  const { handleChange, inputs } = useForm(data?.Product);
  const {
    updateProduct,
    data: updateData,
    error: updateError,
    loading: updateLoading,
  } = useUpdateProductMutation({
    id,
    name: inputs.name,
    description: inputs.description,
    price: inputs.price,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct().catch((error) => console.error(error));
  };

  if (loading) return <Loader />;

  return (
    <Form onSubmit={handleSubmit}>
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        {/* <label htmlFor="image">
          Image
          <input
            required
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
          />
        </label> */}
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
        <button type="submit">Update Product</button>
      </fieldset>
    </Form>
  );
};

export default UpdateProduct;
