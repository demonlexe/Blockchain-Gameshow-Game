import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default function Home() {
  return (
    <Container style={{ marginTop: "1rem" }}>
      <Row>
        <Col>
          <Link href={`${publicRuntimeConfig.basePath || ""}/host`}>
            I am a host!
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
