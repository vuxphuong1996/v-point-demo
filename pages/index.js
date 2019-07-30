import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Intro from '../components/landing-sections/Intro';
import News from '../components/landing-sections/News';
import Banner from '../components/landing-sections/Banner';
import Favorable from '../components/landing-sections/Favorable';
import Community from '../components/landing-sections/Community';

const Index = () => (
  <Layout>
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="/static/assets/css/bannerSlick.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="/static/assets/css/swiperSlick.css"
      />
    </Head>

    <Banner />

    <Community />

    <Intro />

    <Favorable />

    <News />
  </Layout>
);
// export default connect(mapStateToProps)(Index);
export default Index;
