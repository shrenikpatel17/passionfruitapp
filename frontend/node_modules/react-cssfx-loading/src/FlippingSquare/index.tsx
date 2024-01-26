import React from "react";
import Styles from "./FlippingSquare.module.css";

interface FlippingSquareProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  duration?: string;
}

const FlippingSquare: React.FC<FlippingSquareProps & React.HTMLProps<HTMLDivElement>> = ({ className = "", color = "#0d6efd", width = "2em", height = "2em", style, duration = "1s", ...others }) => {
  return (
    <div {...others} style={{ ...style, ["--width" as any]: width, ["--height" as any]: height, ["--color" as any]: color, ["--duration" as any]: duration }} className={`${Styles.box} ${className}`}>
      <div className={Styles.plane}></div>
    </div>
  );
};

export default FlippingSquare;
