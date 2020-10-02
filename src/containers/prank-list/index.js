import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Badge, Input } from "reactstrap";
import debounce from "lodash.debounce";

import { fetchAllPranks } from "../../store/pranks/actions";

import "./styles.scss";

function PrankList({ category }) {
  const dispatch = useDispatch();
  const pranks = useSelector(state => state.pranks.pranks);

  React.useEffect(() => {
    dispatch(fetchAllPranks({ category_slug: category }))
  }, []);

  const searchPranks = React.useCallback(debounce(
    keyword => dispatch(fetchAllPranks({ category_slug: category, phrase: keyword })),
    1000
  ), []);

  const handleKeywordChange = (event) => {
    searchPranks(event.target.value);
  }

  return (
    <Container>
      <Input className="mb-3" type="text" name="prank-keyword" id="prankKeyword" placeholder="Search pranks..." onChange={handleKeywordChange} />
      {pranks.map(prank => (
        <Row key={prank.id} className="align-items-center border-bottom pb-2">
          <Col sm={3}>
            <div className="position-relative prank-thumb p-1">
              <img src={prank.image_small} alt={prank.title.split(" ").map(t => t[0]).join("")} />
            </div>
            <div><span class="oi oi-envelope-open"></span> {prank.sent}</div>
            <Row>
              <Col sm={4}><span className="oi oi-thumb-up text-secondary"><span className="pl-2">{prank.likes}</span></span></Col>
              <Col sm={4}><span className="oi oi-thumb-down text-primary"><span className="pl-2">{prank.dislikes}</span></span></Col>
              <Col sm={4}><span className="oi oi-heart text-danger"><span className="pl-2">{prank.favorites}</span></span></Col>
            </Row>
          </Col>
          <Col className="pt-2">
            <h4>{prank.title}</h4>
            <p>{prank.description}</p>
            {prank.tags.length && <hr className="my-1"></hr>}
            {prank.tags.split(',').map(tag => <Badge key={`${prank.id}${tag}`} className="text-white mr-1 mb-1">{tag}</Badge>)}
          </Col>
        </Row>
      ))}
    </Container>
  );
}

PrankList.propTypes = {
  category: PropTypes.string,
};
PrankList.deafultProps = {
  category: "view-all-pranks",
};

export default PrankList;
