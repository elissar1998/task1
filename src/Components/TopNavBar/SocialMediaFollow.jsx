import {
  PiFacebookLogoFill,
  // PiInstagramLogo,
  // PiLinkedinLogoFill,
  // PiTwitterLogoFill,
} from "react-icons/pi";
const SocialMediaFollow = () => {
  return (
    <div>
      <a href="#">
        <PiFacebookLogoFill
          style={{
            background: "#ffc0c0",
            padding: "6px",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight: "40px",
          }}
        />
      </a>
    </div>
  );
};

export default SocialMediaFollow;
