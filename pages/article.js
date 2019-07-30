import Link from 'next/link';
import Layout from '../components/layout/Layout';
import NavigationBar from '../components/utils/NavigationBar';
import './article.scss';

const createMarkup = () => ({
  __html: `
<h3><i>CƠ HỘI NHẬN ĐƯỢC TỚI 10 TRIỆU ĐỒNG KHI ĐĂNG KÍ LÀM THẺ MSB - VPOINT - MASTERCARD</i></h3>
<p>
The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet,
consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum." Section 1.10.32 of "de
Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis
iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
qui dolorem eum fugiat quo voluptas nulla pariatur?" 1914 translation by H. Rackham "But I
must explain to you how all this mistaken idea of denouncing pleasure and praising pain
was born and I will give you a complete account of the system, and expound the actual
teachings of the great explorer of the truth, the master-builder of human happiness. No
one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because
those who do not know how to pursue pleasure rationally encounter consequences that are
extremely painful. Nor again is there anyone who loves or pursues or desires to obtain
pain of itself, because it is pain, but because occasionally circumstances occur in which
toil and pain can procure him some great pleasure. To take a trivial example, which of us
ever undertakes laborious physical exercise, except to obtain some advantage from it? But
who has any right to find fault with a man who chooses to enjoy a pleasure that has no
annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
</p>
`,
});

const Article = () => (
  <Layout>
    <div className="article">
      <NavigationBar>
        <div className="article__header">
          <h3 className="article__title">THƯỞNG HÈ ẨM THỰC VỚI ƯU ĐÃI LÊN ĐẾN 15% CÙNG JCB</h3>
          <div className="article__sub-info">
            <span className="article__date">
              <i className="far fa-clock" /> 10.06.2019
            </span>
            <span className="article__brand">
              <i className="fas fa-tags" />
              JCB
            </span>
          </div>
        </div>
      </NavigationBar>
      <div className="article__wrapper">
        <div className="article__body">
          <div dangerouslySetInnerHTML={createMarkup()} />
        </div>

        <div className="article__involce">
          <h3 className="article__titleInvolce">TIN TỨC LIÊN QUAN</h3>

          <div className="article__newsWrapper">
            <div className="newsItem">
              <div className="newsItem__imgBox">
                <img
                  className="newsItem__img"
                  src="https://via.placeholder.com/300x200"
                  alt="News"
                />
                <p className="newsItem__tags">
                  <span className="newsItem__domainTag">bembem</span>
                  <span className="newsItem__companyTag">dug</span>
                </p>
              </div>
              <div className="newsItem__content">
                <h3 className="newsItem__title">dfadfadfadf</h3>
                <p className="newsItem__desc">fadfadfadfadf</p>
              </div>
              <Link href="/article">
                <a className="newsItem__more">
                  Chi tiết
                  <i className="fa fa-arrow-right" />
                </a>
              </Link>
            </div>

            <div className="newsItem">
              <div className="newsItem__imgBox">
                <img
                  className="newsItem__img"
                  src="https://via.placeholder.com/300x200"
                  alt="News"
                />
                <p className="newsItem__tags">
                  <span className="newsItem__domainTag">bembem</span>
                  <span className="newsItem__companyTag">dug</span>
                </p>
              </div>
              <div className="newsItem__content">
                <h3 className="newsItem__title">dfadfadfadf</h3>
                <p className="newsItem__desc">fadfadfadfadf</p>
              </div>
              <Link href="/article">
                <a className="newsItem__more">
                  Chi tiết
                  <i className="fa fa-arrow-right" />
                </a>
              </Link>
            </div>

            <div className="newsItem">
              <div className="newsItem__imgBox">
                <img
                  className="newsItem__img"
                  src="https://via.placeholder.com/300x200"
                  alt="News"
                />
                <p className="newsItem__tags">
                  <span className="newsItem__domainTag">bembem</span>
                  <span className="newsItem__companyTag">dug</span>
                </p>
              </div>
              <div className="newsItem__content">
                <h3 className="newsItem__title">dfadfadfadf</h3>
                <p className="newsItem__desc">fadfadfadfadf</p>
              </div>
              <Link href="/article">
                <a className="newsItem__more">
                  Chi tiết
                  <i className="fa fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Article;
