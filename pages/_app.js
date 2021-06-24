import '../styles/globals.scss';
import { CartStateProvider } from '../src/lib/cartState';


function MyApp({ Component, pageProps }) {
  return (
    <CartStateProvider>
      <main id="js-scroll" data-scroll-container>
        <Component {...pageProps} />
      </main>
    </CartStateProvider>
  );
}

export default MyApp;
