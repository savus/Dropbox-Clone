import "../css/dropdown-menus.css";

export function DropdownMenu() {
  return (
    <>
      <div className="dropdown-overlay">
        <div className="dropdown-menu products">
          <div className="dropdown-content">
            <div className="left-side">
              <div className="product">
                <div className="icon-container">
                  <i className="fa-brands fa-dropbox"></i>
                </div>
                <div className="content-container">
                  <a href="#" className="product-header">
                    Dropbox
                  </a>
                  <p className="product-content">
                    Store, share, and access files across devices
                  </p>
                </div>
              </div>
            </div>
            <div className="right-side"></div>
          </div>
        </div>
      </div>
    </>
  );
}
