import '../styles/globals.scss';


function MyApp({ Component, pageProps }) {
  return (
    <main id="js-scroll" data-scroll-container>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
