import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory, useLocation } from "react-router-dom";
import PrankList from "../../prank-list";

function AllPranksModal() {
  const location = useLocation();
  const history = useHistory();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    history.push("/");
  }

  React.useEffect(() => {
    if (location.pathname.includes("view-all-pranks")) {
      setIsOpen(true);
    }
  }, [location.pathname]);

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>All Pranks</ModalHeader>
      <ModalBody>
        <PrankList />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  );
}

export default AllPranksModal
