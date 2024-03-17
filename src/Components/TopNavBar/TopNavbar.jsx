import "./TopNavBar.css";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaMap } from "react-icons/fa";
import {
  PiFacebookLogoFill,
  PiInstagramLogo,
  PiLinkedinLogoFill,
  PiTwitterLogoFill,
} from "react-icons/pi";
const TopNavbar = () => {
  return (
    <div className="Top-Bar">
      <div className="Top-Bar-Left">
        <span className="ContactInformation">
          <BsEnvelopeFill /> info@company.com
        </span>
        <span className="ContactInformation">|</span>
        <span className="ContactInformation">
          <FaMap /> Sunny Isles Beach, FL 33160
        </span>
      </div>
      <div className="Top-Bar-Right">
        <ul className="Icons-elements">
          <li>
            <a href="#" className="SocialMediaIcon">
              <PiFacebookLogoFill />
            </a>
          </li>
          <li>
            <a href="#" className="SocialMediaIcon">
              <PiTwitterLogoFill />
            </a>
          </li>
          <li>
            <a href="#" className="SocialMediaIcon">
              <PiLinkedinLogoFill />
            </a>
          </li>
          <li>
            <a href="#" className="SocialMediaIcon">
              <PiInstagramLogo />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
