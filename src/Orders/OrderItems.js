import React from 'react';
import { Table } from 'react-bootstrap';

function OrderItems({ products }) {
  return (
    <Table striped bordered>
    <thead>
      <tr>
        <th>Name</th>
        <th>Unit Price</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <tr key={product.productId}>
          <td>{product.name}</td>
          <td>{product.unitPrice}</td>
        </tr>
      ))}
    </tbody>
  </Table>
  );
}

export default OrderItems;