import React from 'react';
import { GridContainer } from './productstyles';

export default function Product() {
  return (
    <section data-scroll-section>
      <GridContainer>
        <div className="left">
          <div className="left_top">top bitch</div>
        </div>

        <div className="right">
          <h1>hi</h1>
        </div>

        <div className="bottom">
          <h1>bottom</h1>
        </div>
      </GridContainer>
    </section>
  );
}
