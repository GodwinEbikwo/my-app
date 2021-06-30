import Link from 'next/link';

export default function Nav() {
  return (
    <nav id="nav" data-scroll-section className="container">
      <Link href="/">
        <a id="nav-logo">
          <span>Coex</span>
        </a>
      </Link>

      <ul id="nav-list">
        <li>
          <Link href="/">
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
    </nav>
  );
}
