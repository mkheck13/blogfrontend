
'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';

export default function navbarComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/">Login Page</Navbar.Link>
        <Navbar.Link as={Link} href="/Blogpage">Blog Page</Navbar.Link>
        <Navbar.Link as={Link} href="/Dashboard">DashBoard</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
