// ***** start - imports from package *****
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button, Table } from "reactstrap";
// ***** end - imports from package *****

// ***** start - imports from files *****
import CustomSVG from '../Common/CustomSVG';
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeItemFromCart
} from '@/redux/reducers/cartReducer';
import { countCheckoutTotal } from '@/utils/utils';
// ***** end - imports from files *****

const CartPage = () => {

  // ***** start - define variables *****
  const dispatch = useDispatch()
  const cartData = useSelector((state) => state.cart);
  console.log('cartData: ', cartData);
  // ***** end - define variables *****

  // ***** start - remove item from cart *****
  const onClickOfRemoveItem = (item) => {
    dispatch(removeItemFromCart(item));
  };
  // ***** end - remove item from cart *****

  // ***** start - decrease item of cart *****
  const onClickOnDecrementQuantity = (index) => {
    dispatch(decrementItemQuantity(index));
  };
  // ***** end - decrease item of cart *****

  // ***** start - increase item of cart *****
  const onClickOnIncrementQuantity = (index) => {
    dispatch(incrementItemQuantity(index));
  };
  // ***** end - increase item of cart *****

  return (
    <Container className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <Row>
        <Col md={8}>
          <Table striped responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{`${item.name} (${item.color.label})`}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <div className="quantity-control">
                      <Button className='quantityButton' onClick={() => onClickOnDecrementQuantity(index)}>-</Button>
                      <span className="quantity">{item.quantity}</span>
                      <Button className='quantityButton' onClick={() => onClickOnIncrementQuantity(index)}>+</Button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <div onClick={() => onClickOfRemoveItem(item)}>
                      <CustomSVG icon={'icon-trash'} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={4}>
          <div className="cart-summary">
            <h2>Summary</h2>
            <div className="summary-item">
              <span>Total</span>
              <span>${countCheckoutTotal(cartData)}</span>
            </div>
            <Button className='checkout-btn' color="primary" block>
              Checkout
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;