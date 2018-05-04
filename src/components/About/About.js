import React from "react";
import { Row, Col, Container, Carousel, Card } from "react-materialize";
import bottle from "./bottle.jpg";

const About = () =>
  <div>
    {/* <h1>Ben's Bargains</h1>
    <h2>Pick something up!</h2> */}
    <Container style={{ marginTop: 30 }}>
      <Carousel options={{ fullWidth: true }} 
                images={[
        'https://lorempixel.com/800/400/food/1',
        'https://lorempixel.com/800/400/food/2',
        'https://lorempixel.com/800/400/food/3',
        'https://lorempixel.com/800/400/food/4',
        'https://lorempixel.com/800/400/food/5',
        bottle
      ]} />
      <Row>
        <Col size="md-2" />
        <Col size="md-8">
          <Card className="grey lighten-4">
          <h1>Welcome to Ben's Bargain Bin!</h1>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>;

export default About;
