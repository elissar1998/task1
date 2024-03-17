import "./FeaturedSection.css";
import featuredImg from "../../images/images/featured.jpg";
const FeaturedSection = () => {
  //   handleClick = (handle) => {
  //     const element = document.getElementById(handle);
  //   };
  return (
    <div className="FeaturedContainer">
      <div className="container_img">
        <img src={featuredImg} alt="featured" />
      </div>
      <div className="container2">
        <span>|FEATURED</span>
        <h1>Best Appartment & Sea View</h1>
        <ul>
          <li>Best useful links ?</li>
          <hr />
          {/* <li>
            Get the best villa website template in HTML CSS and Bootstrap for
            your business. TemplateMo provides you the best free CSS templates
            in the world. Please tell your friends about it
          </li> */}
          <li>How does this work ?</li>
          <hr />
          {/* <li>
            Dolor almesit amet, consectetur adipiscing elit, sed doesn&apos;t
            eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li> */}
          <li>Why is Villa Agency the best ?</li>
          {/* <li>
            Dolor almesit amet, consectetur adipiscing elit, sed doesn&apos;t
            eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li> */}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default FeaturedSection;
