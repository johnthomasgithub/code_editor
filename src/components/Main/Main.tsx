import React, { useState } from 'react'

import Tabs from '../Tabs/Tabs'
import { HtmlLogo, CssLogo, JsLogo } from '../../utils/Icons'
import Output from '../output/Output'
import Code from '../Code/Code'
const Main = () => {
  const [htmlContainer, setHtmlContainer] = useState('')
  const [cssContainer, setCssContainer] = useState('')
  const [jsContainer, setJsContainer] = useState('')

  const tabs = [
    { name: 'HTML', color: '', logo: <HtmlLogo width="15" height="15" /> },
    { name: 'CSS', color: '', logo: <CssLogo width="15" height="15" /> },
    { name: 'JS', color: '', logo: <JsLogo width="15" height="15" /> },
  ]
  const [selectedTab, setSelectedTab] = useState('HTML')
  return (
    <div className="main-parent">
      <Tabs
        tabs={tabs}
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
      />
      <div className="main-content">
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
        <Output html={htmlContainer} css={cssContainer} js={jsContainer} />
      </div>
    </div>
  )
}

export default Main
