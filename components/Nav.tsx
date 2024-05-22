import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from "next/image.js";

export default function Nav() {
  return (
    <Navbar>
      <NavbarBrand>
        <Image src='/chordmark.png' height="48" width="48" alt="ChordMark Logo" className='rounded-lg' priority={true}/>
        <p className="font-bold text-inherit">CHORDMARK</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Users
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
