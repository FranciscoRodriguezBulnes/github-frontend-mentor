import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    {...props}
  >
    <path d="M320 64C178.6 64 64 178.6 64 320s114.6 256 256 256c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1-4.1-9.2-13.7-14.9-23.8-14.1-4.9.4-9.8.6-14.8.6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4-1.2-10.1-8.6-18.3-18.5-20.5-18.3-4.1-37.3-6.3-56.7-6.3z" />
  </svg>
);
export default SvgComponent;
