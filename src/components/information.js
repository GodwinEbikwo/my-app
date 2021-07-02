/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import useOnScreen from '../lib/useOnScreen';
import cn from 'classnames';
import SplitText from '../utils/Split3.min';

export function Information() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    if (reveal) {
      const split = new SplitText('.inforight_title, .info_para ', {
        type: 'lines',
        linesClass: 'split-child',
      });

      const splitParent = new SplitText('.inforight_title, .info_para', {
        linesClass: 'split-parent',
      });

      tl.from(
        split.lines,
        {
          duration: 1.2,
          yPercent: 100,
          ease: 'power4',
          stagger: 0.2,
        },
        '<0.4'
      );
    }
  }, [reveal]);

  return (
    <section className="information" data-scroll-section ref={ref}>
      <div className="information_grid">
        <aside className="information_left">
          <div className="infoleft_inner">
            <div className="b-speed-block" data-scroll>
              <div className="b-image_wrapper" data-scroll data-scroll-repeat>
                <div className="b-image" data-scroll>
                  <img
                    loading="lazy"
                    className="b-speed-block_image img"
                    src="https://res.cloudinary.com/godwinebikwo/image/upload/v1621008026/tom-crew-XtyxEBiA8D8-unsplash_mjpah4.jpg"
                    alt="fivensix"
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>

        <aside className="information_right flex ai-jc fd-c">
          <div className="inforight_inner">
            <h1 className={cn('inforight_title', { 'is-inview': reveal })}>
              Environmentally responsible,
              <br />
              ethically-conscious
            </h1>
            {/* <h1 className="inforight_title span_overflow">
              <span className="span_inner">
                Environmentally responsible,
                <br />
                ethically-conscious
              </span>
            </h1> */}

            {/* <p className="info_para span_overflow">
              <span className="span_inner">
                We are a carbon neutral company & products and certified
                <br />
                cruelty-free brand with a foucs on ustainable packaging.
              </span>
            </p> */}
            <p className={cn('info_para', { 'is-inview': reveal })}>
              We are a carbon neutral company & products and certified
              <br />
              cruelty-free brand with a foucs on ustainable packaging.
            </p>

            <button type="button" className="main-button">
              Learn more
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function InformationTwo() {
  return (
    <section className="information" data-scroll-section>
      <div className="information_grid">
        <aside className="information_right flex ai-jc fd-c">
          <div className="inforight_inner">
            <h1 className="inforight_title">
              100% natural and <br /> organic ingredients
            </h1>
            <p>
              Made with 100% natural and organic ingredients that are good for
              the environment, grower and consumer.
            </p>

            <button type="button" className="main-button">
              See Ingredients
            </button>
          </div>
        </aside>

        <aside className="information_left">
          <div className="infoleft_inner">
            <div className="b-speed-block" data-scroll>
              <div className="b-image_wrapper" data-scroll data-scroll-repeat>
                <div className="b-image" data-scroll>
                  <img
                    loading="lazy"
                    className="b-speed-block_image img"
                    src="/01.jpg"
                    alt="fivensix"
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
