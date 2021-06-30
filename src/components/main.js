import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import Link from 'next/link';
import Menu from './menu';
import { useCart } from '../lib/cartState';
import Image from 'next/image';

export default function Main() {
  const ref = useRef(null);
  const { openCart } = useCart();

  useEffect(() => {
    const el = ref.current;
    const tl = gsap.timeline({});

    tl.fromTo(
      el.querySelector('.main-bg'),
      {
        scale: 1.4,
        ease: 'power3.easeOut',
      },
      {
        scale: 0,
      }
    )
      .from(el.querySelector('.header_container'), {
        y: 40,
        opacity: 0,
        ease: 'power3.easeOut',
      })
      .from(
        el.querySelector('.main_heading .span_inner'),
        {
          yPercent: 100,
          duration: 0.7,
          delay: 0.8,
          ease: 'power3.easeOut',
          stagger: {
            amount: 0.5,
          },
        },
        '-=.7'
      )
      .fromTo(
        el.querySelector('.main_line'),
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
        },
        '-=.8'
      )
      .from(el.querySelector('.main-button'), {
        opacity: 0,
        ease: 'none',
      });
  }, []);

  return (
    <MainBg className="main-bg" data-scroll-section ref={ref}>
      {/* <section className="header">
        <div className="container x-sml-ptb">
          <div className="header_container flex sb wrap">
            <div className="links">
              <span className="header_heading_label">
                <Link href="/">
                  <a>Contact</a>
                </Link>
              </span>
            </div>

            <div className="header_name">
              <h2 className="header_title header_heading_label h_logo">
                BLUU LIME
              </h2>
            </div>

            <div className="links">
              <button
                className="header_heading_label"
                type="button"
                onClick={openCart}
                style={{ outline: 'none', fontSize: 'inherit' }}
                aria-label="open cart">
                Menu
              </button>
            </div>
          </div>
        </div>
        <Menu />
      </section> */}

      <Banner className="g_right">
        <div className="alt-center">
          <div className="flex ai-jc fd-c">
            <div className="hero-title">
              <h1 className="main_heading span_overflow">
                <span className="span_inner">
                  TO YOUR RESUABLE <br />
                  HOMEWARES AND ESSENTIALS
                </span>
              </h1>
            </div>
            <button className="main-button">Start Shopping</button>
          </div>
        </div>
      </Banner>
    </MainBg>
  );
}

const MainBg = styled.div`
  height: 100vh;
  position: relative;
`;

const Banner = styled.div`
  .hero-title {
    .main_heading {
      white-space: nowrap;
      line-height: 100%;
      margin-bottom: var(--spacing-medium);
      text-align: center;
    }
  }

  @media screen and (min-width: 599px) {
    height: 100vh;
  }

  .left-item {
    text-align: right;

    &.pd {
      margin-bottom: 0.5rem;
      padding-top: 3.3vw;
    }

    h2 {
      display: inline-block;
      padding-top: 0;
      font-size: 1.5rem;
      line-height: 2vw;
      font-weight: 400;
      letter-spacing: -0.02em;
      text-transform: uppercase;

      @media screen and (min-width: 991px) {
        font-size: 2.5rem;
      }
    }

    .left-item-row {
      &.b {
        display: flex;
        align-items: center;
      }
      @media screen and (min-width: 991px) {
        user-select: none;
      }

      .left-item-txt {
        line-height: 1.15;
        letter-spacing: -0.015em;
        text-transform: uppercase;
        text-align: right;

        @media screen and (min-width: 991px) {
          font-size: 2vw;
        }
      }
    }
  }

  .left,
  .right {
    position: absolute;
    right: 1.5vw;
    bottom: 3.5vw;
    max-width: 60vw;
    @media screen and (min-width: 991px) {
      max-width: 30vw;
      bottom: 1vw;
    }
  }

  .left {
    left: 1.25vw;
    text-align: left;
    bottom: 3.3vw;
    max-width: 38vw;

    p {
      font-size: clamp(3rem, 6.5vw, 6.5rem);
      line-height: 0.89;
      font-family: ivypresto-display, sans-serif;
      font-weight: 300;
      letter-spacing: -0.03em;
      text-transform: uppercase;
    }
  }
`;
