import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import SplitText from '../utils/Split3.min';
import cn from 'classnames';
import useOnScreen from '../lib/useOnScreen';

export default function One() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    const tl = gsap.timeline({delay: 0.2});

    if (reveal) {
      const split = new SplitText('h1, .content-para', {
        type: 'lines',
        linesClass: 'split-child',
      });

      const splitParent = new SplitText('h1, .content-para', {
        linesClass: 'split-parent',
      });

      tl.from(split.lines, {
        duration: 1.2,
        yPercent: 100,
        ease: 'power4',
        stagger: 0.2,
      });
    }
  }, [reveal]);

  return (
    <section className="one" data-scroll-section ref={ref}>
      <div className="container large-ptb">
        <div className="flex ai-jc fd-c">
          <div className="o-summary">
            <div className="gif">
              <svg
                width="73"
                height="69"
                className="smiley"
                viewBox="0 0 73 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M69.6 32.7L69.4 30.3L44.0999 32.6L67.6 22.8L66.6999 20.6L42.9 30.5L62.4 13.7L60.9 11.9L41.2999 28.7L54.5999 6.59999L52.5999 5.39999L39.0999 27.6L44.7999 2.29999L42.4 1.79999L36.9 26.7L34.5999 1.29999L32.2 1.49999L34.5 26.8L24.7 3.29999L22.5 4.19999L32.4 28L15.6 8.49999L13.8 9.99999L30.9 30L8.19995 16.8L6.99995 18.9L29.1 31.6L4.19995 26.1L3.69995 28.5L28.6 34L3.19995 36.3L3.39995 38.7L28.7 36.4L5.19995 46.2L6.09995 48.4L29.9 38.5L10.4 55.3L11.9 57.1L31.5 40.3L18.2 62.4L20.2 63.6L33.7 41.4L28 66.7L30.4 67.2L35.9 42.3L38.2 67.7L40.5999 67.5L38.2999 42.2L48.0999 65.7L50.2999 64.8L40.4 41L57.2 60.5L59 59L41.9 39L64.5999 52.2L65.8 50.1L43.7 37.4L68.6 42.9L69.1 40.5L44.2 35L69.6 32.7Z"
                  fill="#eee"
                />
              </svg>
            </div>

            <div className="text-heading">
              <h1>
                A small crochet <br /> studio based in <br /> northampton
                england.
              </h1>
            </div>

            <div>
              <p className={cn('content-para', { 'is-inview': reveal })}>
                ...BASED UNDER THE COLD IN BARNSLEY <br />
                UNITED KINGDOM, THE CITY OF FARMERS AND THE <br /> MORE FAMOUS
                JOHN BARNES
              </p>
            </div>

            <div className="gif">
              <svg
                data-v-41f749ee=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 165 165"
                className="smiley">
                <g
                  data-v-41f749ee=""
                  fill="none"
                  fillRule="evenodd"
                  transform="translate(-.774 .226)">
                  <g data-v-41f749ee="" fill="#eee" className="face">
                    <path
                      data-v-41f749ee=""
                      d="M115.646 82.94c0 2.824 2.262 5.117 5.05 5.117 2.79 0 5.052-2.293 5.052-5.118 0-2.828-2.262-5.118-5.052-5.118-2.788 0-5.05 2.29-5.05 5.118M50.16 89.53c0 2.826-2.26 5.119-5.051 5.119-2.791 0-5.051-2.293-5.051-5.118 0-2.828 2.26-5.118 5.05-5.118 2.792 0 5.052 2.29 5.052 5.118M84.336 134.856c-26.995 0-39.336-20.064-39.85-20.918a2.347 2.347 0 0 1 .842-3.236 2.414 2.414 0 0 1 3.28.83c.456.756 11.533 18.6 35.599 18.6 24.192 0 35.27-17.844 35.73-18.604a2.414 2.414 0 0 1 3.28-.822 2.344 2.344 0 0 1 .837 3.232c-.511.854-12.852 20.918-39.718 20.918"></path>
                  </g>
                  <circle
                    data-v-41f749ee=""
                    cx="82.824"
                    cy="82.317"
                    r="80.5"
                    stroke="#eee"
                    strokeWidth="3"></circle>
                </g>
              </svg>
            </div>

            <div>
              <p
                className={cn('content-para', { 'is-inview': reveal })}
                data-scroll>
                WE BUILD KNITTED BAGS, AND HANDGLOVES,
                <br />
                WE TAKE CUSTOM ORDERS IN ADVANCE <br /> AND ARE LOOKING TO ADD
                MORE INVENTORY
              </p>

              <p
                className={cn('content-para', { 'is-inview': reveal })}
                data-scroll>
                EVERYPIECE WE CRAFT IS HANDMADE
                <br />
                WITH LOVE AND ATTENTION <br />
              </p>
            </div>

            <div>
              <p className={cn('content-para', { 'is-inview': reveal })}>
                IN A NUT SHELL <br />
                THIS IS WHAT WE DO
              </p>
            </div>

            <div>
              <p
                className={cn('content-para', { 'is-reveal': reveal })}
                data-scroll>
                ...BASED UNDER THE COLD IN BARNSLEY <br />
                UNITED KINGDOM, THE CITY OF FARMERS AND THE <br /> MORE FAMOUS
                JOHN BARNES
              </p>
            </div>

            <div>
              <p
                className={cn('content-para', { 'is-inview': reveal })}
                data-scroll>
                ...BASED UNDER THE COLD IN BARNSLEY <br />
                UNITED KINGDOM, THE CITY OF FARMERS AND THE <br /> MORE FAMOUS
                JOHN BARNES
              </p>
            </div>

            <div className="img-container">
              <div className="b-speed-block" data-scroll>
                <div className="b-image_wrapper" data-scroll data-scroll-repeat>
                  <div className="b-image" data-scroll>
                    <Image
                      className="b-speed-block_image img"
                      src="/bluelime.svg"
                      width={1126}
                      height={541.81}
                      alt="fivensix"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="o-middle clouds" data-scroll>
              <div className="flex ai-jc icon">
                <p>↓</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
