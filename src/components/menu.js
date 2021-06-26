/* eslint-disable react/prop-types */
import Image from 'next/image';
import styled from 'styled-components';
import { useCart } from '../lib/cartState';

export default function Menu() {
  const { cartOpen, closeCart } = useCart();

  return (
    <>
      <MenuStyles open={cartOpen}>
        <div className="scroll-container">
          <header className="flex sb">
            <h2>Summary</h2>
            <button type="button" onClick={closeCart}>
              <span>close</span>
            </button>
          </header>
        </div>
      </MenuStyles>
      <Overlay open={cartOpen} />
    </>
  );
}

const MenuStyles = styled.section`
  outline: none;
  position: relative;
  background-color: #161616;
  position: fixed;
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
      color: white;
      font-size: clamp(3rem, 4vw, 4rem);
      font-family: 'Roslindale', sans-serif;
    }

    button {
      span {
        color: white;
      }
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
