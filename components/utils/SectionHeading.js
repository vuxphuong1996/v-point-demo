import './SectionHeading.scss';

const SectionHeading = (props) => (
  <div className="sectionHeading">
    <h3 className="sectionHeading__title">{props.children}</h3>
  </div>
);

export default SectionHeading;
