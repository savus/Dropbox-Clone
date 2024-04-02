import { ReactNode, useState } from "react";
import { THeaderDropdownState } from "../types";
import { HeaderDropdown } from "./HeaderDropdown";
import { NavItem } from "./NavItem";
import { GetStartedButton } from "./TopHeader/GetStartedButton";

export const Navbar = ({ children }: { children: ReactNode }) => {
  const [headerDropdownState, setHeaderDropdownState] =
    useState<THeaderDropdownState>("none");
  const isLinkActive = (linkState: THeaderDropdownState) =>
    headerDropdownState === linkState ? "active" : "";
  return (
    <nav className="top-navigation">
      <ul className="left-navigation">
        {children}
        <NavItem iconClass="fa fa-chevron-down" content="Products" />

        <li>
          <a href="#">
            Solutions
            <i className="fa fa-chevron-down"></i>
          </a>
        </li>
        <li>
          <a href="#">Enterprise</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#"></a>
        </li>
      </ul>
      <ul className="right-navigation">
        <li>
          <a href="#">
            <i className="fa-solid fa-globe"></i>
          </a>
        </li>
        <li>
          <a href="#">Contact Sales</a>
        </li>
        <li>
          <a href="#">
            Get App
            <i className="fa fa-chevron-down"></i>
          </a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <GetStartedButton />
        </li>
      </ul>
    </nav>
  );
};
