import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory, useParams } from "react-router-dom";
import PrankList from "../../prank-list";

function PranksModal() {
  const params = useParams();
  const history = useHistory();
  const [isOpen, setIsOpen] = React.useState(true);

  const { category } = params;

  const toggle = () => {
    setIsOpen(!isOpen);
    history.goBack();
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader className="text-capitalize" toggle={toggle}>{category}</ModalHeader>
      <ModalBody>
        <PrankList category={category} />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" className="text-white text-bold" onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  );
}

export default PranksModal;
