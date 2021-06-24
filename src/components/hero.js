/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (
    <section className="hero" data-scroll-section>
      <div className="container large-ptb">
        <div className="flex ai-jc fd-c">
          {/* <h1 className="h-header_title" data-scroll>
            <span className="h-header_title_line">
              <span
                data-scroll
                data-scroll-speed="3"
                data-scroll-position="top">
                Hi there
              </span>
            </span>

            <span className="h-header_title_line">
              <span
                data-scroll
                data-scroll-speed="2"
                data-scroll-position="top">
                we are bluu lime
              </span>
            </span>

            <span className="h-header_title_line">
              <span
                data-scroll
                data-scroll-speed="2"
                data-scroll-position="top">
               studio
              </span>
            </span>
          </h1> */}

          <h1 className="h-header_title" data-scroll>
            <span className="h-header_title_line">
              <span
                data-scroll
                data-scroll-speed="3"
                data-scroll-position="top">
                Hello
              </span>
              <br />
            </span>

            <span className="h-header_title_line">
              <span
                data-scroll
                data-scroll-speed="2"
                data-scroll-position="top">
                we're bluu lime
              </span>
              <br />
            </span>

            {/* <span className="h-header_title_line">
              <span
                data-scroll
                data-scroll-speed="1"
                data-scroll-position="top">
                studio
              </span>
            </span> */}
          </h1>

          <div className="h-summary" data-scroll>
            <div className="middle">
              <p>
                <span>...BASED UNDER THE COLD IN BARNSLEY,</span> <br />
                <span> UNITED KINGDOM, THE CITY OF FARMERS AND THE</span> <br />
                <span>MORE FAMOUS JOHN BARNES</span>
              </p>
              <br />

              <p>
                <span>OUR ONLINE STORE OPENED IN 2021, JUST </span> <br />
                <span>MONTHS AFTER, WE GOT THE</span> <br />
                <span>VACCINE</span>
              </p>
            </div>
          </div>

          <div className="flex sb h-summary p-absolute" data-scroll>
            <div className="h-left">
              <span>Selected Works</span>
            </div>

            <div className="h-right">
              <span>2021</span>
            </div>
          </div>
        </div>
        <div className="seperator" data-scroll data-scroll-offset="100" />
      </div>
    </section>
  );
}
