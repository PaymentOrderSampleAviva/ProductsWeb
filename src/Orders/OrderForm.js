import React, {useState} from "react";
import OrderItems from "./OrderItems";
import PaymentOptions from "./PaymentOptions";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function OrderForm({products, showModal, handleClose})
{
    const [selectedOption, setSelectedOption] = useState(null);

    const confirmOrder = (data) => {
        (async () => {
			axios.post('/orders/create', data)
        .then(response => {
            console.log('Success:', response.data);
        })
        .catch(error => {
            if (error.response) {
            // Server responded with a status code outside of 2xx
            console.error('Error Data:', error.response.data);
            console.error('Status Code:', error.response.status);
            console.error('Headers:', error.response.headers);
            alert(error.response.data)
            } else if (error.request) {
            // Request was made, but no response was received
            console.error('Request Error:', error.request);
            } else {
            // Something happened in setting up the request
            console.error('General Error:', error.message);
            }
            console.error('Config:', error.config);
        })
		})();
    }

    const handleConfirm = () => {
        if (!selectedOption) {
          alert('Please select an option before confirming.');
        } else {
            const data = {
                method: selectedOption,
                products: products.map(product => ({
                    productId : product.productId,
                    name: product.name,
                    details: product.details,
                    unitPrice: product.unitPrice
                }))
              };

            confirmOrder(data);
        }
      };

    return (
        <Modal
        size="lg"
        show={showModal}
        onHide={() => handleClose(showModal)}
        aria-labelledby="order-form-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="order-form-modal-title">
            New Order Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Row className="mb-3">
                    <Col><h6>Products</h6></Col>
                    <Col><h6>Payment Method</h6></Col>
                </Row>
                <Row>
                    <Col><OrderItems products={products}/></Col>
                    <Col><div>
                            <PaymentOptions 
                            selectedOption={selectedOption} 
                            onOptionChange={setSelectedOption}/>
                            <Button onClick={handleConfirm} variant="primary" type="submit">
                                Confirm
                            </Button>
                        </div>
                    </Col>
                </Row>
        </Form></Modal.Body>
      </Modal>
    );
}

export default OrderForm;