/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styled from 'styled-components';

export default function Landing() {
  return (
    <section data-scroll-section>
      <BannerContainer>
        <BannerCover>
          <BannerBg className="cover-image picture">
            <div className="b-speed-block" data-scroll>
              <div className="b-image_wrapper" data-scroll data-scroll-repeat>
                <div className="b-image" data-scroll>
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/godwinebikwo/image/upload/f_auto/v1618872388/header_o0krbf.png"
                    alt="bg-girl"
                  />
                </div>
              </div>
            </div>
          </BannerBg>
          <BannerInner>
            <div className="banner__card grid-d">
              <div className="banner__card-inner">
                <div className="b__card-inner-container">
                  <h1>Brighten your day with perfume oils </h1>
                </div>

                <div className="b__card_flex-sb">
                  <p className="b_card_desc">
                    With our appetite for aromatherapy and natural perfumery,
                    Bloom wants you to smell good without breaking the bank
                  </p>

                  <Link href="/login" passHref>
                    <Button type="button">
                      <span>Get started</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </BannerInner>
        </BannerCover>
      </BannerContainer>
    </section>
  );
}

const BannerContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  /* margin-bottom: 3rem; */
`;

const BannerCover = styled.div`
  position: relative;
  display: block;
  width: 100%;
  background-color: #fafafa;
  overflow: hidden;

  @media only screen and (min-width: 640px) {
    height: calc(100vw + 8rem);
  }

  @media only screen and (min-width: 769px) {
    height: auto;
  }
`;

const BannerBg = styled.div`
  .picture {
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  img {
    transform: translateZ(0);
  }

  &.cover-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vw + 8rem);

    @media only screen and (min-width: 769px) {
      width: 100%;
      height: calc(98% - 1px);
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4rem;
      background-color: #fafafa;
      z-index: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const BannerInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  max-width: 160rem;
  margin: 0 auto;
  height: 100%;
  z-index: 2;

  @media only screen and (min-width: 769px) {
    height: 100vh;
    min-height: 100%;
  }

  @media only screen and (min-width: 1024px) {
    height: 70vh;
    min-height: 100%;
  }

  @media only screen and (min-width: 1025px) {
    min-height: 76rem;
  }

  .banner__card {
    margin-top: 19.2rem;
    opacity: 1;
    transform: translateZ(0);

    @media only screen and (min-width: 640px) {
      margin-top: 0;
    }
  }

  .grid-d {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(14, 7.142857142857142%);
    grid-gap: 0;
    padding: 0 2rem;
    @media only screen and (min-width: 769px) {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(20, 5%);
      grid-gap: 0;
      padding: 0;
    }
  }

  .banner__card-inner {
    position: relative;
    grid-column: 1/15;
    padding: 3.8rem 7.14286% 6.4rem;

    @media only screen and (min-width: 640px) {
      grid-column: 2/14;
      padding: 5.2rem 9.09091% 7.3rem;
    }

    @media only screen and (min-width: 769px) {
      grid-column: 3/19;
    }

    @media only screen and (min-width: 1100px) {
      grid-column: 3/14;
      min-width: 88rem;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
    }

    .b__card-inner-container {
      position: relative;
      z-index: 0;

      .b__card-subtitle {
        position: relative;
        padding-left: 66px;
        text-align: left;
        font-family: 'Syncopate';
        text-transform: uppercase;

        :before {
          content: ' ';
          position: absolute;
          left: 0;
          top: 50%;
          width: 46px;
          background: #000;
          height: 1px;
        }
      }

      h1 {
        margin-top: 1.2rem;
        font-size: 4rem;
        line-height: 1.3;
        font-weight: 300;
        letter-spacing: -0.011em;
        @media only screen and (min-width: 1025px) {
          max-width: 40vw;
          font-size: 6rem;
        }
      }
    }

    .b__card_flex-sb {
      @media only screen and (min-width: 1025px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .b_card_desc {
      position: relative;
      width: 85.71429%;
      margin-top: 1.6rem;
      margin-bottom: 3.5rem;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.8;
      letter-spacing: normal;
      color: var(--lighterDark);
      @media only screen and (min-width: 1025px) {
        max-width: 23vw;
      }
    }
  }
`;

const Button = styled.button`
  pointer-events: auto;
  cursor: pointer;
  background: var(--red);
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  font-family: inherit;
  font-size: 1.2rem;
  position: relative;
  display: inline-block;
  width: auto;
  text-transform: uppercase;
  border-radius: 999px;
  color: var(--text-color);
  transition: transform 0.3s linear, opacity 0.3s linear;

  &:hover {
    transform: scale(1.02);
    opacity: 0.75;
  }
`;
