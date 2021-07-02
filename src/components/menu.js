/* eslint-disable react/prop-types */
import Image from 'next/image';
import styled from 'styled-components';
import { useCart } from '../lib/cartState';
import Link from 'next/link';
import cn from 'classnames';

export default function Menu() {
  const { cartOpen, closeCart } = useCart();

  return (
    <>
      <section className={cn('menu', { 'open': cartOpen })}>
        <div className="scroll-container">
          <header className="flex flex-end">
            <button type="button" onClick={closeCart} className="button_label">
              <span>close</span>
            </button>
          </header>
        </div>

        <ul className="c-summary-list">
          <li className="c-summary_list_item u-label" data-scroll>
            <a href="#speed-control" data-scroll-to>
              01. Projects
              <span className="c-summary_list_icon u-icon">↓</span>
            </a>
          </li>

          <li className="c-summary_list_item u-label" data-scroll>
            <a href="#speed-control" data-scroll-to>
              02. About
              <span className="c-summary_list_icon u-icon">↓</span>
            </a>
          </li>

          <li className="c-summary_list_item u-label" data-scroll>
            <a href="#speed-control" data-scroll-to>
              03.Team
              <span className="c-summary_list_icon u-icon">↓</span>
            </a>
          </li>

          <li className="c-summary_list_item u-label" data-scroll>
            <a href="#speed-control" data-scroll-to>
              04. Journal
              <span className="c-summary_list_icon u-icon">↓</span>
            </a>
          </li>
        </ul>
      </section>
      <Overlay open={cartOpen} />
    </>
  );
}

const MenuStyles = styled.section`
  outline: none;
  position: fixed;
  background-color: var(--primary-accent);
  height: 100vh;
  top: 0;
  right: 0;
  width: 10%;
  min-width: 490px;
  bottom: 0;
  transform: translate3d(100%, 0, 0);
  transition: transform 1.2s cubic-bezier(0.77, 0, 0.18, 1) 0.1s;
  will-change: transform;
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${(props) =>
    props.open &&
    `transform: translate3d(0, 0, 0); transition: transform 1s cubic-bezier(.76,0,.24,1);`};
  cursor: pointer;

  @media (max-width: 766px) {
    min-width: 100%;
  }

  .scroll-container {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    padding: 1rem 1.35rem;
  }

  header {
    padding: 1rem 1.35rem;

    h2 {
      font-size: clamp(3rem, 4vw, 4rem);
      font-family: 'Roslindale', sans-serif;
    }
  }

  .c-summary-list {
    padding: var(--golden-ratio);
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
    transform: translateY(-50%) translateX(30px) rotate(-90deg);
  }

  .button_label {
    width: 95px;
    height: 40px;
    background: var(--button-black);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: 'Monument Extended', 'Inter', sans-serif;

    span {
      display: inline-block;
      font-weight: 400;
      letter-spacing: var(--letter-spacing-small);
      font-size: 1.35em;
      color: var(--primary-white);
      text-transform: uppercase;
    }
  }
`;

const Overlay = styled.div`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(9, 9, 9, 0.9);
  z-index: 4;
  transition: opacity 1.2s cubic-bezier(0.77, 0, 0.18, 1),
    visibility 1.2s cubic-bezier(0.77, 0, 0.18, 1);
  cursor: pointer;
  ${(props) =>
    props.open && `opacity: 1; visibility: visible; transition-delay: 0.1s;`};
`;
