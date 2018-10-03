import { Layout, Row, Col } from "antd";
const { Header } = Layout;

export default ({ centerColumn, rightColumn, leftColumn }) => (
  <Header
    theme="dark"
    style={{
      backgroundColor: "#F0F2F5",
      marginBottom: "25px"
    }}
  >
    <Row>
      <Col span={6} style={{ textAlign: "left" }}>
        {leftColumn}
      </Col>
      <Col
        span={12}
        style={{
          textAlign: "center",
          fontWeight: 600,
          textTransform: "uppercase"
        }}
      >
        {centerColumn}
      </Col>
      <Col span={6} style={{ textAlign: "right" }}>
        {rightColumn}
      </Col>
    </Row>
  </Header>
);
