import React from "react";

interface CurveSeparator1Props {
  className?: string;
  width?: number;
  height?: number;
}

const CurveSeparator1: React.FC<CurveSeparator1Props> = ({
  className,
  width = 1728,
  height = 133,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1728 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_100_95)">
        <path
          d="M0 40C0 40 358.384 107.749 588 100.5C832.319 92.7864 966.559 39.6276 1211 40C1413.6 40.3087 1728 83 1728 83V132.5H864H0V40Z"
          fill="#FFF7EB"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_100_95"
          x="-20"
          y="-0.00195312"
          width="1768"
          height="132.502"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-18" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_100_95"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_100_95"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CurveSeparator1;
