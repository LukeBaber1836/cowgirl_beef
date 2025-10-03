import React from "react";

interface CurveSeparator3Props {
  className?: string;
  width?: number;
  height?: number;
}

const CurveSeparator3: React.FC<CurveSeparator3Props> = ({
  className,
  width = 1728,
  height = 148,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1728 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_104_104)">
        <path
          d="M0 89.4316C0 89.4316 668 11.6746 920.5 51.2065C1438.96 132.378 1728 42.482 1728 42.482V147.5H0V89.4316Z"
          fill="#FFF7EB"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_104_104"
          x="-20"
          y="0"
          width="1768"
          height="147.5"
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
          <feOffset dy="-20" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_104_104"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_104_104"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CurveSeparator3;
