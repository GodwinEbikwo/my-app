import styled from 'styled-components';
import Image from 'next/image';

export default function ApexFive() {
  return (
    <Container data-scroll-section>
      <div data-scroll className="container large-ptb">
        <div className="w-grid">
          <aside className="w-left">
            <div className="b-speed-block" data-scroll>
              <div className="b-image_wrapper" data-scroll data-scroll-repeat>
                <div className="b-image" data-scroll>
                  <Image
                    className="b-speed-block_image img"
                    src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625124781/spacejoy-umAXneH4GhA-unsplash_ynu5ej.jpg"
                    width={640}
                    height={640}
                    alt="fivensix"
                  />
                </div>
              </div>
            </div>
            <div className="flex fd-c mt-10">
              <h2>Bedroom Remodeliing</h2>
              <span>London, Sulfolk</span>
            </div>
          </aside>

          <aside className="w-right">
            <div className="b-speed-block" data-scroll>
              <div className="b-image_wrapper" data-scroll data-scroll-repeat>
                <div className="b-image" data-scroll>
                  <Image
                    className="b-speed-block_image img"
                    src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625125367/spacejoy-3z_61bnbFhM-unsplash_ls7rw1.jpg"
                    width={640}
                    height={640}
                    alt="fivensix"
                  />
                </div>
              </div>
            </div>
            <div className="flex fd-c mt-10">
              <h2>House Remodelling</h2>
              <span>Lagos, Ikoyi</span>
            </div>
          </aside>

          <aside className="w-right">
            <div className="b-speed-block" data-scroll>
              <div className="b-image_wrapper" data-scroll data-scroll-repeat>
                <div className="b-image" data-scroll>
                  <Image
                    className="b-speed-block_image img"
                    src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625124905/spacejoy-jfVTVARGCao-unsplash_qxae0d.jpg"
                    width={640}
                    height={640}
                    alt="fivensix"
                  />
                </div>
              </div>
            </div>
            <div className="flex fd-c mt-10">
              <h2>Kitchen Interior Design</h2>
              <span>Kano, Kano</span>
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
      grid-template-columns: 3fr 2fr 1fr;
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
`;
