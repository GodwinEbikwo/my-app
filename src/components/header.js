import Link from 'next/link';
import Menu from './menu';
import { useCart } from '../lib/cartState';

export default function Header() {
  const { openCart } = useCart();
  return (
    <section className="header" data-scroll-section>
      <div className="container x-sml-ptb">
        <div className="flex sb wrap">
          <div className="links">
            <span className="header_heading_label">
              <Link href="/">
                <a>Contact</a>
              </Link>
            </span>
          </div>

          <div className="header_name">
            <h2 className="header_title header_heading_label h_logo">
              BLUU LIME
            </h2>
          </div>

          <div className="links">
            <button
              className="header_heading_label"
              type="button"
              onClick={openCart}
              style={{ outline: 'none', fontSize: 'inherit' }}
              aria-label="open cart">
              Menu
            </button>
          </div>
        </div>
        {/* <div className="h-seperator" data-scroll data-scroll-offset="100" /> */}
      </div>
      <Menu />
    </section>
  );
}
