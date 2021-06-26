import '../styles/globals.scss';
import { CartStateProvider } from '../src/lib/cartState';
import Layout from '../src/components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <CartStateProvider>
      <main id="js-scroll" data-scroll-container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </CartStateProvider>
  );
}

export default MyApp;
