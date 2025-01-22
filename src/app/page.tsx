import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import config from "../../next.config";
const basePath = config.basePath ?? "";

export default function Home() {
  return (
    <Container style={{ marginTop: "1rem" }}>
      <Row>
        <Col>
          <Link href={`${basePath}/host`}>I am a host!</Link>
        </Col>
      </Row>
    </Container>
  );
}
