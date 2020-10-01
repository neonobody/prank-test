import React from "react";
import { Container, Row, Col, Badge, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { fetchAllPranks } from "../../store/actions";

function PrankList() {
  const dispatch = useDispatch();
  const pranks = useSelector(state => state.items);

  React.useEffect(() => {
    dispatch(fetchAllPranks())
  }, []);

  const searchPranks = React.useCallback(debounce(keyword => dispatch(fetchAllPranks(keyword)), 1000), []);

  const handleKeywordChange = (event) => {
    searchPranks(event.target.value);
  }

  return (
    <Container>
      <Input className="mb-3" type="text" name="prank-keyword" id="prankKeyword" placeholder="Search pranks..." onChange={handleKeywordChange} />
      {pranks.map(item => (
        <Row className="border-bottom pb-2">
          <Col sm="auto">
            <img src={item.image_small} />
            <div>Sent: {item.sent}</div>
          </Col>
          <Col>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <hr className="my-1"></hr>
            {item.tags.split(',').map(tag => <Badge className="mr-1 mb-1">{tag}</Badge>)}
          </Col>
          <Col sm="auto">
            <div>Like: {item.likes}</div>
            <div>Dislike: {item.dislikes}</div>
            <div>Favourite: {item.favorites}</div>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default PrankList;
