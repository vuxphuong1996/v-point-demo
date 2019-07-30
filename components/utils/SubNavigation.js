import './SubNavigation.scss';
import Link from 'next/link';

const NavLink = (props) => (
  <Link href={props.href}>
    <a
      className={`subNavigation__link ${
        props.href === '/news' ? 'subNavigation__link--active' : ''
      }`}
    >
      {props.children}
    </a>
  </Link>
);

const SubNavigation = () => (
  <div className="subNavigation">
    <NavLink href="/news">Tin tức Vpoint</NavLink>
    <NavLink href="/favor">Ưu đãi</NavLink>
  </div>
);

export default SubNavigation;
