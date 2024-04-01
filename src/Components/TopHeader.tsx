import { useState } from "react";
import "../css/top-header.css";
import { GetStartedButton } from "./TopHeader/GetStartedButton";
import { THeaderDropdownState } from "../types";
import { HeaderDropdown } from "./HeaderDropdown";
export const TopHeader = () => {
  const [headerDropdownState, setHeaderDropdownState] =
    useState<THeaderDropdownState>("none");
  const isLinkActive = (linkState: THeaderDropdownState) =>
    headerDropdownState === linkState ? "active" : "";
  return (
    <section className="top-header">
      <div className="header-container">
        <div className="header-logo">
          <a href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8LPPm7iZFNa2j62VOoKWI39Br3KGgBhKvyz0zMr_xOA&s"
              alt=""
            />
          </a>
        </div>
        <nav className="top-navigation">
          <ul className="left-navigation">
            <li>
              <a
                href="#"
                onMouseOver={() => {
                  setHeaderDropdownState("products");
                }}
                onMouseLeave={() => {
                  setHeaderDropdownState("none");
                }}
              >
                Products
                <i className="fa fa-chevron-down"></i>
                <HeaderDropdown isLinkActive={isLinkActive} />
              </a>
            </li>
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
      </div>
    </section>
  );
};
