import "../css/top-header.css";
import { Navbar } from "./Navbar";
export const TopHeader = () => {
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
        <Navbar />
      </div>
    </section>
  );
};
