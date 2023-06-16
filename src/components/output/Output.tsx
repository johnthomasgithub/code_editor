import React, { useEffect } from 'react'
import Loader from '../Loader/Loader'

interface Props {
  html: string
  css: string
  js: any
  maximize: Function
  minMax: boolean
}
import { useSelector } from 'react-redux'
import { Maximize, Minimize } from '../../utils/Icons'

const Output = (props: Props) => {
  const apiLoader = useSelector((state: any) => state.apiLoader.loader)

  useEffect(() => {
    const script = document.createElement('script')
    script.innerHTML = props.js
    document.body.appendChild(script)
  }, [props.js])

  return (
    <div className={`output-parent ${props.minMax ? 'full-width' : ''}`}>
      {apiLoader && <Loader style={{ width: '70px', heigth: '70px' }} />}
      <div className={`output-head ${props.minMax ? 'center' : ''}`}>
        <div>Output</div>
        <div>
          {!props.minMax ? (
            <Maximize
              style={{ width: '20px', heigth: '20px', cursor: 'pointer' }}
              onClick={() => props.maximize(!props.minMax)}
            />
          ) : (
            <Minimize
              onClick={() => props.maximize(!props.minMax)}
              style={{ width: '20px', heigth: '20px', cursor: 'pointer' }}
            />
          )}
        </div>
      </div>
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
