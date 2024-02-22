import { useSpring, animated, easings, to } from "@react-spring/web";
import { useCallback, useMemo, useRef, useState } from "react";
import { interpolate } from "flubber2"; // ES6
import { COLOR_ARRAYS, ColorTypes, Colors, PATHS, SHAPE_COLOR_MAP, ShapeTypes, Shapes } from "../constants";
const AnimFeColorMatrix = animated("feColorMatrix");
import ArrowSVG from "../assets/arrow.svg";

const ShapeVisualizer = () => {
  // states
  const [shape, setShape] = useState<ShapeTypes>("blob1");
  const prevPath = useRef<ShapeTypes>("blob1");
  const [color, setColor] = useState<ColorTypes>("pink");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // event handlers + functions
  const handleClickShape = useCallback((e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const currentShape = e.currentTarget.getAttribute("data-current-shape");
    prevPath.current = currentShape as ShapeTypes;
    const selectedShape = getRandomShape(currentShape);
    setShape(selectedShape);

    const selectedColor = SHAPE_COLOR_MAP[selectedShape];
    if (selectedColor === "random") setColor(getRandomColor());
    else setColor(selectedColor);
  }, []);

  // react-spring
  const animatedProps = useSpring({
    stopColor1: COLOR_ARRAYS[color][0],
    stopColor2: COLOR_ARRAYS[color][1],
    dropShadowColor: COLOR_ARRAYS[color][2],
    innerShadowColor: COLOR_ARRAYS[color][3],
    config: {
      duration: 1000,
      easing: easings.easeInOutExpo,
    },
  });

  const interpolator = useMemo(() => {
    return interpolate(PATHS[prevPath.current], PATHS[shape]);
  }, [shape]);

  const [pathProps] = useSpring(
    () => ({
      from: { t: 0 },
      to: { t: 1 },
      config: {
        duration: 1000,
        easing: easings.easeInOutSine,
      },
      reset: prevPath.current !== PATHS[shape],
      onStart: () => setIsAnimating(true),
      onRest: () => setIsAnimating(false),
    }),
    [shape]
  );

  return (
    <>
      <div className="text-white">
        <svg
          width="500"
          height="500"
          viewBox="0 0 500 500"
          data-current-shape={shape}
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleClickShape}
          className={`${isAnimating ? "cursor-default pointer-events-none" : "cursor-pointer pointer-events-auto"}`}
        >
          <g filter="url(#shadows)">
            <animated.path
              fillRule="evenodd"
              clipRule="evenodd"
              d={to(pathProps.t, interpolator)}
              fill="url(#radial_gradient)"
            />
          </g>
          <defs>
            {/* Radial Gradient */}
            <animated.radialGradient id="radial_gradient">
              <animated.stop offset="0" stopColor={animatedProps.stopColor1} />
              <animated.stop offset="1" stopColor={animatedProps.stopColor2} />
            </animated.radialGradient>

            <filter
              id="shadows"
              x="0"
              y="0"
              width="600"
              height="600"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              {/* Drop Shadow */}
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="50" />
              <feComposite in2="hardAlpha" operator="out" />
              <AnimFeColorMatrix type="matrix" values={animatedProps.dropShadowColor} />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_184" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_184" result="shape" />

              {/* Inner Shadow */}
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="12" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <AnimFeColorMatrix type="matrix" values={animatedProps.innerShadowColor} />
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_21_5" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Click floater */}
      {isAnimating === false && (
        <div className="fixed top-[calc((100vh_-_500px)_/_2)] left-1/2 -translate-x-1/2 text-neutral-300 font-dotgothic flex flex-col items-center gap-2 animate-pulse">
          <div className="text-xl">click!</div>
          <img src={ArrowSVG} className="mr-2 rotate-90" />
        </div>
      )}
    </>
  );
};

export default ShapeVisualizer;

const getRandomShape = (current?: string | null) => {
  const nextShapes = [...Shapes].filter((shape) => shape !== current);
  const randomIdx = getRandomIdx(nextShapes);
  const selectedShape = nextShapes[randomIdx];
  return selectedShape;
};

const getRandomColor = () => {
  const randomIdx = getRandomIdx(Colors);
  const selectedColor = Colors[randomIdx];
  return selectedColor;
};

const getRandomIdx = (array: any[] | readonly any[]) => {
  const count = array.length;
  const randomIdx = Math.floor(Math.random() * count);
  return randomIdx;
};
