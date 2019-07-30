import './Intro.scss';

const Intro = () => (
  <div className="intro">
    <div className="introLeft">
      <h3 className="introLeft__heading">Giới thiệu</h3>
      <div className="introLeft__content">
        <p className="introLeft__desc">
          Vpoint là thẻ tích điểm đa năng mà bạn có thể tích điểm và thanh toán bằng điểm tại nhiều
          cửa hàng thuộc cộng đồng liên kết của Vpoint. Hệ sinh thái đa dạng với hệ thống 2.000 cửa
          hàng bao gồm các lĩnh vực: ẩm thực, du lịch, siêu thị, điện máy, mỹ phẩm, thời trang, làm
          đẹp…sẽ đem đến những ưu đãi tuyệt vời cho Hội viên chỉ duy nhất trong cộng đồng Vpoint.
        </p>
        <button type="button" className="btnBase mainBtn">
          <i className="fa fa-credit-card" />
          Tham gia Vpoint
        </button>
      </div>
    </div>
    <div className="introRight">
      <img className="introRight__img" src="/static/assets/images/introImage.jpg" alt="intro" />
    </div>
  </div>
);

export default Intro;
