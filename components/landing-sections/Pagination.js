const Pagination = () => (
  <>
    <ul className="vpoint__panigation" id="pNewPreferntial">
      <li className="vpoint__panigation--number">
        <a>Trang 1/22</a>
      </li>
      <li className="vpoint__panigation--item disabled">
        <a href="#" className="page-link">
          <i className="fa fa-angle-double-left" aria-hidden="true" />
        </a>
      </li>
      <li className="vpoint__panigation--item disabled">
        <a href="#" className="page-link">
          <i className="fa fa-angle-left" aria-hidden="true" />
        </a>
      </li>
      <li className="vpoint__panigation--item active">
        <a href="#" className="page-link">
          1
        </a>
      </li>
      <li className="vpoint__panigation--item">
        <a href="#" className="page-link">
          2
        </a>
      </li>
      <li className="vpoint__panigation--item">
        <a href="#" className="page-link">
          3
        </a>
      </li>
      <li className="vpoint__panigation--item">
        <a href="#" className="page-link">
          4
        </a>
      </li>
      <li className="vpoint__panigation--item">
        <a href="#" className="page-link">
          5
        </a>
      </li>
      <li className="vpoint__panigation--item">
        <a href="#" className="page-link">
          <i className="fa fa-angle-right" aria-hidden="true" />
        </a>
      </li>
      <li className="vpoint__panigation--item">
        <a href="#" className="page-link">
          <i className="fa fa-angle-double-right" aria-hidden="true" />
        </a>
      </li>
    </ul>

    <style jsx>
      {`
        .vpoint__panigation {
          width: 100%;
          text-align: center;
        }

        .vpoint__panigation li.vpoint__panigation--number {
          opacity: 0.65;
          color: #000000;
          font-family: 'Roboto', sans-serif;
          font-size: 11px;
          line-height: 15px;
          text-align: justify;
        }

        .vpoint__panigation li {
          display: inline-block;
          margin-right: 5px;
        }

        .vpoint__panigation--number {
          pointer-events: none;
        }

        .vpoint__panigation li.vpoint__panigation--item {
          width: 26px;
          height: 26px;
        }

        .vpoint__panigation li.vpoint__panigation--item.active {
          background-color: #ae1663;
        }

        .vpoint__panigation li.vpoint__panigation--item a {
          color: #4b3c50;
          font-family: 'Roboto', sans-serif;
          font-size: 12px;
          line-height: 15px;
          text-align: center;
        }

        .vpoint__panigation li.vpoint__panigation--item a i {
          color: #ebebeb;
        }
      `}
    </style>
  </>
);

export default Pagination;
