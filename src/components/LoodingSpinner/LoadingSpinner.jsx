import React from "react";
import "./LoadingSpinner.css"; // Add this file for custom styling if needed

const LoadingSpinner = () => {
  return (
    <div className="loading-overlay">
      <div className="flex items-center justify-center h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          width={100}
          height={100}
          style={{
            shapeRendering: "auto",
            background: "rgba(255, 255, 255, 0.8)",
          }}
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <circle
              strokeWidth="3"
              stroke="#05cc47"
              fill="none"
              r="0"
              cy="50"
              cx="50"
            >
              <animate
                begin="0s"
                calcMode="spline"
                keySplines="0 0.2 0.8 1"
                keyTimes="0;1"
                values="0;40"
                dur="1s"
                repeatCount="indefinite"
                attributeName="r"
              ></animate>
              <animate
                begin="0s"
                calcMode="spline"
                keySplines="0.2 0 0.8 1"
                keyTimes="0;1"
                values="1;0"
                dur="1s"
                repeatCount="indefinite"
                attributeName="opacity"
              ></animate>
            </circle>
            <circle
              strokeWidth="3"
              stroke="#4dc47d"
              fill="none"
              r="0"
              cy="50"
              cx="50"
            >
              <animate
                begin="-0.5s"
                calcMode="spline"
                keySplines="0 0.2 0.8 1"
                keyTimes="0;1"
                values="0;40"
                dur="1s"
                repeatCount="indefinite"
                attributeName="r"
              ></animate>
              <animate
                begin="-0.5s"
                calcMode="spline"
                keySplines="0.2 0 0.8 1"
                keyTimes="0;1"
                values="1;0"
                dur="1s"
                repeatCount="indefinite"
                attributeName="opacity"
              ></animate>
            </circle>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default LoadingSpinner;
