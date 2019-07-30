import './FooterTop.scss';

const FooterTop = () => (
  <div className="footerTop">
    <div className="footerTop__right">
      <a
        href="/mypage/dang-ky"
        style={{display: 'block'}}
        className="btn footerTop__btn"
        id="footerRegister"
      >
        <i className="fa fa-credit-card" aria-hidden="true" />
        Tham gia Vpoint
      </a>
      <p id="footerTop__downloadApp">Tải ứng dụng từ</p>
      <a
        target="_blank"
        href="https://play.google.com/store/apps/details?id=vn.com.vnpt.vinaphone.vnptsoftware.vpoint.mypage"
        className="footerTop__share-btn"
      >
        <img src="../../static/assets/images/ggplay.png" />
      </a>
      <a
        target="_blank"
        href="https://itunes.apple.com/us/app/vnpt-vpoint/id1244667572"
        className="footerTop__share-btn share-btn-last"
      >
        <img src="../../static/assets/images/app_store.png" />
      </a>
    </div>
  </div>
);

export default FooterTop;
