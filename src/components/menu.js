/* eslint-disable react/prop-types */
import Image from 'next/image';
import styled from 'styled-components';
import CartItem, { Icon } from './CartItem';
import CloseButton from '../styles/CloseButton';
import Supreme from '../styles/Supreme';
import { useCart } from '../../lib/cartState';

export default function Cart() {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();
  const [click, setClick] = useState(false);
  if (!me) return null;

  return (
    <section className="menu" data-scroll-section>
      <div className={click ? 'menu_open' : 'menu_styles'}>
        <header>
          <h2>
            YOUR <br /> <span id="span-b">Basket</span>
          </h2>
          <button type="button" onClick={closeCart}>
            <Image src="/close.svg" width={40} height={40} alt="close-button" />
          </button>
        </header>

        <footer>
          <div className="paddingX_Y">
            <h1>Order Infomation</h1>
          </div>
        </footer>
      </div>
      {/* <Overlay open={cartOpen} /> */}
    </section>
  );
}

// const Overlay = styled.div`
//   opacity: 0;
//   visibility: hidden;
//   pointer-events: none;
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(9, 9, 9, 0.8);
//   z-index: 4;
//   transition: opacity 1.2s cubic-bezier(0.77, 0, 0.18, 1),
//     visibility 1.2s cubic-bezier(0.77, 0, 0.18, 1);
//   cursor: pointer;
//   ${(props) =>
//     props.open && `opacity: 1; visibility: visible; transition-delay: 0.1s;`};
// `;
