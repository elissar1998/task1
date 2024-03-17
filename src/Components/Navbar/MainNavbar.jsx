import TopNavbar from "../TopNavBar/TopNavbar";
import "./MainNavbar.css";
import { NavLink } from "react-router-dom";
// import BlackButton from "../Buttons/BlackButton"
// import IconCalender from "../Buttons/IconCalender"
import { FaCalendar } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";

const MainNavbar = () => {
  return (
    <>
      <TopNavbar />
      <hr style={{ margin: 0 }} />
      <nav className="MainNav">
        <div className="Left-Nav">
          <div className="Logo">
            <a href="#">VILLA</a>
          </div>
        </div>
        <div className="Right-Nav">
          <div className="Toggle">
            <a href="#">
              <CgMenuLeft />
            </a>
          </div>
          <ul className="Menu">
            <li className="Menu-elements">
              <NavLink to={"/"}>
                <a href="#">Home</a>
              </NavLink>
            </li>
            <li className="Menu-elements">
              <NavLink to={"/Properties"}>
                <a href="#">Properties</a>
              </NavLink>
            </li>
            <li className="Menu-elements">
              <NavLink to={"/PropertyDetails"}>
                <a href="#">Property Details</a>
              </NavLink>
            </li>
            <li className="Menu-elements">
              <NavLink to={"/ContactUs"}>
                <a href="#">Contact Us</a>
              </NavLink>
            </li>
            <li className="Menu-elements ">
              <div className="IconLink">
                <FaCalendar className="CalendarIcon" />
                <a href="#">Schedule a visit</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
