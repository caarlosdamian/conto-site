import React, { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  slides: unknown[];
  children: (item: unknown) => React.ReactNode;
  notMoveOnSelection?: boolean;
}

export const Slider = ({
  slides,
  children,
  notMoveOnSelection = false,
}: Props) => {
  const [actualPosition, setActualPosition] = useState(0);
  const isCliked = useRef(false);
  const gotoNext = useCallback(() => {
    if (actualPosition === slides.length - 1) {
      setActualPosition(0);
    } else {
      setActualPosition((prev) => prev + 1);
    }
  }, [actualPosition, slides.length]);

  useEffect(() => {
    if (!isCliked.current) {
      const interval = setInterval(() => {
        gotoNext();
      }, 4000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [gotoNext]);

  const goToSelection = (id: number) => {
    setActualPosition(id);
    if (notMoveOnSelection) {
      isCliked.current = true;
    }
  };
  return (
    <div className="flex flex-col gap-16">
      {children && children(slides[actualPosition])}
      <div className="flex items-center gap-2 justify-center">
        {slides.map((_, index) => (
          <div
            onClick={() => goToSelection(index)}
            key={`circle-${index}`}
            className={`w-[18px] h-[18px] cursor-pointer ${
              index === actualPosition ? 'bg-[#043873]' : 'bg-[#4F9CF9]'
            }  rounded-full`}
          ></div>
        ))}
      </div>
    </div>
  );
};
