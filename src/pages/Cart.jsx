// CartPage.jsx
import {React, useState, useEffect} from 'react';
import { useCart } from '../contexts/CartContext';
import { Button, Table } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  const handleUpdateQuantity = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveFromCart = (productId) => {
    console.log('removing product', productId)
    removeFromCart(productId);
  };

  

  useEffect(() => {
    
    const calculateTotalPrice = () => {
      let total = 0;
      cart.forEach(item => {
        total += item.price * item.quantity;
      });
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cart]);

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.category}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </Button>{' '}   
                  {item.quantity}{' '}
                  <Button variant="outline-primary" onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                    +
                  </Button>
                </td>
                <td>${item.quantity*item.price.toFixed(2)}</td>
                <td>
                  <Button  onClick={() => handleRemoveFromCart(item.id)}>
                  <MdDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
      )}
    </div>
  );
};

export default CartPage;
