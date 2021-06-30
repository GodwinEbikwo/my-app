/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';

export default function Shop() {
  return (
    <ProductCollection data-scroll-section>
      <ProductCollectionWrapper>
        <ProductCollectionGrid>
          <ProductCollectionList>
            <ProductCollectionItem className="product-collection-item">
              <ProductCollectionCover className="p-c-c picture">
                <img
                  src="https://res.cloudinary.com/godwinebikwo/image/upload/v1621008026/tom-crew-XtyxEBiA8D8-unsplash_mjpah4.jpg"
                  alt="scented-perfume-oil"
                  loading="lazy"
                />
              </ProductCollectionCover>
              <ProductCollectionCard className="mb-right">
                <div className="product__collection__card__title">
                  <div className="text-inner">
                    <h1>Perfume Oils</h1>
                    <div className="sub-text-inner">
                      <span>awọn epo ikunra</span>
                    </div>
                  </div>
                </div>
                <div className="product__collection__card__button">
                  <button type="button" className="main-button">
                    shop now
                  </button>
                </div>
              </ProductCollectionCard>
            </ProductCollectionItem>

            <ProductCollectionItem className="product-collection-item">
              <ProductCollectionCover className="p-c-c picture">
                <div className="b-speed-block" data-scroll>
                  <div
                    className="b-image_wrapper"
                    data-scroll
                    data-scroll-repeat>
                    <div className="b-image" data-scroll>
                      <img
                        className="b-speed-block_image img"
                        alt="candles"
                        src="https://res.cloudinary.com/godwinebikwo/image/upload/v1620917535/tom-crew-iUFS1GCpEbk-unsplash_atfu0n.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </ProductCollectionCover>
              <ProductCollectionCard className="left">
                <div className="product__collection__card__title">
                  <div className="text-inner">
                    <h1>Scented Candles</h1>
                    <div className="sub-text-inner">
                      <span>Kyandiran kamshi</span>
                    </div>
                  </div>
                </div>
                <div className="product__collection__card__button">
                  <button type="button" className="main-button">
                    shop now
                  </button>
                </div>
              </ProductCollectionCard>
            </ProductCollectionItem>
          </ProductCollectionList>
        </ProductCollectionGrid>
      </ProductCollectionWrapper>
    </ProductCollection>
  );
}

const ProductCollection = styled.section`
  position: relative;
  background-color: var(--primary-accent);
  z-index: 1;
  &::before {
    @media only screen and (min-width: 640px) {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 8rem;
      margin: 0;
    }
  }
`;

const ProductCollectionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1.6rem 2rem 0;
  overflow: hidden;
  @media only screen and (min-width: 640px) {
    padding: 0;
  }
`;

const ProductCollectionGrid = styled.div`
  max-width: 160rem;
  margin: 0 auto;
  padding: 0;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(14, 7.142857142857142%);
  grid-gap: 0;

  @media only screen and (min-width: 769px) {
    grid-template-columns: repeat(20, 5%);
    padding: 0 2rem;
  }
`;

const ProductCollectionList = styled.ul`
  list-style: none;
  grid-column: 1/15;
  @media only screen and (min-width: 640px) {
    grid-column: 2/14;
  }
  @media only screen and (min-width: 769px) {
    grid-column: 3/19;
  }
`;

const ProductCollectionItem = styled.li`
  &::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 80.95238095238095%;
  }

  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 8rem;

  @media only screen and (min-width: 640px) {
    &:nth-child(odd) {
      left: 0;
    }
  }

  @media only screen and (min-width: 640px) {
    &::before {
      display: block;
      content: '';
      width: 100%;
      padding-top: 53.125%;
    }
  }

  &.product-collection-item {
  }
`;

const ProductCollectionCover = styled.div`
  background-color: var(--secondary-accent);
  @media only screen and (min-width: 640px) {
    &.product-collection-item {
      left: 0;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 3;
  }

  &.p-c-c {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    @media only screen and (min-width: 640px) {
      position: absolute;
      top: 0;
      width: 93.75%;
      height: 88.28%;
    }
  }

  &.picture {
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const ProductCollectionCard = styled.div`
  position: absolute;
  bottom: -3.8rem;
  width: calc(2rem + 71.42857%);
  padding: 1.9rem 2.4rem 3.8rem;
  background-color: var(--primary-accent);
  align-items: center;
  z-index: 3;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 8%);

  @media only screen and (max-width: 639px) {
    position: absolute;
    left: -3rem;
    width: calc(2rem + 71.42857%);
    align-items: center;

    &.mb-right {
      position: absolute;
      left: unset;
      right: -3rem;
      width: calc(2rem + 71.42857%);
      align-items: center;
    }
  }

  @media only screen and (min-width: 640px) {
    left: unset;
    right: 0;
    bottom: 0;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(9, 11.11111111111111%);
    grid-gap: 0;
    padding: 6.4rem 0;
    width: 93.75%;
    max-width: 72rem;
    z-index: 3;

    &.left {
      left: -3.2rem;
      right: inherit;
      bottom: 0;
      display: grid;
      width: 100%;
      grid-template-columns: repeat(9, 11.11111111111111%);
      grid-gap: 0;
      padding: 6.4rem 0;
      width: 93.75%;
      max-width: 72rem;
      @media only screen and (min-width: 1024px) {
        left: -6rem;
      }
    }
  }

  .product__collection__card__title {
    grid-column: 2/7;

    .text-inner {
      display: inline-block;
      vertical-align: middle;

      h1 {
        line-height: 1.2;
        @media only screen and (min-width: 640px) {
          max-width: 30vw;
        }
      }
    }
    .sub-text-inner {
      display: flex;
      @media only screen and (min-width: 640px) {
        padding-top: 0.5rem;
        justify-content: flex-end;
      }
    }
  }

  .product__collection__card__button {
    margin-top: 1.2rem;
    @media only screen and (min-width: 640px) {
      margin-top: 0;
      grid-column: 7/9;
    }
  }

  @media only screen and (min-width: 640px) {
    &.product-collection-item:nth-child(odd) {
      right: 0;
      left: inherit;
    }
  }
`;
