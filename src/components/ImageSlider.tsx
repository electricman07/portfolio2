import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./ImageSlider.css"; // Create this file for custom styles

const ImageSlider = ({ images }: { images: string[] }) => {
  const settings = {
    className: "center",
    centerMode: false,
    centerPadding: "60px",
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    adaptiveHeight: true,
  };

  return (
    <div className="image-slider w-[80%] m-auto text-center">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="max-w-full h-auto m-auto"
              src={image}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
