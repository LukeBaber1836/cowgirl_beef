import React from "react";

interface CurveSeparator4Props {
  className?: string;
  width?: number;
  height?: number;
}

const CurveSeparator4: React.FC<CurveSeparator4Props> = ({
  className,
  width = 1728,
  height = 131,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1728 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_105_18)">
        <g filter="url(#filter0_d_105_18)">
          <path
            d="M0 109.373C0 109.373 537.851 45.8177 883.081 46.0004C1224.35 46.181 1756 109.373 1756 109.373V131H0V109.373Z"
            fill="hsl(7, 68%, 26%, 100%)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_105_18"
          x="-20"
          y="16"
          width="1796"
          height="125"
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
          <feOffset dy="-10" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_105_18"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_105_18"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_105_18">
          <rect width="1728" height="131" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CurveSeparator4;
