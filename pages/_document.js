// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, {Head, Main, NextScript} from 'next/document';
// eslint-disable-next-line import/no-extraneous-dependencies
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const {html, head, errorHtml, chunks} = renderPage();
    const styles = flush();
    return {html, head, errorHtml, chunks, styles};
  }

  render() {
    return (
      <html lang="vi">
        <Head>
          <link rel="stylesheet" href="/static/assets/css/lib/bootstrap.css" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          />
          <link rel="stylesheet" href="/static/assets/css/lib/all.min.css" />
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>

        <style jsx global>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
      </html>
    );
  }
}
