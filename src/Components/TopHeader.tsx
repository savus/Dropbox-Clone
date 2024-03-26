import "../css/top-header.css";
export const TopHeader = () => {
  return (
    <section className="top-header">
      <div className="header-container container">
        <div className="header-logo">DropBox</div>
        <nav className="top-navigation">
          <ul className="left-navigation">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Solutions</a>
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
              <a href="#">Get App</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
          </ul>
          <button className="get-started-btn">Get Started</button>
        </nav>
      </div>
    </section>
  );
};
