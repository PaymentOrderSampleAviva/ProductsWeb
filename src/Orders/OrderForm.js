import React, {useState} from "react";
import OrderItems from "./OrderItems";
import PaymentOptions from "./PaymentOptions";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OrdersDataSource from "../Data/OrdersDataSource";

function OrderForm({products, showModal, handleClose})
{
    const [selectedOption, setSelectedOption] = useState(null);

    const confirmOrder = async (data) => {
      await OrdersDataSource.CreateOrder(data);
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
                            <Button onClick={async () => await handleConfirm()} variant="primary" type="submit">
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