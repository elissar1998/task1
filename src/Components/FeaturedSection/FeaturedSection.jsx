import "./FeaturedSection.css";
import featuredImg from "../../images/images/featured.jpg";
import img1 from "../../images/images/info-icon-01.png";
import img2 from "../../images/images/info-icon-02.png";
import img3 from "../../images/images/info-icon-03.png";
import img4 from "../../images/images/info-icon-04.png";
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
      <div className="container3">
        <div className="container">
          <div className="img-side">
            <img src={img1} alt="" />
          </div>
          <div className="texts-side">
            <h4>250 m2</h4>
            <p>Total Flat Space</p>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="img-side">
            <img src={img2} alt="" />
          </div>
          <div className="texts-side">
            <h4>250 m2</h4>
            <p>Total Flat Space</p>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="img-side">
            <img src={img3} alt="" />
          </div>
          <div className="texts-side">
            <h4>250 m2</h4>
            <p>Total Flat Space</p>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="img-side">
            <img src={img4} alt="" />
          </div>
          <div className="texts-side">
            <h4>250 m2</h4>
            <p>Total Flat Space</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
