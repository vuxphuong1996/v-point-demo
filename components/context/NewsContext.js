import {createContext} from 'react';

const NewsContext = createContext();
const NewsConsumer = NewsContext.Consumer;

export {NewsConsumer};
export default NewsContext;

// import fetch from 'isomorphic-unfetch';
// import {createContext, Component} from 'react';

// const NewsContext = createContext();

// class NewsProvider extends Component {
//   static async getInitialProps() {
//     let res;
//     try {
//       const domains = ['xyz', 'abc', 'def', 'cvx', 'dug', 'dng', 'qpr'];
//       const brands = ['abc', 'uuu', 'deg', 'mnp', 'uck', 'agh', 'duk'];
//       res = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const json = await res.json();
//       return {
//         news: json.map((item) => ({
//           ...item,
//           domain: domains[Math.floor(Math.random() * domains.length)],
//           brand: brands[Math.floor(Math.random() * brands.length)],
//         })),
//         domains,
//         brands,
//       };
//     } catch (e) {
//       return {news: [], statusCode: res.status};
//     }
//   }

//   state = {
//     news: this.props.news,
//   };

//   handleSetNews = (news) => {
//     this.setState({news});
//   };

//   render() {
//     return (
//       <NewsContext.Provider
//         value={{
//           news: this.state.news,
//         }}
//       >
//         {this.props.children}
//       </NewsContext.Provider>
//     );
//   }
// }

// const NewsConsumer = NewsContext.Consumer;

// export {NewsConsumer, NewsProvider};
