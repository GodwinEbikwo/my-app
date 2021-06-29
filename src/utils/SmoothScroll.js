import React, { createContext, useEffect, useState } from 'react';

export const SmoothScrollContext = createContext({
  scroll: null,
});

export const SmoothScrollProvider = ({ children, options }) => {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      document.documentElement.classList.add('is-ready');
    }, 300);
  }, []);

  useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import('locomotive-scroll')).default;
          setScroll(
            new LocomotiveScroll({
              el:
                document.querySelector('#js-scroll') ??
                '[data-scroll-container]' ??
                undefined,
              smooth: true,
              getSpeed: true,
              getDirection: true,
              smartphone: {
                smooth: false,
              },
              reloadOnContextChange: true,
              ...options,
            })
          );
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`);
        }
      })();
    }

    return () => {
      scroll && scroll.destroy();
    };
  }, [scroll]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SmoothScrollContext.Provider value={{ scroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

SmoothScrollContext.displayName = 'SmoothScrollContext';
SmoothScrollProvider.displayName = 'SmoothScrollProvider';
