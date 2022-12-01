import { useRouter } from 'next/router';
import Pagination from '../../components/Pagination';
import ProductsList from '../../components/ProductsList';

export default function Products() {
  const { query } = useRouter();
  const page = parseInt(query.page);

  return (
    <div>
      <Pagination page={page || 1} />
      <ProductsList page={page || 1} />
      <Pagination page={page || 1} />
    </div>
  );
}
