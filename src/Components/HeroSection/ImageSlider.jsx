import { useState } from "react";
const ImageSlider = (Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const SlideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${Props.Slides[currentIndex].url})`,
    backgroundColor: "grey",
  };
  const SliderStyles = {
    height: "100%",
    position: "relative",
  };
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "15px",
    color: "#fff",
    backgroundColor: "grey",
    padding: "15px",
    borderRadius: "50%",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "15px",
    color: "#fff",
    backgroundColor: "grey",
    padding: "15px",
    borderRadius: "50%",
    zIndex: 1,
    cursor: "pointer",
  };
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Props.Slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === Props.Slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };
  const slideStylesWidthBackground = {
    ...SlideStyles,
    backgroundImage: `url(${Props.Slides[currentIndex].url})`,
  };

  return (
    <div style={SliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {Props.Slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
