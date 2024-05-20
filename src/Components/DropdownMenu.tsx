import { ReactNode } from "react";
import "../css/dropdown-menus.css";

export function DropdownMenu({
  menuCategory,
  children,
}: {
  menuCategory: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="dropdown-overlay">
        <div className={`dropdown-menu ${menuCategory}`}>
          <div className="dropdown-content">{children}</div>
        </div>
      </div>
    </>
  );
}
