import React, { useState } from 'react';
import ProductItem from './ProductItem';

function ProductList({ products}) {
    const [selectedProducts, setSelectedProducts] = useState([]);
    
    const handleProductSelect = (productId) => {
        setSelectedProducts((prevSelected) => {
          if (prevSelected.includes(productId)) {
            return prevSelected.filter((id) => id !== productId);
          } else {
            return [...prevSelected, productId];
          }
        });
      };
  
    return products ? (
    <>
    <h1>Products Table</h1>
    <table className="product-list">
      <thead>
        <tr>
          <th>Select</th>
          <th>Name</th>
          <th>Details</th>
          <th>Status</th>
          <th>Unit Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductItem
            key={product.productId}
            product={product}
            isSelected={selectedProducts.includes(product.productId)}
            onProductSelect={handleProductSelect}
          />
        ))}
      </tbody>
    </table>
    <button className="create-order-button">
        Creater Order
      </button>
    </>
  ) : <p>Loading...</p>
}

export default ProductList;
