import React, { useEffect, useRef } from 'react';
import './Scroller.css'; // Import the CSS file

const Scroller = ({ items, direction = 'left', speed = 'fast' }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (scroller) {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
      }
    }

    function addAnimation() {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <div
      className="scroller"
      data-direction={direction}
      data-speed={speed}
      ref={scrollerRef}
    >
      <div className="scroller__inner">
        {items.map((item, index) =>
          typeof item === 'string' ? (
            <>
            <div key={index} >
              {item}
            </div>
            <div className=' self-center bg-white w-3 h-3 rounded-full' />
           </>
          ) : (
            <img key={index} src={item.src} alt={item.alt || ''} />
          )
        )}
      </div>
    </div>
  );
};

export default Scroller;
