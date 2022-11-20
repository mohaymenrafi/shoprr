/* eslint-disable react/prop-types */

import Swal from 'sweetalert2';
import useDeleteSingleProduct from '../hooks/useDeleteSingleProduct';

export default function DeleteProduct({ id, children }) {
  const { deleteProduct, loading, error } = useDeleteSingleProduct(id);
  const handleDelete = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#FF0000',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct();
        Swal.fire('Deleted!', 'The product has been deleted.', 'success');
      }
    });
  };
  return (
    <button type="button" onClick={handleDelete}>
      {children}
    </button>
  );
}
