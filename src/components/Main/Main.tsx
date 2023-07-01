import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Tabs from '../Tabs/Tabs'
import { toggleLoader } from '../../Redux/Reducer/Reducers'
import { HtmlLogo, CssLogo, JsLogo } from '../../utils/Icons'
import Output from '../output/Output'
import Code from '../Code/Code'
import DeveloperConsole from '../Console/DeveloperConsole'
const Main = () => {
  const [htmlContainer, setHtmlContainer] = useState(``)
  const [cssContainer, setCssContainer] = useState('')
  const [jsContainer, setJsContainer] = useState('')
  const [selectedTab, setSelectedTab] = useState('HTML')
  const [minMax, setMinMax] = useState(false)
  const dispatch = useDispatch()
  const apiLoader = useSelector((state: any) => state.apiLoader.loader)

  const tabs = [
    { name: 'HTML', color: '', logo: <HtmlLogo width="15" height="15" /> },
    { name: 'CSS', color: '', logo: <CssLogo width="15" height="15" /> },
    { name: 'JS', color: '', logo: <JsLogo width="15" height="15" /> },
  ]

  useEffect(() => {
    dispatch(toggleLoader(true))
    setTimeout(() => {
      dispatch(toggleLoader(false))
    }, 3000)
  }, [htmlContainer, cssContainer, jsContainer])

  return (
    <div className="main-parent">
      <Tabs
        tabs={tabs}
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
        htmlContainer={htmlContainer}
        cssContainer={cssContainer}
        jsContainer={jsContainer}
      />
      <div className="main-content">
        {!minMax && (
          <div className="code-section">
            {selectedTab === 'HTML' && (
              <Code storedCode={htmlContainer} storeCode={setHtmlContainer} />
            )}
            {selectedTab === 'CSS' && (
              <Code storedCode={cssContainer} storeCode={setCssContainer} />
            )}
            {selectedTab === 'JS' && (
              <Code storedCode={jsContainer} storeCode={setJsContainer} />
            )}
          </div>
        )}
        <Output
          minMax={minMax}
          maximize={setMinMax}
          html={htmlContainer}
          css={cssContainer}
          js={jsContainer}
        />
        {/* <DeveloperConsole /> */}
      </div>
    </div>
  )
}

export default Main
