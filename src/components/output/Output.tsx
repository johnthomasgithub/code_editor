import React, { useEffect } from 'react'

interface Props {
  html: string
  css: string
  js: any
}

const Output = (props: Props) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.innerHTML = props.js
    // Append the script element to the document body
    document.body.appendChild(script)
  }, [props.js])

  return (
    <div className="output-parent">
      <span className="output-head">Output</span>
      <div
        className="output-section"
        dangerouslySetInnerHTML={{ __html: props.html }}
      ></div>
      <style>{props.css}</style>
      <script>{`${props.js}`}</script>
    </div>
  )
}

export default Output
