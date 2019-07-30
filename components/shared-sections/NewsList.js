import './NewsList.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';

// This component takes in a list of news and showing it
const NewsList = (props) => (
  <div className="newsWrapper">
    {props.news.map(({id, title, body, domain, brand}) => (
      <div key={id} className="newsItem">
        <div className="newsItem__imgBox">
          <img className="newsItem__img" src="https://via.placeholder.com/300x200" alt="News" />
          <p className="newsItem__tags">
            <span className="newsItem__domainTag">{domain}</span>
            <span className="newsItem__companyTag">{brand}</span>
          </p>
        </div>
        <div className="newsItem__content">
          <h3 className="newsItem__title">{title}</h3>
          <p className="newsItem__desc">{body}</p>
        </div>
        <Link href="/article">
          <a className="newsItem__more">
            Chi tiết
            <i className="fa fa-arrow-right" />
          </a>
        </Link>
      </div>
    ))}
  </div>
);

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};

NewsList.defaultProps = {
  news: [],
};

export default NewsList;
