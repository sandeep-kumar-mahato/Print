import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sample1 from "../assets/sample1.jpg";
import sample2 from "../assets/sample3.jpg";
import sample3 from "../assets/sample1.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={sample1} alt="Sample 1" className="w-full object-cover" />
      </div>
      <div>
        <img src={sample2} alt="Sample 2" className="w-full object-cover" />
      </div>
      <div>
        <img src={sample3} alt="Sample 3" className="w-full object-cover" />
      </div>
    </Slider>
  );
};

export default Carousel;
