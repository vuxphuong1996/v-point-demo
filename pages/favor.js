import {Component} from 'react';
import Layout from '../components/layout/Layout';
import NavigationBar from '../components/utils/NavigationBar';
import NewsListWrapper from '../components/utils/NewsListWrapper';
import Pagination from '../components/utils/Pagination';
import FilterTool from '../components/utils/FilterTool';
import SubNavigation from '../components/utils/SubNavigation';
import {FavorableConsumer} from '../components/context/FavorableContext';
import './favor.scss';
import NewsItem from '../components/utils/NewsItem';

const FavorWrapper = () => <FavorableConsumer>{(props) => <Favor {...props} />}</FavorableConsumer>;

class Favor extends Component {
  state = {
    brand: null,
    domain: null,
    searchTerm: '',
    filteredItems: [],
    articles: [],
    pageOfItems: [],
  };

  componentDidMount() {
    this.setState({filteredItems: this.props.favors, articles: this.props.favors});
  }

  onChangePage = (pageOfItems) => {
    this.setState({pageOfItems});
  };

  handleAllFilter = ({event = null, type = null}) => {
    if (!event || !type) return;
    const filters = ['searchTerm', 'brand', 'domain'];

    if (!filters.includes(type)) return;

    this.setState({[type]: event.target.value}, () => {
      const filterProps = filters.filter((i) => {
        if (i === 'searchTerm' && !this.state[i]) {
          return false;
        }
        if (!this.state[i] || this.state[i].toLowerCase() === 'all') {
          return false;
        }
        return true;
      });
      this.multipeFilters(filterProps, this.state.articles);
    });
  };

  multipeFilters = (filterProps, articleList) => {
    const result = articleList.filter((item) => {
      return filterProps.every((key) => {
        if (key === 'searchTerm') {
          if (!item.title.includes(this.state[key])) return false;
        } else if (item[key] !== this.state[key]) return false;
        return true;
      });
    });

    this.setState({filteredItems: result});
  };

  render() {
    const customLabels = {
      first: '<<',
      last: '>>',
      previous: '<',
      next: '>',
    };

    return (
      <Layout>
        <div className="favorWrapper">
          <NavigationBar>
            <SubNavigation />
          </NavigationBar>
          <div className="commonSectionPadding borderBottom">
            <div className="functionalBar ">
              <form className="searchForm">
                <input
                  onChange={(e) => this.handleAllFilter({event: e, type: 'searchTerm'})}
                  placeholder="Nhập tìm kiếm ở đây..."
                />
                <span>|</span>
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </form>
              <div className="functionalBar__filterBox">
                <div className="functionalBar__filterItem">
                  <FilterTool
                    handleChange={this.handleAllFilter}
                    label="Thương hiệu"
                    type="brand"
                    list={this.props.brands || []}
                    defaultOptionLabel="Chọn thương hiệu"
                  />
                </div>
                <div className="functionalBar__filterItem">
                  <FilterTool
                    handleChange={this.handleAllFilter}
                    label="Lĩnh vực"
                    type="domain"
                    list={this.props.domains || []}
                    defaultOptionLabel="Chọn lĩnh vực"
                  />
                </div>
              </div>
            </div>
          </div>

          <NewsListWrapper>
            {this.state.pageOfItems.map((item) => (
              <NewsItem key={item.id} type="favor" {...item} />
            ))}
          </NewsListWrapper>

          <Pagination
            pageSize={6}
            maxPages={5}
            items={this.state.filteredItems}
            onChangePage={this.onChangePage}
            disableDefaultStyles
            labels={customLabels}
          />
        </div>
      </Layout>
    );
  }
}

export default FavorWrapper;
