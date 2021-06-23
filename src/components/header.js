import Link from 'next/link';

export default function Header() {
  return (
    <section className="header" data-scroll-section>
      <div className="container x-sml-ptb">
        <div className="flex sb">
          <div className="header_name">
            <h2 className="header_title header_heading_label">Daniel Begoli</h2>
          </div>

          <div className="links">
            <span className="header_heading_label">
              <Link href="/">
                <a>About</a>
              </Link>
            </span>

            <span className="header_heading_label">
              <Link href="/">
                <a>Cases</a>
              </Link>
            </span>
          </div>
        </div>
        <hr className="h-header_line" data-scroll data-scroll-offset="100" />
      </div>
    </section>
  );
}
