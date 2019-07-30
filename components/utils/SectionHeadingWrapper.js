import './SectionHeadingWrapper.scss';

const SectionHeadingWrapper = (props) => (
  <div className="d-flex align-items-center justify-content-between">{props.children}</div>
);

export default SectionHeadingWrapper;
