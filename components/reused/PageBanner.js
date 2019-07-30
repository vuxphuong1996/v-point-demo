const PageBanner = () => (
  <>
    {/* Page Banner */}
    <div
      className="page__banner"
      style={{backgroundImage: 'url("/public/assets/images/newsItem-banner.png")'}}
    >
      <div className="page__banner--link">
        <a href="/mypage/">
          <i className="fa fa-home" aria-hidden="true" />
          Trang chủ
        </a>
        <span>
          <i className="fa fa-angle-right" aria-hidden="true" />
        </span>
        <a href="/mypage/tin-tuc/v-point">Tin tức</a>
      </div>
      <ul className="tab_menu--child">
        <span className="js-line-active" />
        <li className="is--active">
          <a href="/mypage/tin-tuc/uu-dai">Ưu đãi</a>
        </li>
        <li className="is--active2">
          <a href="/mypage/tin-tuc/v-point">Tin tức Vpoint</a>
        </li>
      </ul>
      <div className="tab__item-mobile">
        <div className="tab-category">Ưu đãi</div>
        <ul className="select-tab">
          <li>
            <a href="/mypage/tin-tuc/uu-dai">Ưu đãi</a>
          </li>
          <li>
            <a href="/mypage/tin-tuc/v-point">Tin tức Vpoint</a>
          </li>
        </ul>
      </div>
    </div>
    {/* END */}

    <style jsx>
      {`
        .page__banner {
          height: 100px;
          display: flex;
          position: relative;
          overflow: hidden;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          padding: 0 8.345%;
        }

        .page__banner::after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          content: '';
          background: linear-gradient(135.4deg, #582a66 0%, #7d2265 51.72%, #ae1663 100%);
          opacity: 0.96;
        }

        .page__banner .page__banner--link {
          position: relative;
          margin-top: 14px;
          z-index: 10;
        }

        .fa-home::before {
          content: '\f015';
        }

        .page__banner .page__banner--link a {
          opacity: 0.75;
          color: #ffffff;
          font-family: 'Roboto', sans-serif;
          font-size: 12px;
          line-height: 14px;
          -webkit-transition: all 0.3s ease-in-out;
          -moz-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
        }

        .page__banner .page__banner--link span i {
          padding: 0 5px;
          opacity: 0.75;
          color: #ffffff;
        }

        .page__banner .page__banner--link a i {
          padding-right: 5px;
        }

        .fa {
          display: inline-block;
          font: normal normal normal 14px/1 FontAwesome;
          font-size: 14px;
          font-size: inherit;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .page__banner .tab_menu--child.is--visible {
          opacity: 1;
          -webkit-transition: all 0.2s ease-in-out;
          -moz-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
        }

        ol,
        ul,
        li {
          padding: 0px;
          list-style: none;
          margin: 0px;
          margin-top: 0px;
        }

        .js-line-active {
          display: block;
          position: absolute;
          bottom: 0;
          z-index: 10;
          border-bottom: 3px solid #fa7020;
          -webkit-transition: all 0.6s ease;
          -moz-transition: all 0.6s ease;
          transition: all 0.6s ease;
        }

        .page__banner .tab_menu--child li {
          position: relative;
          display: inline-block;
          padding: 0 0 15px 0;
          margin-right: 40px;
          width: auto;
          -webkit-transition: all 0.5s ease-in-out;
          -moz-transition: all 0.5s ease-in-out;
          transition: all 0.5s ease-in-out;
        }

        .page__banner .tab_menu--child li.is--active a,
        .page__banner .tab_menu--child li.is--active2 a {
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          font-size: 24px;
          line-height: 28px;
          opacity: 1;
        }

        .page__banner .tab_menu--child li a {
          opacity: 0.75;
          color: #ffffff;
          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.3px;
          -webkit-transition: all 0.25s ease;
          -moz-transition: all 0.25s ease;
          transition: all 0.25s ease;
        }

        .page__banner .tab_menu--child li:last-child {
          margin-right: 0;
        }

        .tab__item-mobile {
          position: relative;
          z-index: 101;
          display: none;
          letter-spacing: 1px;
        }

        .page__banner .tab_menu--child {
          position: relative;
          margin-top: 57.5px;
          bottom: 0;
          z-index: 10;
          right: 130px;
        }
      `}
    </style>
  </>
);

export default PageBanner;
