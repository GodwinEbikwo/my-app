import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import SplitText from '../utils/Split3.min';
import cn from 'classnames';
import useOnScreen from '../lib/useOnScreen';

export default function Cta() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    const tl = gsap.timeline({});
    if (reveal) {
      const split = new SplitText('.cta__p, .cta__title', {
        type: 'lines',
        linesClass: 'split-child',
      });

      const splitParent = new SplitText('.cta__p, .cta__title', {
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
    <CtaContainer data-scroll-section ref={ref}>
      <CtaInner>
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
              fill="#161616"
            />
          </svg>
        </div>
        {/* 
        <p className="cta__p">
          <span>Never have to worry about the safety OR</span>{' '}
          <span>
            QUALITY of the products that you choose to put in your home.
          </span>
        </p> */}

        <div>
          <p className={cn('cta__p', { 'is-inview': reveal })} data-scroll>
            Never have to worry about the safety OR <br />
            QUALITY of the products that <br />
            you choose to put in your home.
          </p>
        </div>

        <div className="small-img-cont">
          <div className="b-speed-block" data-scroll>
            <div className="b-image_wrapper" data-scroll data-scroll-repeat>
              <div className="b-image" data-scroll>
                <Image
                  className="b-speed-block_image img"
                  src="/02.jpg"
                  width={640}
                  height={426}
                  alt="clay"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="title_container">
          <h1
            className={cn('cta__title', { 'is-inview': reveal })}
            data-scroll-offset="0, 900">
            At fivensix, we focus on things <br />
            that are really important to us <br />
            <br />
            your body and your scent
          </h1>
        </div>

        <button type="button" className="main-button">
          Learn more
        </button>
      </CtaInner>
    </CtaContainer>
  );
}

const CtaContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  
  
`;

const CtaInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  .gif {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: var(--spacing-large);

    .smiley {
      width: clamp(3vw, 5vw, 5rem);
      height: clamp(3vw, 5vw, 5rem);
      display: block;
      animation: rotation 10s infinite linear;
      will-change: transform;

      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    }
  }

  .small-img-cont {
    margin: var(--spacing-large) auto;
    transform-origin: top center;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 999px) {
      width: 66.66667%;
    }

    @media screen and (min-width: 1000px) {
      width: 25.166667vw;
    }
  }

  @media only screen and (max-width: 500px) {
    max-width: 90vw;
  }

  .cta__p {
    /* @media screen and (min-width: 700px) {
      max-width: 42.55222rem;
    }
    max-width: 30.55222rem; */
    line-height: 1.2;
    text-align: center;
    font-weight: 500;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 1s $easing;

    & > div {
      position: relative;
    }
    &.is-inview {
      opacity: 1;
      transition-delay: 0.4s;
    }
  }

  .title_container {
    margin-bottom: var(--spacing-large);

    .cta__title {
      text-align: center;
      line-height: 100%;
      opacity: 0;
      transition: opacity 1s $easing;
      font-family: 'Inter', sans-serif;
      letter-spacing: -0.05em;
      position: relative;
      overflow: hidden;
      font-weight: 500;

      & > div {
        position: relative;
      }
      &.is-inview {
        opacity: 1;
        transition-delay: 0.4s;
      }
    }
  }
`;

