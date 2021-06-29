/* eslint-disable @next/next/no-html-link-for-pages */
import styled from 'styled-components';
import Link from 'next/link';
import { GitHub, Instagram, Twitter } from '../icons';

export default function Footer() {
  return (
    <FooterStyles data-scroll-section>
      <FooterInner>
        <FooterGrid>
          <FooterBlock>
            <h2 className="txt-center">
              GET UPDATES ON NEW STUFF <br /> YOU PROBABLY WANT TO KNOW <br />{' '}
              ABOUT IN YOUR INBOX.
            </h2>

            <Form>
              <FormFields>
                <div className="control-g">
                  <div className="control">
                    <label htmlFor="email-footer" className="control-label">
                      {/* Email Address */}
                      <input
                        id="email-footer"
                        type="text"
                        className="footer-input"
                        inputMode="email"
                        typeof="email"
                        autoComplete="email"
                        placeholder="Email Address"
                      />
                    </label>
                    <button type="submit" className="button button--skoll">
                      <span>Send</span>
                    </button>
                  </div>
                </div>
              </FormFields>
            </Form>
          </FooterBlock>

          <FooterBlock>
            <h2>Shop</h2>
            <MenuFooter>
              <li>
                <Link href="/">
                  <a className="link link--metis">Everything</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="link link--metis">Candles</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="link link--metis">Perfume Oils</a>
                </Link>
              </li>
            </MenuFooter>
          </FooterBlock>

          <FooterBlock>
            <h2>Info</h2>
            <MenuFooter>
              <li>
                <Link href="/about">
                  <a className="link link--metis">Our Story</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="link link--metis">FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/returns">
                  <a className="link link--metis">Returns</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="link link--metis">Terms of Service</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="link link--metis">Privacy Policy</a>
                </Link>
              </li>
            </MenuFooter>
          </FooterBlock>

          <FooterBlock>
            <h2>Social</h2>
            <MenuSocial>
              <a target="_blank" rel="noopener noreferrer" href="/">
                <GitHub />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="/">
                <Instagram />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="/">
                <Twitter />
              </a>
            </MenuSocial>

            <div className="disclaimer">
              <p>payments powered by Stripe</p>
            </div>
          </FooterBlock>
        </FooterGrid>
      </FooterInner>

      <div className="flex-sb">
        <p>© 2021 FivenSix Studio, All Rights Reserved.</p>
      </div>
    </FooterStyles>
  );
}

const FooterStyles = styled.footer`
  overflow: hidden;
  position: relative;
  border-top: 1px solid var(--border-color);
  background-color: var(--secondary-accent);

  .flex-sb {
    padding: 2rem 75px;
    p {
      font-weight: 500;
      @media (max-width: 699px) {
        text-align: center;
      }
    }
  }

  @media (min-width: 1024px) {
    border-top: initial;
  }
`;

const FooterInner = styled.footer`
  overflow: hidden;
  position: relative;
  @media (min-width: 1024px) {
    min-height: calc(100vh - 20.27778rem);
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-gap: 1px;
  gap: 1px;

  @media (min-width: 1024px) {
    margin: 55px 75px 30px 75px;
    padding: 10px 0;
    border-radius: 5px;
  }

  margin: 25px 1.35rem 15px 1.35rem;
  padding: 10px 0;
  background-color: var(--primary-accent);
  border-radius: 5px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
  }
`;

const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  text-align: left;

  &:last-child {
    border-right: 0;
  }

  @media (min-width: 940px) {
    padding: 2rem;
  }

  .txt-center {
    @media (max-width: 700px) {
      text-align: center;
    }
  }

  h2 {
    font-size: 24px;
    margin-bottom: var(--spacing-medium);
    line-height: 1.1;
    font-family: var(--primary-font);
    letter-spacing: normal;
  }

  .disclaimer {
    margin-top: auto;
  }
`;

const MenuFooter = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: var(--spacing-small);

  li {
    padding: 0.5rem 0;
  }
`;

const MenuSocial = styled.div`
  @media (min-width: 1200px) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
  }

  display: inline-flex;
  flex-wrap: wrap;
  margin: 1rem 0;

  a {
    width: 2rem;
    display: block;
    height: 2rem;

    svg {
      height: 100%;
      width: 100%;
      vertical-align: middle;
    }
  }
`;

export const Form = styled.form`
  margin-top: auto;
  position: relative;
`;

export const FormFields = styled.div`
  .control-g {
    display: grid;
    grid-row-gap: 0.5rem;
    row-gap: 0.5rem;

    @media (min-width: 768px) {
      display: flex;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .control {
    width: 100%;
    height: 50px;
    border-radius: initial;
    position: relative;
    border-bottom: 1px solid var(--border-color);
  }

  .control-label {
    padding-bottom: 3rem;
  }

  .footer-input {
    width: 100%;
    height: 50px;
    border: 0;
    background: none;
    padding: 5px;
    outline: none;
    @media (min-width: 768px) {
      padding-right: 80px;
    }
  }

  .button {
    pointer-events: auto;
    cursor: pointer;
    background: var(--button-black);
    border: none;
    padding: 1.5rem 3rem;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;
    text-transform: uppercase;
  }

  .button--skoll {
    position: absolute;
    right: 0.25px;
    top: 4px;
    overflow: hidden;
    border-radius: 50%;
    color: var(--button-white);
    width: 41px;
    height: 41px;
    padding: 0;
    font-weight: 500;
    font-size: 10px;
  }

  .button--skoll span {
    display: block;
    position: relative;
  }
`;
