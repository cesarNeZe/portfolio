import React, { useEffect } from 'react';

import KUTE from 'kute.js';

import me from '../images/me.jpeg';

export const Blob: React.FC = () => {
  useEffect(() => {
    const tween = KUTE.fromTo(
      '#blob1',
      { path: '#blob1' },
      { path: '#blob2' },
      { repeat: 999, duration: 1000, yoyo: true }
    );
    tween.start();
  }, []);

  return (
    <>
      <section>
        <svg
          id="visual"
          viewBox="0 0 540 960"
          width="350"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <defs>
            <pattern id="image" x="0" y="0" width="100%" height="100%">
              <image xlinkHref={me} width="450" height="610" />
            </pattern>
          </defs>
          <g transform="translate(276.28604724323253 491.8942234048062)">
            <path
              id="blob1"
              d="M162.2 -162.2C201.4 -123 218.2 -61.5 214.8 -3.4C211.3 54.7 187.7 109.4 148.5 143.7C109.4 178 54.7 192 3.5 188.5C-47.7 185.1 -95.5 164.1 -140.5 129.8C-185.5 95.5 -227.7 47.7 -227.8 -0.1C-227.8 -47.8 -185.7 -95.7 -140.7 -134.9C-95.7 -174 -47.8 -204.5 6.8 -211.3C61.5 -218.2 123 -201.4 162.2 -162.2"
              fill="url(#image)" // Reference to the image element
              stroke="#BB004B"
              strokeWidth="6"
            />
          </g>
          {/* Hidden blob shape */}
          <g
            transform="translate(277.95030195334846 485.81679187386425)"
            style={{ visibility: 'hidden' }}
          >
            <path
              id="blob2"
              d="M160.9 -172.1C194.6 -127.3 198.3 -63.6 190.4 -8C182.4 47.7 162.8 95.5 129.1 139.3C95.5 183.1 47.7 223.1 -5.8 228.9C-59.4 234.7 -118.8 206.5 -156.3 162.6C-193.8 118.8 -209.4 59.4 -209.8 -0.4C-210.1 -60.1 -195.2 -120.2 -157.7 -165C-120.2 -209.9 -60.1 -239.4 1.8 -241.2C63.6 -243 127.3 -216.9 160.9 -172.1"
              fill="none"
              stroke="#BB004B"
              strokeWidth="6"
            />
          </g>
        </svg>
      </section>
    </>
  );
};
