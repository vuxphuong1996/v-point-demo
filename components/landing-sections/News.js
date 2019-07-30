import Slider from 'react-slick';
import {cloneElement} from 'react';
import SectionHeading from '../utils/SectionHeading';
import ReadMore from '../utils/ReadMore';
import SectionHeadingWrapper from '../utils/SectionHeadingWrapper';
import {NewsConsumer} from '../context/NewsContext';
import './News.scss';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const FirstTenNews = ({children}) => (
  <NewsConsumer>{({news}) => cloneElement(children, {news: news.slice(0, 10)})}</NewsConsumer>
);

const News = ({news}) => (
  <div className="newsSection">
    <div className="commonSectionPadding">
      <SectionHeadingWrapper>
        <SectionHeading>TIN TỨC VPOINT</SectionHeading>
        <ReadMore href="/news" />
      </SectionHeadingWrapper>
    </div>
    <div className="commonSectionPaddingLeft">
      <div className="newsSection__sliderWrapper">
        <Slider {...sliderSettings}>
          {news.map(({id, title, body}) => (
            <div key={id} className="newsSectionItem">
              <div className="newsSectionItem__left">
                <img
                  className="newsItem__img"
                  src="https://via.placeholder.com/300x200"
                  alt="News"
                />
              </div>
              <div className="newsSectionItem__right">
                <h3 className="newsSectionItem__title">{title}</h3>
                <p className="newsSectionItem__desc">{body}</p>
                <button type="button" className="btnBase newsSectionItem__btn">
                  Chi tiết
                  <i className="fa fa-arrow-right" />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
);

const NewsWrapper = () => (
  <FirstTenNews>
    <News />
  </FirstTenNews>
);

export default NewsWrapper;

// <div className="newsSectionItem">
//   <div className="newsSectionItem__left">
//     <img
//       className="newsSectionItem__img"
//       src="/static/assets/images/newsSection-2.png"
//       alt="news"
//     />
//   </div>
//   <div className="newsSectionItem__right">
//     <h3 className="newsSectionItem__title">
//       Cơn bão mang tên Vpoint: Khuấy động giới trẻ Hải Phòng
//     </h3>
//     <p className="newsSectionItem__desc">
//       Hàng loạt các chương trình ưu đãi diễn ra từ ngày 28/9-14/10 mang đến trải nghiệm
//       hoàn toàn mới cho người dân xứ cảng về cách thức tiêu dùng thông minh, tiện lợi.
//     </p>
//     <button type="button" className="btnBase newsSectionItem__btn">
//       Chi tiết
//       <i className="fa fa-arrow-right" />
//     </button>
//   </div>
// </div>
