import React, { useState } from 'react';
import ProductItem from './ProductItem';
import Button from 'react-bootstrap/Button';
import OrderForm from '../Orders/OrderForm';

function ProductList({ products}) {
    const [selectedIds, setselectedIds] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    
    const handleSelectProductId = (productId) => {
        setselectedIds((prevSelected) => {
          if (prevSelected.includes(productId)) {
            return prevSelected.filter((id) => id !== productId);
          } else {
            return [...prevSelected, productId];
          }
        });
      };

    const handleSelectProduct = (selectedIds) => {
        const selected = products.filter(product => selectedIds.includes(product.productId));
        setSelectedProducts(selected);
    };
  
const handleCreateOrder = () =>
{
  handleSelectProduct(selectedIds);
  setShowModal(true);
}

const handleClose = (show) =>{
  setShowModal(!show);
}

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
            isSelected={selectedIds.includes(product.productId)}
            onProductSelect={handleSelectProductId}
          />
        ))}
      </tbody>
    </table>
    <Button variant="primary" onClick={handleCreateOrder} disabled={selectedIds.length === 0}>
        Creater Order
      </Button>
    
    {showModal ? (
        <OrderForm products={selectedProducts} showModal={showModal} handleClose={handleClose}/>
      ) : (
        <div></div>
      )}
    </>
  ) : <p>Loading...</p>
}

export default ProductList;
