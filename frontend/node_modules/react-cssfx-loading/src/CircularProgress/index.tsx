import React from "react";
import Styles from "./CircularProgress.module.css";

interface CircularProgressProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  duration?: string;
}

const CircularProgress: React.FC<CircularProgressProps & React.SVGProps<SVGSVGElement>> = ({ className = "", color = "#0d6efd", width = "3em", height = "3em", style, duration = "2s", ...others }) => {
  return (
    <svg {...others} crossOrigin="anonymous" viewBox="25 25 50 50" style={{ ...style, ["--width" as any]: width, ["--height" as any]: height, ["--color" as any]: color, ["--duration" as any]: duration }} className={`${Styles.svg} ${className}`}>
      <circle className={Styles.circle} cx="50" cy="50" r="20"></circle>
    </svg>
  );
};

export default CircularProgress;
