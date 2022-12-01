/* eslint-disable react/prop-types */
import styled from 'styled-components';
import useGetAllProduct from '../hooks/useGetAllProduct';
import Loader from './Loader';
import { ProductCard } from './ProductCard';

const ProductListStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

const ProductsList = ({ page }) => {
  const { data, error, loading } = useGetAllProduct(page);

  if (loading) return <Loader />;
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
