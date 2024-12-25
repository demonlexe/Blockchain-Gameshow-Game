import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container style={{ marginTop: "1rem" }}>
      <Row>
        <Col>
          <Link href="/Blockchain-Gameshow-Game/host">I am a host!</Link>
        </Col>
      </Row>
    </Container>
  );
}
