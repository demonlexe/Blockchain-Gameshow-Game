"use client";
import { usePathname, useRouter } from "next/navigation";
import { Nav, Navbar } from "react-bootstrap";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  // Function to determine the color based on the active state
  const getLinkColor = (slug: string) => {
    return pathname === slug ? "#FFFFFF" : "#A3A2A2"; // Active vs inactive color
  };
  return (
    <header>
      <Navbar
        expand="lg"
        style={{ width: "100%", padding: "0.5rem 1rem" }}
        className="bg-dark navbar-dark"
      >
        {/* Left-most part: Logo and Title */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <span
            className="text-white d-none d-md-block"
            style={{ fontSize: "1.2rem" }}
          >
            Blockchain Gameshow
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarResponsive" />

        <Navbar.Collapse
          id="navbarResponsive"
          className="justify-content-center"
        >
          <Nav className="align-items-center">
            <Nav.Link
              href="/host"
              className="mx-2"
              style={{ color: getLinkColor("host") }}
              onClick={() => router.push("/host")}
            >
              Host Page
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
