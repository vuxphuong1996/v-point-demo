import './FilterTool.scss';
import PropTypes from 'prop-types';

const FilterTool = ({handleChange, label, list, type, defaultOption, defaultOptionLabel}) => (
  <div className="filterTool">
    <span className="filterTool__label">{label}</span>
    <select className="filterTool__select" onChange={(e) => handleChange({event: e, type})}>
      <option value={defaultOption}>{defaultOptionLabel}</option>
      {list.map((domain) => (
        <option key={domain} value={domain}>
          {domain}
        </option>
      ))}
    </select>
  </div>
);

FilterTool.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  defaultOption: PropTypes.string,
  defaultOptionLabel: PropTypes.string,
};

FilterTool.defaultProps = {
  defaultOption: 'all',
  defaultOptionLabel: 'All',
};

export default FilterTool;
