
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap'; // Assuming you have Bootstrap installed

import stationery from './photos/stationery.jpg' 
import garden from './photos/homegarden.jpg'
import fashion from './photos/fashion.jpg'
import gadgets from './photos/gadgets.jpg'
import health from './photos/health.png'
import sports from './photos/sports2.jpg'


import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  return (
    <div style={{backgroundColor:'lightgoldenrodyellow'}}>
      
      <header className="bg-image">
        <Container className="text-center text-black py-5">
          <h1 >ShopSphere</h1>
          <p>Where Trends Orbit and Style Takes Center Stage!</p>
        </Container>
      </header>

      {/* Categories section with Bootstrap cards */}
      <section className="py-5">
        <Container>
          <h2 className="mb-4">Explore Our Categories</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={fashion} alt="Category 1" className='w-11000'/>
                <Card.Body>
                  <Card.Title>Fashion and Apparel</Card.Title>
                  <Card.Text>This category includes clothing, shoes, accessories, and other fashion-related items. Customers can browse through a wide range of products including formal wear, casual attire, sportswear, and more. Subcategories may include men's, women's, and children's fashion, as well as specific items like jewelry, handbags, and sunglasses.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={gadgets} alt="Category 2" />
                <Card.Body>
                  <Card.Title>Electronics and Gadget</Card.Title>
                  <Card.Text> This category encompasses a variety of electronic devices and gadgets such as smartphones, laptops, tablets, cameras, headphones, and smart home devices. Customers can explore the latest technology trends, compare products based on specifications, and make informed purchasing decisions.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={sports} alt="Category 3" />
                <Card.Body>
                  <Card.Title>Sports and Fitness</Card.Title>
                  <Card.Text>This category is dedicated to sports equipment, activewear, and fitness accessories. It includes items such as gym equipment, athletic apparel, running shoes, yoga mats, sports gear for various activities (e.g., basketball, soccer, tennis), and fitness trackers. Customers can find everything they need to stay active and pursue their fitness goals.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
      
          </Row>
          <Row>
           
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={health} alt="Category 4" />
                <Card.Body>
                  <Card.Title>Health and Beauty</Card.Title>
                  <Card.Text>This category features a range of products related to personal care, beauty, and wellness. It includes skincare products, cosmetics, hair care items, vitamins, supplements, fitness equipment, and wellness accessories. Customers can discover products to support their health and beauty routines.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={garden} alt="Category 5" />
                <Card.Body>
                  <Card.Title>Home and Garden</Card.Title>
                  <Card.Text>Products in this category cater to home improvement, decor, and gardening needs. It includes furniture, home appliances, kitchenware, bedding, gardening tools, outdoor furniture, and decor items. Customers can find everything they need to enhance their living spaces and outdoor areas.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={stationery} alt="Category 6" />
                <Card.Body>
                  <Card.Title>Books and Stationery</Card.Title>
                  <Card.Text>This category encompasses a wide range of books across genres including fiction, non-fiction, self-help, academic, and children's literature. Additionally, it includes stationery items such as notebooks, pens, planners, and art supplies. Customers can explore a diverse selection of reading materials and stationery essentials.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
    
        </Container>
      </section>

      
      <section className="text-center pb-5">
        <Link to="/products" className="btn btn-primary">
          View All Products
        </Link>
      </section>
    </div>
  );
};

export default Home;