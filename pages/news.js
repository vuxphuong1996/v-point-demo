import {Component, cloneElement} from 'react';
import Pagination from '../components/utils/Pagination';
import Layout from '../components/layout/Layout';
import Navigation from '../components/utils/NavigationBar';
import NewsItem from '../components/utils/NewsItem';
import NewsListWrapper from '../components/utils/NewsListWrapper';
import SubNavigation from '../components/utils/SubNavigation';
import {NewsConsumer} from '../components/context/NewsContext';
import './news.scss';

const customLabels = {
  first: '<<',
  last: '>>',
  previous: '<',
  next: '>',
};

const SecondSpecialNews = ({title, createdAt}) => (
  <div className="secondSpecialNews">
    <div className="secondSpecialNews__left">
      <div className="secondSpecialNews__title">{title}</div>
      <div className="secondSpecialNews__date">{createdAt}</div>
      <div className="secondSpecialNews__functional">
        <a className="secondSpecialNews__fb-link" href="#">
          <i className="fab fa-facebook-f" />
        </a>
        <a className="secondSpecialNews__copy-link" href="#">
          <i className="fas fa-link" />
        </a>
      </div>
    </div>
    <div className="secondSpecialNews__right">
      <img
        className="secondSpecialNews__img"
        src="https://via.placeholder.com/300x200"
        alt="News"
      />
    </div>
  </div>
);

const ClassifyNews = (props) => (
  <NewsConsumer>
    {({news}) =>
      cloneElement(props.children, {
        firstThreeNews: news.slice(0, 3),
        excludedNews: news.slice(3),
      })
    }
  </NewsConsumer>
);

class News extends Component {
  state = {
    pageOfItems: [],
  };

  onChangePage = (pageOfItems) => {
    this.setState({pageOfItems});
  };

  render() {
    const {firstThreeNews, excludedNews} = this.props;
    return (
      <Layout>
        <Navigation>
          <SubNavigation />
        </Navigation>
        <NewsListWrapper>
          <div className="specialNews">
            <div className="specialNews__left">
              <div className="firstSpecialNews">
                <img
                  className="newsItem__img"
                  src="https://via.placeholder.com/300x200"
                  alt="News"
                />
                <h3 className="firstSpecialNews__title">{firstThreeNews[0].title}</h3>
              </div>
            </div>
            <div className="specialNews__right">
              <div className="specialNews__right-item">
                <SecondSpecialNews {...firstThreeNews[1]} />
              </div>
              <div className="specialNews__right-item">
                <SecondSpecialNews {...firstThreeNews[2]} />
              </div>
            </div>
          </div>
          {this.state.pageOfItems.map((item) => (
            <NewsItem key={item.id} {...item} />
          ))}
        </NewsListWrapper>

        <Pagination
          pageSize={6}
          maxPages={5}
          items={excludedNews}
          onChangePage={this.onChangePage}
          disableDefaultStyles
          labels={customLabels}
        />
      </Layout>
    );
  }
}

const NewsWrapper = () => (
  <ClassifyNews>
    <News />
  </ClassifyNews>
);

export default NewsWrapper;
