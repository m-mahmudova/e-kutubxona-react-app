function Slider({ slides, activeSlide, setActiveSlide }) {
  return (
    <div className="slider">
      <img
        src={slides[activeSlide]}
        className="slide active"
        alt="slider"
      />

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={activeSlide === index ? "active-dot" : ""}
            onClick={() => setActiveSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
