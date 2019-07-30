import Slider from 'react-slick';
import ReadMore from '../utils/ReadMore';
import './Community.scss';

const swiperSettings = {
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Community = () => (
  <div className="communitySection">
    <div className="commonSectionPadding">
      <ReadMore prefetch href="/article" />
    </div>
    <div className="swiperList">
      <Slider {...swiperSettings}>
        <a className="swiperItem" href="#">
          <img className="swiperItem__img" src="/static/assets/images/swiper-1.png" alt="fav" />
        </a>
        <a className="swiperItem" href="#">
          <img className="swiperItem__img" src="/static/assets/images/swiper-1.png" alt="fav" />
        </a>
        <a className="swiperItem" href="#">
          <img className="swiperItem__img" src="/static/assets/images/swiper-1.png" alt="fav" />
        </a>
        <a className="swiperItem" href="#">
          <img className="swiperItem__img" src="/static/assets/images/swiper-1.png" alt="fav" />
        </a>
      </Slider>
    </div>
  </div>
);

export default Community;
