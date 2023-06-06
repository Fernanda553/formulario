import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";

const SocialButton = ({ icon }) => {
  return (
    <>
      <Row class="border border-dark rounded-circle p-4">
        <Col xs={6} md={4}>
          {icon}
        </Col>
      </Row>
    </>
  );
};

export default SocialButton;
