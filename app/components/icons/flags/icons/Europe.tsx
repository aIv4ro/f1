
import { IconProps } from "../types/iconProps";

export function Europe(
  {className}: IconProps
) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg"   id="flag-icons-eu" viewBox="0 0 640 480">
      <defs>
        <g id="d">
          <g id="b">
            <path id="a" d="m0-1-.3 1 .5.1z"/>
            <use transform="scale(-1 1)"/>
          </g>
          <g id="c">
            <use  transform="rotate(72)"/>
            <use  transform="rotate(144)"/>
          </g>
          <use  transform="scale(-1 1)"/>
        </g>
      </defs>
      <path fill="#039" d="M0 0h640v480H0z"/>
      <g fill="#fc0" transform="translate(320 242.3) scale(23.7037)">
        <use  width="100%" height="100%" y="-6"/>
        <use  width="100%" height="100%" y="6"/>
        <g id="e">
          <use  width="100%" height="100%" x="-6"/>
          <use  width="100%" height="100%" transform="rotate(-144 -2.3 -2.1)"/>
          <use  width="100%" height="100%" transform="rotate(144 -2.1 -2.3)"/>
          <use  width="100%" height="100%" transform="rotate(72 -4.7 -2)"/>
          <use  width="100%" height="100%" transform="rotate(72 -5 .5)"/>
        </g>
        <use  width="100%" height="100%" transform="scale(-1 1)"/>
      </g>
    </svg>
    
  )
}