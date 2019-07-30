const NewsVpoint = () => (
  <>
    <div className="news__vpoint" id="news_vpoint">
      <div className="news__vpoint--focus">
        <div className="new__focus--left">
          <div
            className="new__focus--leftImg"
            style={{backgroundImage: 'url("/static/assets/images/newsSection-2.png")'}}
          >
            <a href="/mypage/tin-tuc/v-point/con-bao-mang-ten-vpoint-khuay-ong-gioi-tre-hai-phong-160">
              <img src="/static/assets/images/newsSection-2.png" />
            </a>
          </div>
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
          <div className="new__focus--left-shortContent">
            <a href="/mypage/tin-tuc/v-point/con-bao-mang-ten-vpoint-khuay-ong-gioi-tre-hai-phong-160">
              <h3>Cơn bão mang tên Vpoint: Khuấy động giới trẻ Hải Phòng</h3>
            </a>
            <div className="new__focus--left-linkShare">
              <a style={{cursor: 'pointer'}} onClick="">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a
                style={{cursor: 'pointer'}}
                className="js-tooltip js-copy"
                data-toggle="tooltip"
                data-placement="bottom"
                data-copy="https://v-point.vn/mypage/tin-tuc/v-point/con-bao-mang-ten-vpoint-khuay-ong-gioi-tre-hai-phong-160"
                title="Sao chép địa chỉ"
              >
                <i className="fa fa-link" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="new__focus--right">
          <div className="new__focus--rightItem">
            <div className="new__focus--rightContent">
              <div className="focus__right--shortContent">
                <a href="/mypage/tin-tuc/v-point/vpoint-tich-hop-dich-vu-ngan-hang-so-trong-ung-dung-tich-iem-a-nang-156">
                  Vpoint tích hợp dịch vụ ngân hàng số trong ứng dụng tích điểm đa năng
                </a>
              </div>
              <div className="focus__right--date">
                <i className="fa fa-clock-o" aria-hidden="true" /> 17.09.2018
              </div>
              <div className="focus__right--linkShare">
                <a
                  style={{cursor: 'pointer'}}
                  onClick="clickShareFace('https://v-point.vn/mypage/tin-tuc/v-point/vpoint-tich-hop-dich-vu-ngan-hang-so-trong-ung-dung-tich-iem-a-nang-156')"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a
                  style={{cursor: 'pointer'}}
                  className="js-tooltip js-copy"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-copy="https://v-point.vn/mypage/tin-tuc/v-point/vpoint-tich-hop-dich-vu-ngan-hang-so-trong-ung-dung-tich-iem-a-nang-156"
                  title="Sao chép địa chỉ"
                >
                  <i className="fa fa-link" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="new__focus--rightImg">
              <a
                href="/mypage/tin-tuc/v-point/vpoint-tich-hop-dich-vu-ngan-hang-so-trong-ung-dung-tich-iem-a-nang-156"
                style={{backgroundImage: 'url("/static/assets/images/NewsVpoint.jpg")'}}
              >
                <img src="/static/assets/images/NewsVpoint.jpg" />
              </a>
            </div>
          </div>
          <div className="new__focus--rightItem">
            <div className="new__focus--rightContent">
              <div className="focus__right--shortContent">
                <a href="/mypage/tin-tuc/v-point/10-trieu-cong-oan-vien-se-so-huu-mau-the-oan-vien-moi-tich-hop-vpoint-141">
                  10 triệu công đoàn viên sẽ sở hữu mẫu thẻ đoàn viên mới tích hợp Vpoint
                </a>
              </div>
              <div className="focus__right--date">
                <i className="fa fa-clock-o" aria-hidden="true" /> 30.07.2018
              </div>
              <div className="focus__right--linkShare">
                <a
                  style={{cursor: 'pointer'}}
                  onClick="clickShareFace('https://v-point.vn/mypage/tin-tuc/v-point/10-trieu-cong-oan-vien-se-so-huu-mau-the-oan-vien-moi-tich-hop-vpoint-141')"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a
                  style={{cursor: 'pointer'}}
                  className="js-tooltip js-copy"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-copy="https://v-point.vn/mypage/tin-tuc/v-point/10-trieu-cong-oan-vien-se-so-huu-mau-the-oan-vien-moi-tich-hop-vpoint-141"
                  title="Sao chép địa chỉ"
                >
                  <i className="fa fa-link" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="new__focus--rightImg">
              <a
                href="/mypage/tin-tuc/v-point/10-trieu-cong-oan-vien-se-so-huu-mau-the-oan-vien-moi-tich-hop-vpoint-141"
                style={{backgroundImage: 'url("/static/assets/images/NewsVpoint.jpg")'}}
              >
                <img src="/static/assets/images/NewsVpoint.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="loading" className="v-n-loading">
        <i className="fa fa-circle-o-notch fa-spin" />
      </div>

      {/* List */}
      <div className="news__vpoint--list" id="news_list">
        <div className="news__vpoint--item">
          <div className="news__vpoint--itemImg">
            <a
              href="/mypage/tin-tuc/v-point/the-tich-iem-vpoint---must-have-item-cua-dan-sanh-ieu-137"
              style={{backgroundImage: 'url("/static/assets/images/banner-3.png")'}}
            >
              <img src="/static/assets/images/banner-3.png" />
            </a>
            <div className="news__date">
              <div className="right">
                <h3>
                  <span>13</span>
                  <br />
                  <span>7</span>
                </h3>
                <h3>2018</h3>
              </div>
            </div>
          </div>
          <div className="news__vpoint--itemContent">
            <div className="vpoint__item--title">
              <a href="/mypage/tin-tuc/v-point/the-tich-iem-vpoint---must-have-item-cua-dan-sanh-ieu-137">
                Thẻ tích điểm Vpoint - "Must-have item" của dân sành điệu{' '}
              </a>
            </div>
            <div className="vpoint__item--shortContent">
              Thời gian gần đây, giới trẻ đang truyền tai nhau về việc sở hữu một loại thẻ tích điểm
              All-in-one đang gây bão trên thị trường. Từ khoá “Vpoint” xuất hiện trên hàng loạt các
              trang mạng xã hội và diễn đàn trẻ.{' '}
            </div>
            <div className="vpoint__item--plus">
              <a
                href="/mypage/tin-tuc/v-point/the-tich-iem-vpoint---must-have-item-cua-dan-sanh-ieu-137"
                className="btn__readMore"
              >
                Chi tiết <i className="fa fa-arrow-right" aria-hidden="true" />
              </a>
              <div className="vpoint__item--share">
                {' '}
                <a style={{cursor: 'pointer'}} onClick="">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a
                  id={137}
                  style={{cursor: 'pointer'}}
                  className="js-tooltip js-copy"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  onClick="copyLink('137','https://v-point.vn/mypage//tin-tuc/v-point/the-tich-iem-vpoint---must-have-item-cua-dan-sanh-ieu-137')"
                  title
                  data-original-title="Sao chép địa chỉ"
                >
                  <i className="fa fa-link" aria-hidden="true" />
                </a>{' '}
              </div>{' '}
            </div>{' '}
          </div>
        </div>
        <div className="news__vpoint--item">
          <div className="news__vpoint--itemImg">
            <a
              href="/mypage/tin-tuc/v-point/the-tich-iem-vpoint---must-have-item-cua-dan-sanh-ieu-137"
              style={{backgroundImage: 'url("/static/assets/images/banner-3.png")'}}
            >
              <img src="/static/assets/images/banner-3.png" />
            </a>
            <div className="news__date">
              <div className="right">
                <h3>
                  <span>13</span>
                  <br />
                  <span>7</span>
                </h3>
                <h3>2018</h3>
              </div>
            </div>
          </div>
          <div className="news__vpoint--itemContent">
            <div className="vpoint__item--title">
              <a href="/mypage/tin-tuc/v-point/the-tich-iem-vpoint---must-have-item-cua-dan-sanh-ieu-137">
                Thẻ tích điểm Vpoint - "Must-have item" của dân sành điệu{' '}
              </a>
            </div>
            <div className="vpoint__item--shortContent">
              Thời gian gần đây, giới trẻ đang truyền tai nhau về việc sở hữu một loại thẻ tích điểm
              All-in-one đang gây bão trên thị trường. Từ khoá “Vpoint” xuất hiện trên hàng loạt các
              trang mạng xã hội và diễn đàn trẻ.{' '}
            </div>
            <div className="vpoint__item--plus">
              <a
                href="/mypage/tin-tuc/v-point/the-tich-iem-vpoint---must-have-item-cua-dan-sanh-ieu-137"
                className="btn__readMore"
              >
                Chi tiết <i className="fa fa-arrow-right" aria-hidden="true" />
              </a>
              <div className="vpoint__item--share">
                {' '}
                <a style={{cursor: 'pointer'}} onClick="">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a
                  id={137}
                  style={{cursor: 'pointer'}}
                  className="js-tooltip js-copy"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  onClick="copyLink('137','https://v-point.vn/mypage//tin-tuc/v-point/the-tich-iem-vpoint---must-have-item-cua-dan-sanh-ieu-137')"
                  title
                  data-original-title="Sao chép địa chỉ"
                >
                  <i className="fa fa-link" aria-hidden="true" />
                </a>{' '}
              </div>{' '}
            </div>{' '}
          </div>
        </div>
        <div className="news__vpoint--item">
          <div className="news__vpoint--itemImg">
            <a
              href="/mypage/tin-tuc/v-point/the-tich-iem-vpoint---must-have-item-cua-dan-sanh-ieu-137"
              style={{backgroundImage: 'url("/static/assets/images/banner-3.png")'}}
            >
              <img src="/static/assets/images/banner-3.png" />
            </a>
            <div className="news__date">
              <div className="right">
                <h3>
                  <span>13</span>
                  <br />
                  <span>7</span>
                </h3>
                <h3>2018</h3>
              </div>
            </div>
          </div>
          <div className="news__vpoint--itemContent">
            <div className="vpoint__item--title">
              <a href="/mypage/tin-tuc/v-point/the-tich-iem-vpoint---must-have-item-cua-dan-sanh-ieu-137">
                Thẻ tích điểm Vpoint - "Must-have item" của dân sành điệu{' '}
              </a>
            </div>
            <div className="vpoint__item--shortContent">
              Thời gian gần đây, giới trẻ đang truyền tai nhau về việc sở hữu một loại thẻ tích điểm
              All-in-one đang gây bão trên thị trường. Từ khoá “Vpoint” xuất hiện trên hàng loạt các
              trang mạng xã hội và diễn đàn trẻ.{' '}
            </div>
            <div className="vpoint__item--plus">
              <a
                href="/mypage/tin-tuc/v-point/the-tich-iem-vpoint---must-have-item-cua-dan-sanh-ieu-137"
                className="btn__readMore"
              >
                Chi tiết <i className="fa fa-arrow-right" aria-hidden="true" />
              </a>
              <div className="vpoint__item--share">
                {' '}
                <a style={{cursor: 'pointer'}} onClick="">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a
                  id={137}
                  style={{cursor: 'pointer'}}
                  className="js-tooltip js-copy"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  onClick="copyLink('137','https://v-point.vn/mypage//tin-tuc/v-point/the-tich-iem-vpoint---must-have-item-cua-dan-sanh-ieu-137')"
                  title
                  data-original-title="Sao chép địa chỉ"
                >
                  <i className="fa fa-link" aria-hidden="true" />
                </a>{' '}
              </div>{' '}
            </div>{' '}
          </div>
        </div>
      </div>
      {/* Pagination    */}
      <ul className="vpoint__panigation" id="pNewsVpoint" />
    </div>
    <style jsx>{`
      .news__vpoint {
        width: 100%;
        padding: 30px 8.345%;
      }

      .news__vpoint--focus {
        width: 100%;
        display: -webkit-flex;
        display: -moz-flex;
        display: flex;
        flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        margin-bottom: 32px;
      }

      .news__vpoint--focus .new__focus--left {
        width: 50%;
        position: relative;
      }

      .new__focus--leftImg::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        background: linear-gradient(180deg, rgba(37, 61, 96, 0) 0%, rgba(12, 21, 33, 0.5) 100%);
      }

      .news__vpoint--item:nth-of-type(3n) {
        margin-right: 0;
      }

      .new__focus--leftImg {
        width: 100%;
        position: relative;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        overflow: hidden;
        height: 428px;
      }

      .new__focus--leftImg a {
        width: 100%;
        height: 100%;
        display: inline-block;
      }

      .new__focus--leftImg a img {
        display: none;
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

      .new__focus--left-shortContent {
        position: absolute;
        bottom: 25px;
        left: 30px;
        right: 30px;
        z-index: 10;
        color: #fff;
        display: -webkit-flex;
        display: -moz-flex;
        display: flex;
      }

      .new__focus--left-shortContent h3 {
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 1px;
        width: 85%;
        color: #fff;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }

      .new__focus--left-shortContent .new__focus--left-linkShare {
        width: 15%;
        text-align: right;
        margin-bottom: 8px;
        display: -webkit-flex;
        display: -moz-flex;
        display: flex;
        -webkit-align-items: flex-end;
        align-items: flex-end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .new__focus--left-shortContent .new__focus--left-linkShare a {
        padding-right: 20px;
      }

      .new__focus--left-shortContent .new__focus--left-linkShare a i {
        font-size: 19px;
        line-height: 19px;
        text-align: center;
      }

      .new__focus--left-shortContent .new__focus--left-linkShare a:last-child {
        padding-right: 0;
      }

      .news__vpoint--focus .new__focus--right {
        width: 50%;
        position: relative;
      }

      .new__focus--rightItem:first-child {
        border-top: 1px solid #e9ecf0;
      }

      .new__focus--rightItem {
        width: 100%;
        display: -webkit-flex;
        display: -moz-flex;
        display: flex;
        flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        border-bottom: 1px solid #e9ecf0;
      }

      .new__focus--rightContent {
        width: 50%;
        position: relative;
        padding: 32px 25px 30px 30px;
      }

      .new__focus--rightContent .focus__right--shortContent {
        height: 78px;
        overflow: hidden;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .new__focus--rightContent .focus__right--shortContent a {
        color: #4b3c50;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 1px;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .new__focus--rightContent .focus__right--date {
        color: #63676e;
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        line-height: 14px;
        margin: 12px 0 25px 0;
      }

      .new__focus--rightContent .focus__right--date i {
        padding-right: 5px;
        font-size: 11px;
      }

      .new__focus--rightContent .focus__right--linkShare a {
        margin-right: 13px;
      }

      .new__focus--rightContent .focus__right--linkShare a i {
        font-size: 19px;
        line-height: 19px;
        color: #4b3c50;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .new__focus--rightContent .focus__right--linkShare a:last-child {
        margin-right: 0;
      }

      .new__focus--rightImg {
        height: 213px;
        width: 50%;
        overflow: hidden;
      }

      .new__focus--rightImg a {
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

      .new__focus--rightImg a img {
        display: none;
      }

      .new__focus--rightItem {
        width: 100%;
        display: -webkit-flex;
        display: -moz-flex;
        display: flex;
        flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        border-bottom: 1px solid #e9ecf0;
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

      .news__date {
        position: absolute;
        display: -webkit-flex;
        display: -moz-flex;
        display: flex;
        width: 100%;
        top: 25px;
      }

      .news__vpoint--itemContent {
        width: 100%;
        padding: 25px 0 15px 0;
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

      .vpoint__item--plus {
        width: 100%;
        display: inline-block;
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

      .new__focus--rightItem:hover .new__focus--rightImg a {
        -webkit-transform: scale(1.1, 1.1);
        -moz-transform: scale(1.1, 1.1);
        transform: scale(1.1, 1.1);
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .new__focus--rightContent .focus__right--shortContent:hover a {
        color: #fa7020;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .new__focus--left-shortContent h3:hover {
        color: #fa7020;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
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
    `}</style>
  </>
);

export default NewsVpoint;
