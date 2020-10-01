import React from "react";
import { Link } from "react-router-dom";
import { Container, Jumbotron } from "reactstrap";
import AllPranksModal from "../../containers/modals/all-pranks";

function HomePage() {
  return (
    <Container>
      <Jumbotron className="mt-5">
        <h1 className="display-3">Prank List</h1>
        <ul>
          <li><Link to="view-all-pranks">View All Pranks</Link></li>
          <li><Link to="new-prank-calls">New Pranks</Link></li>
          <li><Link to="food-restaurant-prank-calls">Food and Restaurants</Link></li>
        </ul>
      </Jumbotron>
      <AllPranksModal />
    </Container>
  );
}

export default HomePage;
