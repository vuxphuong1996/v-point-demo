import Slider from 'react-slick';
import './Banner.scss';

const bannerSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Banner = () => (
  <div className="banner">
    <Slider {...bannerSettings}>
      <div>
        <img src="/static/assets/images/banner.png" alt="banner-img-1" />
      </div>
      <div>
        <img src="/static/assets/images/banner-2.png" alt="banner-img-2" />
      </div>
      <div>
        <img src="/static/assets/images/banner-3.png" alt="banner-img-3" />
      </div>
    </Slider>
  </div>
);

export default Banner;
