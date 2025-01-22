"use client";
import { usePathname } from "next/navigation";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

export default function Header() {
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
        <Navbar.Brand className="">
          <Link
            href={`/`}
            className="d-flex align-items-center nav-link text-white d-none d-md-block"
            style={{ fontSize: "1.2rem" }}
          >
            Blockchain Gameshow
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarResponsive" />

        <Navbar.Collapse
          id="navbarResponsive"
          className="justify-content-center"
        >
          <Nav className="align-items-center">
            <Link
              className="nav-link mx-2"
              style={{ color: getLinkColor("/host") }}
              href={`/host`}
            >
              Host Page
            </Link>
          </Nav>
          <Nav className="align-items-center">
            <Link
              className="nav-link mx-2"
              style={{ color: getLinkColor("/dummy") }}
              href={`/dummy`}
            >
              Go To Dummy Page
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
