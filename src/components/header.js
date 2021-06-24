import Link from 'next/link';

export default function Header() {
  return (
    <section className="header" data-scroll-section>
      <div className="container x-sml-ptb">
        <div className="flex sb wrap">
          <div className="header_name">
            <h2 className="header_title header_heading_label">Daniel Begoli</h2>
          </div>

          <div className="header_name">
            <h2 className="header_title header_heading_label h_logo">BLUU LIME</h2>
          </div>

          <div className="links">
            <span className="header_heading_label">
              <Link href="/">
                <a>Contact</a>
              </Link>
            </span>

            {/* <span className="header_heading_label">
              <Link href="/">
                <a>Cases</a>
              </Link>
            </span> */}

            {/* <span className="header_heading_label">
              <Link href="/">
                <a>Menu</a>
              </Link>
            </span> */}
          </div>
        </div>
        <hr className="h-header_line" data-scroll data-scroll-offset="100" />
      </div>
    </section>
  );
}
