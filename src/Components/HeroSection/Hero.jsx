import ImageSlider from "./ImageSlider.jsx";
import img1 from "../../images/images/banner-01.jpg";
import img2 from "../../images/images/banner-02.jpg";
import img3 from "../../images/images/banner-03.jpg";
const Slides = [
  {
    id: 1,
    url: img1,
    loc: "Toronto,Canada",
    text: "HURRy! GET THE BEST VILLA FOR YOU",
  },
  {
    id: 2,
    url: img2,
    loc: "Melbourne,Australia",
    text: "BE QUICK! GET THE BEST VILLA IN TOWN",
  },
  {
    id: 3,
    url: img3,
    loc: "Toronto,Canada",
    text: "ACT NOW! GET THE HEIGHT LEVEL PENTHOUSE",
  },
];

const containerStyle = {
  width: "98%",
  height: "700px",
  margin: "0 auto",
};
function Hero() {
  return (
    <div style={containerStyle}>
      <ImageSlider Slides={Slides} />
    </div>
  );
}

export default Hero;
