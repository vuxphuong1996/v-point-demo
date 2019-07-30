const NewsFavo = () => (
  <>
    <div className="news__search">
      <form className="form-inline frm_search">
        <div className="form-group">
          <input
            type="text"
            id="searchText"
            className="form-control frm__input-search"
            placeholder="Nhập tìm kiếm ở đây..."
          />
        </div>
        <span>|</span>
        <button type="button" id="btnSearch" className="btn-search">
          <i className="fa fa-search" aria-hidden="true" />
        </button>
        <div id="searchLoading" style={{margin: '10px 0 0 5px', display: 'none'}}>
          <i className="fa fa-circle-o-notch fa-spin" />
        </div>
      </form>
      <form className="frm__quickSearch">
        <div className="form-group frm__quickSearch--item">
          <label className="control-label quickSearch__label">Thương hiệu</label>
          <div className="quickSearch__select">
            <select className="form-control select-box" id="selectMerchant">
              <option value={0}>Chọn thương hiệu</option>
              <option value={36}>123 GYM</option>
              <option value={52}>Ẩm thực Hoàng Yến</option>
              <option value={38}>Barishidi Paris</option>
              <option value={53}>Bệnh viện máy tính Sơn Đạt</option>
              <option value={25}>Bệnh viện mắt Hà Nội 2</option>
              <option value={42}>Đồ chơi KatKids</option>
              <option value={15}>EFORA</option>
              <option value={49}>Giày BQ</option>
              <option value={41}>Giày dép Top&amp;Top</option>
              <option value={29}>GrusZ</option>
              <option value={34}>Hoavy Spa</option>
              <option value={22}>JCB</option>
              <option value={27}>KANEBO</option>
              <option value={16}>May10</option>
              <option value={24}>MINISTOP Việt Nam</option>
              <option value={58}>Ngân hàng Thương mại Cổ phần Hàng Hải Việt Nam</option>
              <option value={56}>Nhà hàng Bia Già Bản</option>
              <option value={57}>Nhà hàng đặc sản Chim To</option>
              <option value={43}>Nhà hàng Gold Fish</option>
              <option value={55}>Nhà hàng Lão Ngư</option>
              <option value={45}>Nhà hàng Lẩu Hội Quán</option>
              <option value={44}>Nhà hàng Phương Nam</option>
              <option value={18}>Nha khoa Phương Anh</option>
              <option value={28}>Ninh Khương</option>
              <option value={35}>Nướng Zozo</option>
              <option value={19}>Onecard</option>
              <option value={23}>Open99</option>
              <option value={30}>PTI</option>
              <option value={48}>Shi Beauty &amp; Spa</option>
              <option value={40}>Sứ Minh Châu</option>
              <option value={26}>TH True Mart</option>
              <option value={54}>Thực phẩm sạch D&amp;D Mart</option>
              <option value={59}>TicketGo</option>
              <option value={39}>Túi da KAT</option>
              <option value={9}>Vietinbank</option>
              <option value={12}>VinaSun</option>
              <option value={11}>VNTRIP.VN</option>
              <option value={14}>Vpoint</option>
            </select>
          </div>
        </div>
        <div className="form-group frm__quickSearch--item">
          <label className="control-label quickSearch__label">Lĩnh vực</label>
          <div className="quickSearch__select">
            <select className="form-control select-box" id="selectCategory">
              <option value={0}>Chọn lĩnh vực</option>
              <option value={2}>Ẩm thực</option>
              <option value={8}>Du lịch - Khách sạn</option>
              <option value={10}>Khác</option>
              <option value={3}>Mua sắm</option>
              <option value={9}>Tài chính</option>
              <option value={1}>Thời trang</option>
              <option value={5}>Thương mại điện tử</option>
              <option value={7}>Vận tải</option>
              <option value={6}>Viễn thông</option>
              <option value={4}>Y tế - Giáo dục</option>
            </select>
          </div>
        </div>
      </form>
    </div>
    {/* News Favorable */}

    <div className="newsWrapper">
      <div className="newsItem">
        <div className="newsItem__imgBox">
          <img
            className="newsItem__img"
            src="/static/assets/images/newsItem.png"
            alt="News Image"
          />
          <p className="newsItem__tags">
            <span className="newsItem__domainTag">Tài chính</span>
            <span className="newsItem__companyTag">
              Ngân hàng Thương mại Cổ phần Hàng Hải Việt Nam
            </span>
          </p>
        </div>
        <div className="newsItem__content">
          <h3 className="newsItem__title">
            ƯU ĐÃI NHẬN TỚI 10 TRIỆU ĐỒNG KHI ĐĂNG KÍ LÀM THẺ MSB - VPOINT{' '}
          </h3>
          <p className="newsItem__desc">
            Nắm ngay cơ hội mua sắm siêu lời với duy nhất một chiếc thẻ có thể chi tiêu{' '}
          </p>
        </div>
        <a className="newsItem__more">
          Chi tiết
          <i className="fa fa-arrow-right" />
        </a>
      </div>

      <div className="newsItem">
        <div className="newsItem__imgBox">
          <img
            className="newsItem__img"
            src="/static/assets/images/newsItem-2.png"
            alt="News Image"
          />
          <p className="newsItem__tags">
            <span className="newsItem__domainTag">Ẩm thực</span>
            <span className="newsItem__companyTag">MINISTOP Việt Nam</span>
          </p>
        </div>
        <div className="newsItem__content">
          <h3 className="newsItem__title">
            ƯU ĐÃI NHẬN TỚI 10 TRIỆU ĐỒNG KHI ĐĂNG KÍ LÀM THẺ MSB - VPOINT - MASTERCARD
          </h3>
          <p className="newsItem__desc">
            Nắm ngay cơ hội mua sắm siêu lời với duy nhất một chiếc thẻ có thể chi tiêu ở mọi nơi và
            tận hưởng thêm ngàn ưu đãi hấp dẫn từ MSB và Vpoint (*) và có cơ hội nhận tới 10 triệu
            đồng
          </p>
        </div>
        <a className="newsItem__more">
          Chi tiết
          <i className="fa fa-arrow-right" />
        </a>
      </div>
      <div className="newsItem">
        <div className="newsItem__imgBox">
          <img
            className="newsItem__img"
            src="/static/assets/images/newsItem-3.png"
            alt="News Image"
          />

          <p className="newsItem__tags">
            <span className="newsItem__domainTag">Tài chính</span>
            <span className="newsItem__companyTag">Vietinbank</span>
          </p>
        </div>
        <div className="newsItem__content">
          <h3 className="newsItem__title">
            ƯU ĐÃI NHẬN TỚI 10 TRIỆU ĐỒNG KHI ĐĂNG KÍ LÀM THẺ MSB - VPOINT - MASTERCARD
          </h3>
          <p className="newsItem__desc">
            Nắm ngay cơ hội mua sắm siêu lời với duy nhất một chiếc thẻ có thể chi tiêu ở mọi nơi và
            tận hưởng thêm ngàn ưu đãi hấp dẫn từ MSB và Vpoint (*) và có cơ hội nhận tới 10 triệu
            đồng
          </p>
        </div>
        <a className="newsItem__more">
          Chi tiết
          <i className="fa fa-arrow-right" />
        </a>
      </div>
    </div>
    <style jsx>{`
      .newsWrapper {
        display: flex;
        flex-wrap: wrap;
        padding: 0 8.345%;
      }

      .newsItem {
        width: calc((100% - 60px) / 3);
        margin-right: 30px;
        margin-bottom: 30px;
      }

      .newsItem:nth-of-type(3n) {
        margin-right: 0;
      }

      .newsItem__imgBox {
        overflow: hidden;
        position: relative;
      }

      .newsItem__tags {
        position: absolute;
        display: flex;
        width: 100%;
        top: 25px;
        z-index: 10;
        display: flex;
        margin-left: 10px;
      }

      .newsItem__domainTag {
        background-color: #ae1663;
        color: #fff;
        height: 24px;
        padding: 0 10px;
        border-radius: 24px;
        margin-right: 10px;
        font-weight: 600;
        font-size: 11px;
        line-height: 13px;
        white-space: nowrap;
        display: flex;
        align-items: center;
      }

      .newsItem__companyTag {
        font-weight: 600;
        font-size: 11px;
        line-height: 13px;
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        color: #ae1663;
        height: 24px;
        padding: 0 10px;
        border-radius: 24px;
        margin-right: 10px;
      }

      .newsItem__img {
        width: 100%;
      }

      .newsItem__title {
        color: #4b3c50;
        font-size: 16px;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 0.5px;
      }

      .newsItem__img:hover {
        transform: scale(1.1);
      }

      .newsItem__title:hover {
        color: #fa7020;
      }

      .newsItem__desc {
        opacity: 0.85;
        color: #49505a;
        font-size: 13px;
        line-height: 23px;
        margin: 5px 0 10px 0;
      }

      .newsItem__content {
        padding: 25px 0 15px 0;
      }

      .newsItem__more {
        color: #4b3c50;
        font-size: 13px;
        font-weight: 700;
        line-height: 15px;
        display: flex;
        align-items: center;
      }

      .newsItem__more:hover {
        color: #fa7020 !important;
        cursor: pointer;
      }

      .newsItem__more::before {
        display: inline-block;
        content: '';
        height: 1px;
        width: 0;
        background-color: #4b3c50;
      }

      .newsItem__more:hover::before {
        width: 15px;
        margin-right: 5px;
      }

      .newsItem__more i {
        margin-left: 5px;
      }

      .news__search {
        width: 100%;
        padding: 15px 8.345%;
        float: left;
        display: inline-block;
        border-bottom: 1px solid #d9dee5;
        margin-bottom: 30px;
      }

      .news__search .frm_search {
        float: left;
        display: -webkit-flex;
        display: -moz-flex;
        display: flex;
      }

      .form-inline .form-group {
        display: inline-block;
        margin-bottom: 0;
        vertical-align: middle;
      }

      .form-group {
        margin-bottom: 15px;
      }

      .news__search .frm_search .frm__input-search {
        padding: 6px 12px 5px 0;
        border: 0;
        background-color: 0;
        outline: 0;
        border-radius: 0;
        box-shadow: none;
        width: 195px;
        color: #8a97ac;
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        line-height: 14px;
      }

      .form-control {
        display: block;
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
        -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
      }

      .news__search .frm_search .btn-search {
        border: 0;
        background-color: inherit;
        outline: 0;
        border-radius: 0;
        box-shadow: none;
        color: #4b3c50;
        font-size: 14px;
        line-height: 14px;
        height: 34px;
      }

      .news__search .frm_search .btn-search {
        color: #4b3c50;
        font-size: 14px;
        line-height: 14px;
      }

      .news__search .frm__quickSearch {
        float: right;
        display: -webkit-flex;
        display: -moz-flex;
        display: flex;
      }

      .news__search .frm__quickSearch .frm__quickSearch--item {
        display: -webkit-flex;
        display: -moz-flex;
        display: flex;
        -webkit-align-items: center;
        -moz-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        -moz-justify-content: center;
        justify-content: center;
        margin-right: 20px;
        margin-bottom: 0;
      }

      .news__search .frm__quickSearch .frm__quickSearch--item .quickSearch__label {
        color: #8a97ac;
        font-family: 'Roboto', sans-serif;
        margin-right: 10px;
        font-size: 12px;
        line-height: 14px;
      }

      .news__search .frm__quickSearch .frm__quickSearch--item .quickSearch__select::before {
        position: absolute;
        content: '\f107';
        font-family: FontAwesome;
        color: #8a97ac;
        font-size: 13px;
        top: 50%;
        right: 0;
        line-height: 40px;
        padding-right: 10px;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        transform: translateY(-50%);
        pointer-events: none;
      }

      .news__search .frm__quickSearch .frm__quickSearch--item .quickSearch__select {
        height: 30px;
        width: 150px;
        position: relative;
      }

      .news__search .frm__quickSearch .frm__quickSearch--item .quickSearch__select::before {
        position: absolute;
        content: '\f107';
        font-family: FontAwesome;
        color: #8a97ac;
        font-size: 13px;
        top: 50%;
        right: 0;
        line-height: 40px;
        padding-right: 10px;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        transform: translateY(-50%);
        pointer-events: none;
      }

      .news__search
        .frm__quickSearch
        .frm__quickSearch--item
        .quickSearch__select
        select.select-box {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      .news__search .frm__quickSearch .frm__quickSearch--item .quickSearch__select select {
        height: 30px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #d9dee5;
        color: #8a97ac;
        font-size: 13px;
        line-height: 14px;
        box-shadow: none;
      }

      .news__search
        .frm__quickSearch
        .frm__quickSearch--item
        .quickSearch__select
        select.select-box
        option {
        color: #8a97ac;
      }

      .news__search .frm__quickSearch .frm__quickSearch--item:last-child {
        margin-right: 0;
      }

      .news__search .frm__quickSearch .frm__quickSearch--item {
        display: -webkit-flex;
        display: -moz-flex;
        display: flex;
        -webkit-align-items: center;
        -moz-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        -moz-justify-content: center;
        justify-content: center;
        margin-right: 20px;
        margin-bottom: 0;
      }

      .news__search .frm__quickSearch .frm__quickSearch--item .quickSearch__label {
        color: #8a97ac;
        font-family: 'Roboto', sans-serif;
        margin-right: 10px;
        font-size: 12px;
        line-height: 14px;
      }

      .news__search .frm__quickSearch .frm__quickSearch--item .quickSearch__select::before {
        position: absolute;
        content: '\f107';
        font-family: FontAwesome;
        color: #8a97ac;
        font-size: 13px;
        top: 50%;
        right: 0;
        line-height: 40px;
        padding-right: 10px;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        transform: translateY(-50%);
        pointer-events: none;
      }

      .news__search .frm__quickSearch .frm__quickSearch--item .quickSearch__select {
        height: 30px;
        width: 150px;
        position: relative;
      }

      .news__search .frm__quickSearch .frm__quickSearch--item .quickSearch__select select {
        height: 30px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #d9dee5;
        color: #8a97ac;
        font-size: 13px;
        line-height: 14px;
        box-shadow: none;
      }

      .news__search .frm__quickSearch .frm__quickSearch--item .quickSearch__select select {
        color: #8a97ac;
        font-size: 13px;
        line-height: 14px;
      }
    `}</style>
  </>
);

export default NewsFavo;
