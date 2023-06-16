interface Props {
  variant?: string
  color?: string
  onClick?: any
  className?: string
  size?: string
  style?: any
  width?: string
  height?: string
}
export const HtmlLogo = (props: Props) => {
  return (
    <svg
      fill="none"
      height={props.height}
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 124 141.53199999999998"
      style={props.style}
      className={props.className}
    >
      <path
        d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
        fill="#e34f26"
      />
      <path
        d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
        fill="#ef652a"
      />
      <path
        d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
        fill="#fff"
      />
    </svg>
  )
}
export const CssLogo = (props: Props) => {
  return (
    <svg
      fill="none"
      height={props.height}
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 124 141.53"
      style={props.style}
      className={props.className}
    >
      <path
        d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
        fill="#1b73ba"
      />
      <path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7" />
      <path
        d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
        fill="#fff"
      />
    </svg>
  )
}
export const JsLogo = (props: Props) => {
  return (
    <svg
      fill="none"
      height={props.height}
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 124 141.53199999999998"
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    >
      <path
        d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
        fill="#e9ca32"
      />
      <path
        d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
        fill="#ffde25"
      />
      <g fill="#fff">
        <path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z" />
      </g>
    </svg>
  )
}

export const Minimize = (props: Props) => {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#ffffff"
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <path
          fill="#ffffff"
          fillRule="evenodd"
          d="M11 8a1 1 0 001 1h6a1 1 0 100-2h-3.586l3.793-3.793a1 1 0 00-1.414-1.414L13 5.586V2a1 1 0 10-2 0v6zm-2 4a1 1 0 00-1-1H2a1 1 0 100 2h3.586l-3.793 3.793a1 1 0 101.414 1.414L7 14.414V18a1 1 0 102 0v-6z"
        ></path>{' '}
      </g>
    </svg>
  )
}

export const Maximize = (props: Props) => {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#ffffff"
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <path
          fill="#ffffff"
          fillRule="evenodd"
          d="M19 2a1 1 0 00-1-1h-6a1 1 0 100 2h3.586l-3.793 3.793a1 1 0 001.414 1.414L17 4.414V8a1 1 0 102 0V2zM1 18a1 1 0 001 1h6a1 1 0 100-2H4.414l3.793-3.793a1 1 0 10-1.414-1.414L3 15.586V12a1 1 0 10-2 0v6z"
        ></path>{' '}
      </g>
    </svg>
  )
}
