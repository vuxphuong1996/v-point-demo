// pages/_app.js
import React from 'react';
import App, {Container} from 'next/app';
import fetch from 'isomorphic-unfetch';
import NewsContext from '../components/context/NewsContext';
import FavorableContext from '../components/context/FavorableContext';
import answer from '../components/services/getdata.service';

const domains = ['xyz', 'abc', 'def', 'cvx', 'dug', 'dng', 'qpr'];
const brands = ['abc', 'uuu', 'deg', 'mnp', 'uck', 'agh', 'duk'];

function randomDate(start = new Date(0), end = new Date()) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).getTime();
}

const fetchNews = async () => {
  try {
    axios.get().then((res) => {});
    const tieng = answer.getAPI().then((res) => {
      console.log(res);
    });
    console.log(`2${tieng}`);
    const json = await res.json();
    const news = json.map((item) => ({
      ...item,
      createdAt: randomDate(),
    }));
    return news.sort((a, b) => a.createdAt < b.createdAt);
  } catch (e) {
    return [];
  }
};

const fetchFavors = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await res.json();
    const favors = json.map((item) => ({
      ...item,
      domain: domains[Math.floor(Math.random() * domains.length)],
      brand: brands[Math.floor(Math.random() * brands.length)],
      createdAt: randomDate(),
    }));
    return favors.sort((a, b) => a.createdAt < b.createdAt);
  } catch (e) {
    return [];
  }
};

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    const news = await fetchNews();
    const favors = await fetchFavors();
    return {pageProps, news, favors, domains, brands};
  }

  render() {
    const {
      Component,
      pageProps,
      news,

      favors,
    } = this.props;
    return (
      <Container>
        <NewsContext.Provider value={{news}}>
          <FavorableContext.Provider value={{favors, domains, brands}}>
            <Component {...pageProps} />
          </FavorableContext.Provider>
        </NewsContext.Provider>
      </Container>
    );
  }
}

export default MyApp;
