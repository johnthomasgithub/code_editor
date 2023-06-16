import React from 'react'
import loader from '../../Assets/Images/loader.gif'
import { useSelector } from 'react-redux'
interface Props {
  style?: any
}
const Loader = (props: Props) => {
  const apiLoader = useSelector((state: any) => state.apiLoader.loader)

  return (
    <div className={`loader-parent ${apiLoader ? 'blurry' : ''}`}>
      <img
        src={loader}
        style={props.style}
        className="loader-gif"
        alt="loader"
      ></img>
    </div>
  )
}

export default Loader
