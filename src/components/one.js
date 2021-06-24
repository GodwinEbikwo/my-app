import Image from 'next/image';

export default function One() {
  return (
    <section className="one" data-scroll-section>
      <div className="container large-ptb">
        <div className="flex fd-c">
          <div className="o-summary flex wrap fd-r">
            <div className="img-container">
              <div className="b-speed-block" data-scroll>
                <div className="b-image_wrapper" data-scroll data-scroll-repeat>
                  <div className="b-image" data-scroll>
                    <Image
                      className="b-speed-block_image img"
                      src="/02.jpg"
                      width={1320}
                      height={560}
                      alt="fivensix"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex sb">
              <div className="">
                <p>Our story</p>
              </div>

              <div className="">
                <p className="o-summary_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  illo explicabo nisi numquam adipisci
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-header_line" data-scroll data-scroll-offset="100" />
      </div>
    </section>
  );
}
