import styled from 'styled-components';
import Image from 'next/image';

export default function ApexThree() {
  return (
    <Container data-scroll-section>
      <div data-scroll className="container large-ptb">
        <div className="w-grid">
          <aside className="w-left">
            <h1>Enviromentally cautious</h1>

            <div className="img-container">
              <div className="b-speed-block" data-scroll>
                <div className="b-image_wrapper" data-scroll data-scroll-repeat>
                  <div className="b-image" data-scroll>
                    <Image
                      className="b-speed-block_image img"
                      src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625073949/ben-allan-BIeC4YK2MTA-unsplash_1_qyaflh.jpg"
                      width={640}
                      height={640}
                      alt="fivensix"
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <aside className="w-right">
            <div className="max-w">
              <p>
                With over 25 years in the game, we adapted our techniques to be
                in line with modern standards that are not harmful to our dear
                planet.
              </p>
              <p>
                We joined forces with planet-4-u to give 0.1% of our income to
                sustainable projects to offset our emissions.
              </p>
            </div>

            <div className="o-layout_item">
              <ul className="c-summary-list">
                <li className="c-summary_list_item u-label" data-scroll>
                  <a href="#speed-control" data-scroll-to>
                    01. Architectural Design
                    <span className="c-summary_list_icon u-icon">↓</span>
                  </a>
                </li>

                <li className="c-summary_list_item u-label" data-scroll>
                  <a href="#speed-control" data-scroll-to>
                    02. Historic Preservation
                    <span className="c-summary_list_icon u-icon">↓</span>
                  </a>
                </li>

                <li className="c-summary_list_item u-label" data-scroll>
                  <a href="#speed-control" data-scroll-to>
                    03. 3D Visualization
                    <span className="c-summary_list_icon u-icon">↓</span>
                  </a>
                </li>

                <li className="c-summary_list_item u-label" data-scroll>
                  <a href="#speed-control" data-scroll-to>
                    04. Interior Design
                    <span className="c-summary_list_icon u-icon">↓</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-30-yrs flex ai-jc fd-c">
              <div>
                <h1>25</h1>
                <span>
                  Years of architecture
                  <br />
                  planning and design
                </span>
                <br />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  border-top: 1px solid var(--border-color);

  .w-30-yrs {
    position: relative;

    h1 {
      font-size: 24vw;
      line-height: 1;
      font-family: 'Inter', 'Helvetica Neue', -apple-system;
      font-weight: 500;
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
      letter-spacing: var(--letter-spacing-large);
      font-size: 5vw;
      @media (min-width: 600px) {
        font-size: 3vw;
      }
    }
  }

  .w-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2em;
  }

  .w-left {
    h1 {
      line-height: 1.1;
      font-weight: 400;
      font-family: 'Inter', 'Helvetica Neue', -apple-system;
      letter-spacing: var(--letter-spacing-large);
      @media (min-width: 768px) {
        line-height: 1;
      }
    }
  }

  .w-right {
    @media (min-width: 768px) {
      padding-top: 0.5em;
    }
  }

  .max-w {
    max-width: 550px;
    p {
      &:not(:last-child) {
        margin-bottom: var(--golden-ratio);
      }
    }
    @media (min-width: 1024px) {
      max-width: unset;
      display: flex;
      justify-content: space-between;
      gap: 1em;

      & > p {
        margin-bottom: 0;
      }
    }
  }

  .c-summary-list {
    padding-top: var(--golden-ratio);
  }

  .c-summary_list_item {
    position: relative;
    display: flex;
    justify-content: space-between;
    transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);

    &:hover::after {
      background-color: var(--primary-black);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      height: 1px;
      background-color: var(--border-color);
      transform: scaleX(0);
    }

    &.is-inview {
      transform: none;
      opacity: 1;

      &::after {
        transform: scaleX(1);
      }
    }

    a {
      display: block;
      padding: 8px 0;
    }
  }

  .u-label {
    text-transform: uppercase;
    transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
    &:hover {
      color: var(--primary-black);
    }
  }

  .c-summary_list_icon {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%) translateX(30px) rotate(0deg);
  }

  .img-container {
    padding-top: var(--golden-ratio);
  }
`;
