import { THeaderDropdownState } from "../types";
import { ProductLink } from "./ProductLink";

const productsLeft = [
  {
    iconClass: "fa-brands fa-dropbox",
    productHeader: "Dropbox",
    productContent: "Store, share, and access files across devices",
  },
  {
    iconClass: "fa-solid fa-backward",
    productHeader: "Replay",
    productContent: "Review and approve videos faster",
  },
  {
    iconClass: "fa-solid fa-floppy-disk",
    productHeader: "Backup",
    productContent: "Automatically back up your devices",
  },
  {
    iconClass: "fa-solid fa-camera-retro",
    productHeader: "Capture",
    productContent: "Create screen recordings and video messages",
  },
];

const productsRight = [
  {
    iconClass: "fa-solid fa-bolt",
    productHeader: "Dash (beta)",
    productContent: "Quickly find, organize, and share work content",
  },
  {
    iconClass: "fa-solid fa-file-code",
    productHeader: "DocSend",
    productContent: "Send documents securely and track activity",
  },
  {
    iconClass: "fa-solid fa-file-signature",
    productHeader: "Sign",
    productContent: "Request and add signatures to documents",
  },
  {
    iconClass: "fa-solid fa-arrow-right",
    productHeader: "Early access",
    productContent: "Preview new product experiences",
  },
];

export const HeaderDropdown = ({
  isLinkActive,
}: {
  isLinkActive: (linkState: THeaderDropdownState) => "active" | "";
}) => {
  return (
    <div className={`header-dropdown ${isLinkActive("products")}`}>
      <div className="products-container">
        <div className="products-left">
          <ul>
            {productsLeft.map(
              ({ iconClass, productHeader, productContent }) => (
                <ProductLink
                  iconClass={iconClass}
                  productHeader={productHeader}
                  productContent={productContent}
                />
              )
            )}
          </ul>
        </div>
        <div className="products-right">
          <ul>
            {productsRight.map(
              ({ iconClass, productHeader, productContent }) => (
                <ProductLink
                  iconClass={iconClass}
                  productHeader={productHeader}
                  productContent={productContent}
                />
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
