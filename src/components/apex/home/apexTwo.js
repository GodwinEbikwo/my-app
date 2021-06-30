import styled from 'styled-components';

export default function ApexTwo() {
  return (
    <Container data-scroll-section>
      <div data-scroll className="container large-ptb">
        <div className="w-grid">
          <aside className="w-left">
            <h1>
              Our expert approach helps <br />
              us deliver stunning results.
            </h1>
          </aside>

          <aside className="w-right">
            <div className="max-w">
              <p>
                With over 30 years of experience, we had developed a eye for
                perfection. We have designed over 24 building spanning across 20
                countries and 50 cities to name a few below:
              </p>
            </div>

            <div className="o-layout_item">
              <ul className="c-summary-list">
                <li className="c-summary_list_item u-label" data-scroll>
                  <a href="#speed-control" data-scroll-to>
                    01. Adamawa Girei Yola
                    <span className="c-summary_list_icon u-icon">↓</span>
                  </a>
                </li>

                <li className="c-summary_list_item u-label" data-scroll>
                  <a href="#speed-control" data-scroll-to>
                    02. Abuja Fct Lugbe
                    <span className="c-summary_list_icon u-icon">↓</span>
                  </a>
                </li>

                <li className="c-summary_list_item u-label" data-scroll>
                  <a href="#speed-control" data-scroll-to>
                    03. Maiduguri Borno Kefa
                    <span className="c-summary_list_icon u-icon">↓</span>
                  </a>
                </li>

                <li className="c-summary_list_item u-label" data-scroll>
                  <a href="#speed-control" data-scroll-to>
                    04. Nasarawa Lafia Kuje
                    <span className="c-summary_list_icon u-icon">↓</span>
                  </a>
                </li>
              </ul>
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2em;
  }

  .w-left {
    h1 {
      line-height: 1.1;
      font-weight: 500;
      font-family: 'Inter', 'Helvetica Neue', -apple-system;
      letter-spacing: var(--letter-spacing-large);
      @media (min-width: 768px) {
        line-height: 1;
      }
    }
  }

  .w-right {
    @media (min-width: 768px) {
      padding-top: 1.35em;
    }
  }

  .max-w {
    max-width: 550px;
  }

  .c-summary-list {
    padding-top: var(--golden-ratio);
  }

  .c-summary_list_item {
    position: relative;
    display: flex;
    justify-content: space-between;

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
  }

  .c-summary_list_icon {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%) translateX(30px) rotate(0deg);
  }
`;
