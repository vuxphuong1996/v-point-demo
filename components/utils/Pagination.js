import JwPagination from 'jw-react-pagination';
import './Pagination.scss';

const Pag = (props) => (
  <div className="paginationWrapper">
    <JwPagination {...props} />
  </div>
);

export default Pag;
