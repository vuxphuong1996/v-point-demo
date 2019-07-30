import {Component} from 'react';
import {withRouter} from 'next/router';
import Link from 'next/link';
import './Header.scss';

class Header extends Component {
  links = [
    {href: '/', text: 'Trang chủ'},
    {href: '/a', text: 'Đổi thẻ cào'},
    {href: '/b', text: 'Giới thiệu'},
    {href: '/news', text: 'Tin tức'},
    {href: '/c', text: 'Đối tác'},
  ];

  render() {
    const {pathname} = this.props.router;
    return (
      <header className="header">
        <ul className="d-flex justify-content-end mb-0 menuOne">
          <li>
            <a href="#">Liên hệ</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <img src="/static/assets/images/logo-head.png" width="200" height="54" alt="logo" />
          <ul className="d-flex ml-auto mb-0 pl-0 menuTwo">
            {this.links.map(({href, text}) => (
              <li className={href === pathname ? 'active' : ''} key={text}>
                <Link href={href}>
                  <a>{text}</a>
                </Link>
              </li>
            ))}
          </ul>
          <button className="btnBase mainBtn" type="button">
            <i className="fa fa-credit-card" aria-hidden="true" />
            Tham gia Vpoint
          </button>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
