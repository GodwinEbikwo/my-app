/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export function Information() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const tl = gsap.timeline({});
    tl.from(el.querySelector('.inforight_title .span_inner'), {
      yPercent: 100,
      duration: 1,
      delay: 0.8,
      ease: 'power3.easeOut',
      stagger: {
        amount: 0.5,
      },
    })
      .from(
        el.querySelector('.info_para .span_inner'),
        {
          yPercent: 100,
          duration: 1,
          ease: 'power3.easeOut',
          stagger: {
            amount: 0.5,
          },
        },
        '-=.7'
      )
      .from(
        el.querySelector('.main-button'),
        {
          opacity: 0,
          ease: 'none',
        },
        '-=.8'
      );
  }, []);

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
                    src="/03.jpg"
                    alt="fivensix"
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>

        <aside className="information_right flex ai-jc fd-c">
          <div className="inforight_inner">
            <h1 className="inforight_title span_overflow">
              <span className="span_inner">
                Environmentally responsible,
                <br />
                ethically-conscious
              </span>
            </h1>

            <p className="info_para span_overflow">
              <span className="span_inner">
                We are a carbon neutral company & products and certified
                <br />
                cruelty-free brand with a foucs on ustainable packaging.
              </span>
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
