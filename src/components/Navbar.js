import Logo from "./Logo";
import NavbarList from "./NavbarList";

export default function Navbar() {
  return (
    <>
      <nav className="main-navbar container">
        <Logo />
        <NavbarList />
      </nav>
    </>
  );
}
