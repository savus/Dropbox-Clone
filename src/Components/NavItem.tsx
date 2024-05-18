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
      <a href="#" data-dropdown={text.toLowerCase()}>
        {text}
        {hasChevron && <i className="fa-solid fa-chevron-down"></i>}
      </a>
      {children}
    </li>
  );
};
