import styled from 'styled-components';
import Image from 'next/image';

export default function ApexSix() {
  return (
    <Container data-scroll-section>
      <div data-scroll className="container large-ptb">
        <div className="w-grid">
          <aside className="w-left">
            <div className="w-30-yrs flex ai-jc fd-c">
              <div>
                <h1>1.5
                  <sup>K</sup>
                </h1>
                <span>
                  Years of architecture
                  <br />
                  planning and design
                </span>
                <br />
              </div>
            </div>
          </aside>

          <aside className="w-right">
            <div className="b-speed-block" data-scroll>
              <div className="b-image_wrapper" data-scroll data-scroll-repeat>
                <div className="b-image" data-scroll>
                  <Image
                    className="b-speed-block_image img"
                    src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625122578/spacejoy-kz_xZG9ufbk-unsplash_czwcmh.jpg"
                    width={640}
                    height={640}
                    alt="fivensix"
                  />
                </div>
              </div>
            </div>
            <div className="flex fd-c mt-10">
              <h2>Color Change and Furniture Replacemnts</h2>
              <span>Lagos, Ikoyi</span>
            </div>
          </aside>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  border-top: 1px solid var(--border-color);

  .w-grid {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1em;
    }
  }

  h2 {
    font-weight: 600;
    letter-spacing: var(--letter-spacing-medium);
    line-height: 100%;
  }

  .mt-10 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .w-30-yrs {
    position: relative;
    @media (min-width: 600px) {
      margin-top: 10em;
    }

    sup {
      line-height: 0;
      position: relative;
      vertical-align: baseline;
      font-size: 3rem;
      top: -5em;
      @media only screen and (min-width: 787px) {
        font-size: 19%;
        top: -3.5em;
      }
    }

    h1 {
      font-size: 24vw;
      line-height: 1;
      font-family: 'Inter', 'Helvetica Neue', -apple-system;
      font-weight: 600;
      letter-spacing: -0.1em;
      text-align: center;
      @media (max-width: 600px) {
        font-size: 50vw;
      }
    }

    span {
      display: block;
      line-height: 100%;
      text-align: center;
      letter-spacing: var(--letter-spacing-medium);
    }
  }
`;
