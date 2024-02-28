// CartPage.jsx
import React, { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Button, Table } from 'react-bootstrap';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [totalPrice,setTotalPrice]= useState(0);

  useEffect(()=>{
    let total=0;
    cart.forEach(item => {
      total+=item.price*item.quantity;      
    });
    setTotalPrice(total);
  },[cart]);


  const handleUpdateQuantity = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveFromCart = (productId) => {
    console.log('removing product', productId)
    removeFromCart(productId);
  };

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
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
                <td>${item.price*item.quantity.toFixed(2)}</td>
                <td>
                  <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
     <div style={{display:'flex', marginLeft:'50px'}}>
       <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
       <button disabled="disabled" style={{backgroundColor:'lightblue', color:'black', marginLeft:'50vw'}}>Buy(Not Available Now)</button>
      </div> 
    </div>
  );
};

export default CartPage;
