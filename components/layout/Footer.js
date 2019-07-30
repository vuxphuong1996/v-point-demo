import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__one">
        <div className="footer__logo-box">
          <a href="#">
            <img className="footer__logo-img" src="/static/assets/images/logo.png" alt="logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="https://www.facebook.com/VpointRewards/">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="https://v-point.vn">
              <i className="fab fa-internet-explorer" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCDBYwfQwyqU2mJvPwaERQdQ">
              <i className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__two">
        <ul>
          <li id="footerPointToCard">
            <a href="/mypage/my-vpoint/doi-the-cao">Đổi thẻ cào</a>
          </li>
          <li>
            <a href="/mypage/tin-tuc/uu-dai">Tin tức</a>
          </li>
          <li>
            <a href="/mypage/doi-tac">Các đối tác</a>
          </li>
          <li>
            <a href="http://vinaphoneplus.com.vn">VNP Plus</a>
          </li>
        </ul>
      </div>
      <div className="footer__three">
        <ul>
          <li>
            <a href="/mypage/dieu-khoan-su-dung">Điều khoản sử dụng</a>
          </li>
          <li>
            <a href="/mypage/lien-he">Liên hệ</a>
          </li>
          <li>
            <a href="/mypage/faq">FAQs</a>
          </li>
        </ul>
      </div>
      <div className="footer__four">
        <h3>
          Copyright © 2017 <br />
          VNPT Vinaphone.
        </h3>
        <h3>Sản phẩm của tập đoàn VNPT</h3>
      </div>
    </footer>
  );
};

export default Footer;
