import React from "react";
import { Link, Route } from "react-router-dom";
import { Container, Jumbotron, ListGroup, ListGroupItem } from "reactstrap";

import PranksModal from "../../containers/modals/pranks-modal";

import "./styles.scss";

function HomePage() {
  return (
    <Container>
      <Jumbotron className="mt-5 bg-secondary">
        <h1 className="display-3 caption font-weight-bold text-primary">Prank List</h1>
        <ListGroup>
          <ListGroupItem><Link to="view-all-pranks">View All Pranks</Link></ListGroupItem>
          <ListGroupItem><Link to="new-prank-calls">New Pranks</Link></ListGroupItem>
          <ListGroupItem><Link to="food-restaurant-prank-calls">Food and Restaurants</Link></ListGroupItem>
        </ListGroup>
      </Jumbotron>
      <Route path="/:category" component={PranksModal} />
    </Container>
  );
}

export default HomePage;
