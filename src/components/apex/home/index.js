import styled from 'styled-components';

export default function Apex() {
  return (
    <Container data-scroll-section>
      <div data-scroll className="container large-ptb">
        <div className="a_grid">
          <aside className="o-layout_item">
            <h1 className="a_heading">
              <span>ECOX</span>
            </h1>
          </aside>

          <aside className="flex fd-c flex-end">
            <div className="a_label a_text">
              <span>Since 1990 -</span>
            </div>

            <div className="a_para a_text">
              <span className="a_txt_large">
                Architecture.
                <br />
                Planning.
                <br />
                Design.
              </span>
            </div>
          </aside>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  position: relative;

  .a_grid {
    @media screen and (min-width: 769px) {
      display: grid;
      grid-template-columns: 3fr 1fr;
    }
  }

  .flex {
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      flex-direction: initial;
      flex-direction: row-reverse;
    }
  }

  .a_label {
    margin-bottom: 2em;
    letter-spacing: var(--letter-spacing-medium);
    @media screen and (max-width: 768px) {
      display: flex;
      margin-bottom: 0;
      & > span {
        display: inline-flex;
        align-items: flex-end;
        justify-content: flex-end;
        font-size: 16px;
      }
    }
  }

  .a_para {
    padding-bottom: 3.5em;
    @media screen and (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .a_text {
    @media screen and (min-width: 1000px) {
      padding-left: 4em;
    }
  }

  .a_txt_large {
    font-size: 45px;
    letter-spacing: var(--letter-spacing-large);
    line-height: 1.2;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }

  .a_heading {
    font-size: 25vw;
    font-family: 'Inter', 'Helvetica Neue', -apple-system;
    font-weight: 500;
    line-height: 1;
    letter-spacing: var(--letter-spacing-large);
    @media screen and (max-width: 768px) {
      font-size: 32vw;
      text-align: start;
    }
  }
`;
