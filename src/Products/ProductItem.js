import React from 'react';

function ProductItem({ product, isSelected, onProductSelect }) {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onProductSelect(product.productId)}
        />
      </td>
      <td>{product.name}</td>
      <td>{product.details}</td>
      <td>{product.status}</td>
      <td>{product.unitPrice}</td>
    </tr>
  );
}

export default ProductItem;
