/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero" data-scroll-section>
      <div className="container sml-ptb">
        <div className="flex fd-c">
          <h1 className="h-header_title" data-scroll>
            <span className="h-header_title_line">
              <span
                data-scroll
                data-scroll-speed="3"
                data-scroll-position="top">
                Front end &
              </span>
            </span>

            <span className="h-header_title_line">
              <span
                id="indent"
                data-scroll
                data-scroll-speed="2"
                data-scroll-position="top">
                Developer
              </span>
            </span>
            <span className="h-header_title_line">
              <span
                data-scroll
                data-scroll-speed="2"
                data-scroll-position="top">
                + Art
              </span>
            </span>

            <span className="h-header_title_line">
              <span
                id="indent"
                data-scroll
                data-scroll-speed="2"
                data-scroll-position="top">
                Director
              </span>
            </span>
          </h1>

          <div className="flex sb h-summary p-absolute" data-scroll>
            <div className="h-left">
              <span>Selected Works</span>
            </div>

            <div className="h-right">
              <span>2021</span>
            </div>
          </div>

          <hr className="h-header_line" data-scroll data-scroll-offset="100" />
        </div>
      </div>
    </section>
  );
}
