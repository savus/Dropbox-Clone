import { ReactNode } from "react";

export const NavItem = ({
  text,
  children,
  hasChevron,
}: {
  text: string;
  children: ReactNode;
  hasChevron: boolean;
}) => {
  return (
    <li className="nav-item">
      <a href="#">{text}</a>
      {hasChevron && <i className="fa-solid fa-chevron-down"></i>}
      {children}
    </li>
  );
};
