import React from "react";
import Styles from "./Hypnosis.module.css";

interface HypnosisProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  duration?: string;
}

const Hypnosis: React.FC<HypnosisProps & React.HTMLProps<HTMLDivElement>> = ({ className = "", color = "#0d6efd", width = "3em", height = "3em", style, duration = "2s", ...others }) => {
  return (
    <div {...others} style={{ ...style, ["--width" as any]: width, ["--height" as any]: height, ["--color" as any]: color, ["--duration" as any]: duration }} className={`${Styles.loader} ${className}`}>
      <div className={Styles.outer}></div>
      <div className={Styles.middle}></div>
      <div className={Styles.inner}></div>
    </div>
  );
};

export default Hypnosis;
