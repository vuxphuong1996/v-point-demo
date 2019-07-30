import {cloneElement} from 'react';
import Slider from 'react-slick';
import SectionHeading from '../utils/SectionHeading';
import SectionHeadingWrapper from '../utils/SectionHeadingWrapper';
import ReadMore from '../utils/ReadMore';
import NewsItem from '../utils/NewsItem';
import {FavorableConsumer} from '../context/FavorableContext';
import './Favorable.scss';

const sliderSettings = {
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const FirstTenNews = (props) => (
  <FavorableConsumer>
    {({favors}) => cloneElement(props.children, {favors: favors.slice(0, 10)})}
  </FavorableConsumer>
);

const Favorable = ({favors}) => (
  <div className="favorableSection">
    <div className="commonSectionPadding">
      <SectionHeadingWrapper>
        <SectionHeading>ƯU ĐÃI CHỦ THẺ</SectionHeading>
        <ReadMore prefetch href="/favor" />
      </SectionHeadingWrapper>
    </div>
    <div className="commonSectionPaddingLeft">
      <div className="favorableSlider">
        <Slider {...sliderSettings}>
          {favors.map((item) => (
            <NewsItem key={item.id} type="favors" {...item} />
          ))}
        </Slider>
      </div>
    </div>
  </div>
);

const FavorableWrapper = () => (
  <FirstTenNews>
    <Favorable />
  </FirstTenNews>
);

export default FavorableWrapper;
