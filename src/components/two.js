import React from 'react'
import Image from 'next/image';

export default function Two() {
  return (
    <section className="two" data-scroll-section>
      <div className="container sml-ptb">
        <div className="b-speed-block" data-scroll>
          <div className="b-image_wrapper" data-scroll data-scroll-repeat>
            <div className="b-image" data-scroll>
              <Image
                className="b-speed-block_image img"
                src="/03.jpg"
                width={640}
                height={960}
                alt="image from unsplash"
              />
            </div>
          </div>
        </div>
        <br />

        <div className="b-speed-block" data-scroll>
          <div className="b-image_wrapper" data-scroll data-scroll-repeat>
            <div className="b-image" data-scroll>
              <Image
                className="b-speed-block_image img"
                src="/01.jpg"
                width={640}
                height={960}
                alt="image from unsplash"
              />
            </div>
          </div>
        </div>
        <hr className="t-header_line" data-scroll data-scroll-offset="99%" />
      </div>
    </section>
  );
}
