import Link from 'next/link';
import './NewsItem.scss';

const FavTag = ({domain, brand}) => (
  <div className="favorTag">
    <div className="favorTag__domain">{domain}</div>
    <div className="favorTag__brand">{brand}</div>
  </div>
);

const NewsTag = ({createdAt}) => {
  const time = new Date(createdAt);
  return (
    <div className="newsTag">
      <div className="newsTag__left">
        <span className="newsTag__date">{time.getDate()}</span>
        <span className="newsTag__month">{time.getMonth()}</span>
      </div>
      <div className="newsTag__right">
        <span className="newsTag__year">{time.getFullYear()}</span>
      </div>
    </div>
  );
};

const NewsItem = ({title, body, type = 'news', domain = '', brand = '', createdAt}) => (
  <div className="newsItem">
    <div className="newsItem__imgBox">
      <img className="newsItem__img" src="https://via.placeholder.com/300x200" alt="News" />
      <div className="newsItem__tagWrapper">
        {type === 'news' ? (
          <NewsTag createdAt={createdAt} />
        ) : (
          <FavTag domain={domain} brand={brand} />
        )}
      </div>
    </div>
    <div className="newsItem__content">
      <h3 className="newsItem__title">{title}</h3>
      <p className="newsItem__desc">{body}</p>
      <Link href="/article">
        <a className="newsItem__more">
          Chi tiết
          <i className="fa fa-arrow-right" />
        </a>
      </Link>
    </div>
  </div>
);

export {NewsTag};
export default NewsItem;
