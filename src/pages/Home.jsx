
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap'; // Assuming you have Bootstrap installed
import cloth from './photos/cloth.jpg'
import laptop from './photos/laptop.png'
import mobile from './photos/mobile.png'
import sports from './photos/sports.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  return (
    <div>
      
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
                <Card.Img variant="top" src={cloth} alt="Category 1" className='w-11000'/>
                <Card.Body>
                  <Card.Title>Category 1</Card.Title>
                  <Card.Text>Description of Category 1.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={laptop} alt="Category 1" />
                <Card.Body>
                  <Card.Title>Category 1</Card.Title>
                  <Card.Text>Description of Category 1.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={sports} alt="Category 1" />
                <Card.Body>
                  <Card.Title>Category 1</Card.Title>
                  <Card.Text>Description of Category 1.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
      
          </Row>
          <Row>
           
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={mobile} alt="Category 1" />
                <Card.Body>
                  <Card.Title>Category 1</Card.Title>
                  <Card.Text>Description of Category 1.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="category1.jpg" alt="Category 1" />
                <Card.Body>
                  <Card.Title>Category 1</Card.Title>
                  <Card.Text>Description of Category 1.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="category1.jpg" alt="Category 1" />
                <Card.Body>
                  <Card.Title>Category 1</Card.Title>
                  <Card.Text>Description of Category 1.</Card.Text>
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