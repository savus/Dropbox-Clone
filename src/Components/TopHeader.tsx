import "../css/top-header.css";
export const TopHeader = () => {
  return (
    <section className="top-header">
      <div className="header-container container">
        <div className="header-logo">
          <a href="#">Dropbox</a>
        </div>
        <nav className="top-navigation">
          <ul className="left-navigation">
            <li>
              <a href="#">
                Products
                <i className="fa fa-chevron-down"></i>
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
              <a href="#">Globe</a>
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
              <a href="#">Log In</a>
            </li>
          </ul>
        </nav>
        <button className="get-started-btn">Get Started</button>
      </div>
    </section>
  );
};
