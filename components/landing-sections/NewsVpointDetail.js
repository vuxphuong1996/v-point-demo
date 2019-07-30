const NewsVpointDetail = () => (
  <>
    {/* BANNER */}
    <div
      className="page__banner"
      style={{backgroundImage: 'url(/mypage/static/assets/images/home/background2.png)'}}
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
        <span>
          <i className="fa fa-angle-right" aria-hidden="true" />
        </span>
        <a>Tin tức Vpoint</a>
      </div>

      <div className="newDetail__vpoint--title">
        Vpoint mở rộng hệ sinh thái tới các doanh nghiệp miền Trung
      </div>

      <div className="newDetail__vpoint--date">
        <i className="fa fa-clock-o" aria-hidden="true" /> 28.05.2018
      </div>
    </div>
    {/* END BANNER */}

    {/* VPOINT DETAIL */}
    <div className="newDetail__vpoint clear-fix">
      <div className="newDetail__vpoint--content">
        <p>
          Ngày 25/05/2018, tại Đà Nẵng, Ban Khách hàng tổ chức doanh nghiệp - trực thuộc Tổng Công
          ty Dịch vụ Viễn thông&nbsp;đã tổ chức Hội thảo giới thiệu giải pháp chăm sóc khách hàng đa
          kênh tích hợp.&nbsp;Trong khuôn khổ Hội thảo,&nbsp;
          <span style={{color: '#e67e22'}}>Giải pháp thẻ tích điểm Vpoint</span> tới hơn 120 khách
          hàng là các tổ chức, doanh nghiệp tiêu biểu trên địa bàn các tỉnh Miền Trung.&nbsp;
        </p>
        <p>
          <img alt src="/static/assets/images/newsSection-2.png" style={{width: '100%'}} />
        </p>
        <blockquote>
          <p>
            <em>
              Hội thảo là cơ hội để Vpoint chia sẻ giải pháp và kết nối với các doanh nghiệp quan
              tâm tại địa bàn Đà Nẵng
            </em>
          </p>
        </blockquote>
        <p>
          Khác với các loại thẻ thông thường, Vpoint xây dựng cộng đồng các doanh nghiệp liên kết sử
          dụng thẻ tích điểm chung Vpoint. Theo đó, người dùng chỉ cần một thẻ duy nhất để hưởng ưu
          đãi tại tất cả các doanh nghiệp tham gia.&nbsp;
        </p>
        <p>
          Lợi ích đem lại cho doanh nghiệp là gia tăng lượng khách hàng từ các đơn vị thành viên,
          giảm thiểu chi phí chăm sóc khách hàng qua thẻ tích điểm, đồng thời giữ chân được khách
          hàng nhờ tính ưu việt của thẻ Vpoint. Hiện cộng đồng Vpoint đang có 9,7 triệu người dùng.
          Việc tham gia Vpoint sẽ mang lại cơ hội lớn cho doanh nghiệp với sức mạnh cộng hưởng từ
          cộng đồng liên minh.&nbsp;
        </p>
        <p>
          <img
            alt="Khách hàng quan tâm, trải nghiệm ứng dụng Vpoint trên điện thoại"
            src="/static/assets/images/newsSection-2.png"
            style={{width: '100%'}}
          />
        </p>
        <blockquote>
          <p>Khách hàng quan tâm, trải nghiệm ứng dụng Vpoint trên điện thoại</p>
        </blockquote>
        <p>
          Tại Hội thảo, một số doanh nghiệp bày tỏ sự quan tâm và mong muốn kết nối, tìm hiểu thêm
          về dự án Vpoint. Đây là tín hiệu tốt cho dự án trong việc đa dạng hoá hệ sinh thái Vpoint
          tại Đà Nẵng.
        </p>
        <ul className="newDetail__vpoint--social">
          <div
            className="fb-send"
            data-href="/mypage/tin-tuc/v-point/vpoint-mo-rong-he-sinh-thai-toi-cac-doanh-nghiep-mien-trung-124"
          ></div>
          <div
            className="fb-like"
            id="v-like"
            data-href="/mypage/tin-tuc/v-point/vpoint-mo-rong-he-sinh-thai-toi-cac-doanh-nghiep-mien-trung-124"
            data-layout="button_count"
            data-action="like"
            data-show-faces="false"
          ></div>
          <div
            className="fb-share-button"
            data-href="/mypage/tin-tuc/uu-dai/vpoint-mo-rong-he-sinh-thai-toi-cac-doanh-nghiep-mien-trung-124"
            data-layout="button_count"
            data-size="small"
            data-mobile-iframe="true"
          >
            <a
              className="fb-xfbml-parse-ignore"
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=/mypage/tin-tuc/uu-dai/vpoint-mo-rong-he-sinh-thai-toi-cac-doanh-nghiep-mien-trung-124"
            >
              Chia sẻ
            </a>
          </div>
        </ul>
      </div>

      {/* advertisment */}
      <div className="newDetail__vpoint--advertisement"></div>
      {/* end advertisment */}

      {/* involve */}
      <div className="newDetail__vpoint--involve">
        <h3 className="vpoint__involve--title">Tin tức liên quan</h3>
        <div className="news__vpoint--list">
          <div className="news__vpoint--item">
            <div className="news__vpoint--itemImg">
              <a
                href="/mypage/tin-tuc/v-point/con-bao-mang-ten-vpoint-khuay-ong-gioi-tre-hai-phong-160"
                style={{backgroundImage: 'url("/static/assets/images/newsSection-2.png")'}}
              >
                <img src="/static/assets/images/newsSection-2.png" />
              </a>
              <div className="news__date">
                <div className="right">
                  <h3>
                    <span>26</span>
                    <br />
                    <span>9</span>
                  </h3>
                  <h3>2018</h3>
                </div>
              </div>
            </div>
            <div className="news__vpoint--itemContent">
              <div className="vpoint__item--title">
                <a href="/mypage/tin-tuc/v-point/con-bao-mang-ten-vpoint-khuay-ong-gioi-tre-hai-phong-160">
                  Cơn bão mang tên Vpoint: Khuấy động giới trẻ Hải Phòng
                </a>
              </div>
              <div className="vpoint__item--shortContent">
                Hàng loạt các chương trình ưu đãi diễn ra từ ngày 28/9-14/10 mang đến trải nghiệm
                hoàn toàn mới cho người dân xứ cảng về cách thức tiêu dùng thông minh, tiện lợi.
              </div>
              <div className="vpoint__item--plus">
                <a
                  href="/mypage/tin-tuc/v-point/con-bao-mang-ten-vpoint-khuay-ong-gioi-tre-hai-phong-160"
                  className="btn__readMore"
                >
                  Chi tiết <i className="fa fa-arrow-right" aria-hidden="true" />
                </a>
                <div className="vpoint__item--share">
                  <a style={{cursor: 'pointer'}} onclick="">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a
                    style={{cursor: 'pointer'}}
                    id={160}
                    onclick=""
                    className="js-tooltip js-copy"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    data-copy="https://v-point.vn/mypage/tin-tuc/v-point/-"
                    title="Sao chép địa chỉ"
                  >
                    <i className="fa fa-link" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="news__vpoint--item">
            <div className="news__vpoint--itemImg">
              <a
                href="/mypage/tin-tuc/v-point/vpoint-tich-hop-dich-vu-ngan-hang-so-trong-ung-dung-tich-iem-a-nang-156"
                style={{backgroundImage: 'url("/static/assets/images/newsSection-2.png")'}}
              >
                <img src="/static/assets/images/newsSection-2.png" />
              </a>
              <div className="news__date">
                <div className="right">
                  <h3>
                    <span>17</span>
                    <br />
                    <span>9</span>
                  </h3>
                  <h3>2018</h3>
                </div>
              </div>
            </div>
            <div className="news__vpoint--itemContent">
              <div className="vpoint__item--title">
                <a href="/mypage/tin-tuc/v-point/vpoint-tich-hop-dich-vu-ngan-hang-so-trong-ung-dung-tich-iem-a-nang-156">
                  Vpoint tích hợp dịch vụ ngân hàng số trong ứng dụng tích điểm đa năng
                </a>
              </div>
              <div className="vpoint__item--shortContent">
                Hàng triệu người dùng sẽ được hưởng thêm lợi ích khi ứng dụng tích điểm đa năng
                Vpoint tích hợp thêm dịch vụ ngân hàng số của VP Bank
              </div>
              <div className="vpoint__item--plus">
                <a
                  href="/mypage/tin-tuc/v-point/vpoint-tich-hop-dich-vu-ngan-hang-so-trong-ung-dung-tich-iem-a-nang-156"
                  className="btn__readMore"
                >
                  Chi tiết <i className="fa fa-arrow-right" aria-hidden="true" />
                </a>
                <div className="vpoint__item--share">
                  <a style={{cursor: 'pointer'}} onclick="">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a
                    style={{cursor: 'pointer'}}
                    id={156}
                    onclick=""
                    className="js-tooltip js-copy"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    data-copy="https://v-point.vn/mypage/tin-tuc/v-point/-"
                    title="Sao chép địa chỉ"
                  >
                    <i className="fa fa-link" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            		<div className="news__vpoint--item">
            <div className="news__vpoint--itemImg">
              <a
                href="/mypage/tin-tuc/v-point/10-trieu-cong-oan-vien-se-so-huu-mau-the-oan-vien-moi-tich-hop-vpoint-141"
                style={{backgroundImage: 'url("/static/assets/images/newsSection-2.png")'}}
              >
                <img src="" />
              </a>
              <div className="news__date">
                <div className="right">
                  <h3>
                    <span>30</span>
                    <br />
                    <span>7</span>
                  </h3>
                  <h3>2018</h3>
                </div>
              </div>
            </div>
            <div className="news__vpoint--itemContent">
              <div className="vpoint__item--title">
                <a href="/mypage/tin-tuc/v-point/10-trieu-cong-oan-vien-se-so-huu-mau-the-oan-vien-moi-tich-hop-vpoint-141">
                  10 triệu công đoàn viên sẽ sở hữu mẫu thẻ đoàn viên mới tích hợp Vpoint
                </a>
              </div>
              <div className="vpoint__item--shortContent">
                Vừa qua, Tổng Liên đoàn đã ra mắt mẫu thẻ đoàn viên mới. Thẻ được tích hợp với hệ
                sinh thái Vpoint với 2.000 điểm ưu đãi trên toàn quốc.
              </div>
              <div className="vpoint__item--plus">
                <a
                  href="/mypage/tin-tuc/v-point/10-trieu-cong-oan-vien-se-so-huu-mau-the-oan-vien-moi-tich-hop-vpoint-141"
                  className="btn__readMore"
                >
                  Chi tiết <i className="fa fa-arrow-right" aria-hidden="true" />
                </a>
                <div className="vpoint__item--share">
                  <a style={{cursor: 'pointer'}} onclick="">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a
                    style={{cursor: 'pointer'}}
                    id={141}
                    onclick=""
                    className="js-tooltip js-copy"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    data-copy="https://v-point.vn/mypage/tin-tuc/v-point/-"
                    title="Sao chép địa chỉ"
                  >
                    <i className="fa fa-link" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end involve */}
    </div>
    {/* END NEWS VPOINT DETAIL */}

    <style jsx>{`
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

      .page__banner {
        position: relative;
        overflow: hidden;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        padding: 0 8.345%;
      }

      .page__banner .page__banner--link {
        position: relative;
        margin-top: 14px;
        z-index: 10;
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

      .page__banner .page__banner--link a i {
        padding-right: 5px;
      }

      .page__banner .page__banner--link a:hover {
        opacity: 1;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        text-decoration: none;
      }

      .newDetail__vpoint--title {
        position: relative;
        z-index: 10;
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 300;
        line-height: 30px;
        width: calc((100% / 10) * 5);
        margin-top: 38px;
        margin-bottom: 10px;
        letter-spacing: 0.5px;
      }

      .newDetail__vpoint--date {
        position: relative;
        z-index: 10;
        opacity: 0.75;
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 45px;
        letter-spacing: 0.3px;
      }

      .newDetail__vpoint--date span {
        padding-right: 30px;
      }

      .newDetail__vpoint--date span i {
        font-size: 10px;
        padding-right: 5px;
      }

      .newDetail__vpoint--date span:last-child {
        padding-right: 0;
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

      .newDetail__vpoint {
        position: relative;
        width: 100%;
        display: inline-block;
        padding: 30px 8.345% 10px 8.345%;
        background-color: #f5f9fc;
      }

      .page__banner .page__banner--link span i {
        padding: 0 5px;
        opacity: 0.75;
        color: #ffffff;
      }






            .newDetail__vpoint {
                position: relative;
                width: 100%;
                display: inline-block;
                padding: 30px 8.345% 10px 8.345%;
                background-color: #f5f9fc;
            }

      .newDetail__vpoint--content {
        float: left;
        width: calc(((100% / 10) * 8) - 30px);
        margin-right: 30px;
        padding: 35px 30px 30px;
        background-color: #fff;
        position: relative;
        margin-top: -60px;
        z-index: 10;
        color: #4f5358;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 26px;
        text-align: justify;
        letter-spacing: 0.3px;
      }

      .newDetail__vpoint--content p {
        margin: 0 0 10px;
      }

      .newDetail__vpoint--content img {
        margin: 0;
      }

      blockquote::before,
      blockquote::after {
        content: '';
        content: none;
      }

      blockquote {
        padding: 10px 20px;
        margin: 0 0 20px;
        border-left: 5px solid #eee;
      }

      blockquote,
      q {
        quotes: none;
      }

      blockquote ol:last-child,
      blockquote p:last-child,
      blockquote ul:last-child {
        margin-bottom: 0;
      }

      .newDetail__vpoint--content ul,
      .newDetail__vpoint--content ul li {
        list-style-type: disc;
      }

      .newDetail__vpoint--content ul,
      .newDetail__vpoint--content ol,
      .newDetail__vpoint--content dl {
        padding: 0 50px;
      }

      .newDetail__vpoint--social {
        width: 100%;
        text-align: right;
        margin-top: 15px;
      }

      .fb_iframe_widget {
        display: inline-block;
        position: relative;
      }

      .fb_iframe_widget span {
        display: inline-block;
        position: relative;
        text-align: justify;
      }

      .fb_iframe_widget iframe {
        position: absolute;
      }

      .newDetail__vpoint--advertisement {
        float: left;
        width: calc((100% / 10) * 2);
      }

      .newDetail__vpoint--involve {
        width: 100%;
        float: left;
      }

      .vpoint__involve--title {
        color: #4b3c50;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        margin: 40px 0 30px;
      }

      .news__vpoint--list {
        width: 100%;
        display: -webkit-flex;
        display: -moz-flex;
        display: flex;
        flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
      }

      .news__vpoint--item:nth-of-type(3n + 1) {
        clear: both;
      }

      .news__vpoint--item {
        width: calc((100% - 60px) / 3);
        margin-right: 30px;
        margin-bottom: 30px;
      }

      .news__vpoint--itemImg {
        width: 100%;
        position: relative;
        height: 270px;
        overflow: hidden;
      }

      .news__vpoint--itemImg a {
        width: 100%;
        height: 100%;
        display: inline-block;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .news__vpoint--itemImg a img {
        display: none;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      .news__vpoint--itemContent {
        width: 100%;
        padding: 25px 0 15px 0;
      }

      .vpoint__item--shortContent {
        height: 69px;
        overflow: hidden;
        opacity: 0.85;
        color: #49505a;
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
        line-height: 23px;
        margin: 5px 0 10px 0;
      }

      .vpoint__item--title {
        height: 52px;
        overflow: hidden;
      }

      .vpoint__item--title a {
        color: #4b3c50;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 0.5px;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        text-decoration: none;
      }

      .vpoint__item--plus .btn__readMore::before {
        position: absolute;
        content: '';
        height: 1px;
        width: 0;
        background-color: #4b3c50;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transition: width 1s;
        -moz-transition: width 1s;
        transition: width 1s;
        transition-timing-function: ease;
        -webkit-transition-timing-function: ease;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }

      .vpoint__item--plus .btn__readMore {
        position: relative;
        color: #4b3c50;
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
        font-weight: 700;
        line-height: 15px;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }

      .vpoint__item--plus .btn__readMore:hover::before {
        width: 15px;
      }

      .news__vpoint--item:nth-of-type(3n) {
        margin-right: 0;
      }

      .vpoint__item--plus .vpoint__item--share {
        float: right;
        color: #4b3c50;
        font-size: 16px;
        line-height: 16px;
      }

      .vpoint__item--plus .vpoint__item--share a {
        margin-right: 13px;
      }

      .vpoint__item--plus .vpoint__item--share a i {
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .vpoint__item--plus .vpoint__item--share a:last-child {
        margin-right: 0;
      }

      .vpoint__item--plus .btn__readMore:hover {
        padding-left: 20px;
        color: #fa7020;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }

      .vpoint__item--plus .vpoint__item--share a:hover i {
        -webkit-transform: scale(1.2, 1.2);
        -moz-transform: scale(1.2, 1.2);
        transform: scale(1.2, 1.2);
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .news__vpoint--item:hover .news__vpoint--itemImg a {
        -webkit-transform: scale(1.1, 1.1);
        -moz-transform: scale(1.1, 1.1);
        transform: scale(1.1, 1.1);
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .vpoint__item--title:hover a {
        color: #fa7020;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }

      .news__date {
        position: absolute;
        display: -webkit-flex;
        display: -moz-flex;
        display: flex;
        width: 100%;
        top: 25px;
      }

      .news__date .right {
        width: 65px;
        height: 65px;
        background-color: #fff;
        margin-left: 25px;
        display: -webkit-flex;
        display: -moz-flex;
        display: flex;
        -webkit-align-items: center;
        -moz-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        -moz-justify-content: center;
        justify-content: center;
      }

      .news__date .right h3:nth-of-type(1)::after {
        position: absolute;
        content: '';
        width: 1px;
        height: 40px;
        right: -2px;
        top: 0;
        background-color: #dfe3e9;
      }

      .news__date .right h3:nth-of-type(1) {
        flex: 6;
        position: relative;
      }

      .news__date .right h3 {
        color: #4b3c50 s;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        left: 5px;
      }

      .news__date .right h3:nth-of-type(1) span:first-child {
        border-bottom: 1px solid #dfe3e9;
      }

      .news__date .right h3:nth-of-type(1)::after {
        position: absolute;
        content: '';
        width: 1px;
        height: 40px;
        right: -2px;
        top: 0;
        background-color: #dfe3e9;
      }

      .news__date .right h3:nth-of-type(2) {
        flex: 6;
        transform: rotate(-270deg);
      }

      `}</style>
    </>
);

export default NewsVpointDetail;
