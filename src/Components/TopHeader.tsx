import "../css/top-header.css";
import { NavItem } from "./NavItem";
import DropboxLogo from "../assets/Dropbox-logo.png";
import { DropdownMenu } from "./DropdownMenu";

export const TopHeader = () => {
  return (
    <header className="top-header">
      <div className="logo-container">
        <a href="#" className="logo-container">
          <img src={DropboxLogo} alt="" className="logo" />
        </a>
      </div>
      <a href="#" className="trigram btn" aria-expanded="false">
        <i className="fa-solid fa-bars"></i>
      </a>
      <nav className="left-navigation">
        <ul className="navbar-nav">
          <NavItem text="Products" hasChevron={true}>
            <DropdownMenu />
          </NavItem>
          <NavItem text="Solutions" hasChevron={true}>
            <></>
          </NavItem>
          <NavItem text="Enterprise" hasChevron={false}>
            <></>
          </NavItem>
          <NavItem text="Pricing" hasChevron={false}>
            <></>
          </NavItem>
        </ul>
      </nav>
      <nav className="right-navigation">
        <ul className="navbar-nav">
          <li className="globe-link">
            <a href="#">
              <i className="fa-solid fa-globe"></i>
            </a>
          </li>
          <NavItem text="Contact Sales" hasChevron={false}>
            <></>
          </NavItem>
          <NavItem text="Get app" hasChevron={true}>
            <></>
          </NavItem>
          <NavItem text="Sign up" hasChevron={false}>
            <></>
          </NavItem>
          <NavItem text="Login" hasChevron={false}>
            <></>
          </NavItem>
          <li className="button-container">
            <a href="#" className="get-started-button btn btn-primary">
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
