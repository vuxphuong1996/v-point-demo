import './ReadMore.scss';
import Link from 'next/link';

const ReadMore = ({href}) => (
  <div className="readmore">
    <Link href={href}>
      <a>
        Xem thêm
        <i className="fa fa-plus-square" />
      </a>
    </Link>
  </div>
);

export default ReadMore;
