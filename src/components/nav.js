import Link from 'next/link';
import Menu from './menu';
import { useCart } from '../lib/cartState';

export default function Nav() {
  const { openCart } = useCart();
  return (
    <nav id="nav" data-scroll-section>
      <div className="container">
        <Link href="/">
          <a id="nav-logo">
            <span>ecox</span>
          </a>
        </Link>

        <div className="hide-for-mobile">
          <ul id="nav-list">
            <li>
              <Link href="/projects">
                <a className="link link--metis">
                  <span>
                    <span className="nav-li-no">1</span>
                  </span>
                  <br />
                  <span className="nav-li-name ">Projects</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/about">
                <a className="link link--metis">
                  <span>
                    <span className="nav-li-no">2</span>
                  </span>
                  <br />
                  <span className="nav-li-name ">About</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a className="link link--metis">
                  <span>
                    <span className="nav-li-no">3</span>
                  </span>
                  <br />
                  <span className="nav-li-name ">Team</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a className="link link--metis">
                  <span>
                    <span className="nav-li-no">4</span>
                  </span>
                  <br />
                  <span className="nav-li-name ">Journal</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="hide-for-desktop ">
          <button
            className="header_heading_label"
            type="button"
            onClick={openCart}
            style={{ outline: 'none', fontSize: 'inherit' }}
            aria-label="open cart">
            <span className="line">Menu</span>
          </button>
        </div>
      </div>
      <Menu />
    </nav>
  );
}
