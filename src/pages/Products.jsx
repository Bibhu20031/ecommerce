import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../contexts/CartContext';
import useSWR from 'swr';


const Product = () => {
  const { addToCart, removeFromCart, cart} = useCart();
  // const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  
  

 

  const { data: products, error } = useSWR('https://fakestoreapi.com/products', async (url) => {
    const response = await fetch(url);
    return response.json();
  });



  if (error) return <div>Error fetching data</div>;
  if (!products) return <div>Loading...</div>;


  const filteredProducts = products
    .filter((product) => {
      const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
      const priceMatch =
        (!minPrice || product.price >= parseFloat(minPrice)) &&
        (!maxPrice || product.price <= parseFloat(maxPrice));

      return categoryMatch && priceMatch;
    })
    .sort((a, b) => a.price - b.price);
  

    const inCart = (productId) => cart.some(item => item.id === productId);


  const handleAddToCart = (product) => {
    addToCart(product);
  };
  
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };




  return (
    <div className="container mt-5">
      <h1 className="mb-4">Product Page</h1>

      <div className="row">
      </div>

      <div className="row row-cols-1 row-cols-md-5 g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Category: {product.category}</p>
                <p className="card-text">Price: ${product.price}</p>
              </div>
              <div className="card-footer">
              {inCart(product.id) ? (
                  <button className="btn btn-danger" onClick={() => handleRemoveFromCart(product.id)}>
                    Remove from Cart
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
