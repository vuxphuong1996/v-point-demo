import './NavigationBar.scss';

const show = false;

const NewsDetail = () => (
  <>
    <span>
      <i className="fa fa-angle-right" aria-hidden="true" />
    </span>
    <a className="navigation__address">Tin tức ưu đãi</a>
  </>
);

const NavigationBar = (props) => (
  <div className="navigation commonSectionPadding">
    <div className="navigation__path">
      <a className="navigation__address">
        <i className="fa fa-home" />
        Trang chủ
      </a>
      <i className="fa fa-angle-right" />
      <a className="navigation__address">Tin tức</a>
      {show ? NewsDetail() : ''}
    </div>
    {props.children}
  </div>
);

export default NavigationBar;
