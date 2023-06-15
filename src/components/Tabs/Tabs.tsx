import React from 'react'

interface Iprops {
  tabs: Array<object>
  setSelectedTab: Function
  selectedTab: string
}

const Tabs = (props: Iprops) => {
  return (
    <div className="tabs-parent">
      {props.tabs.map((tab: any, index: any) => {
        return (
          <div
            onClick={() => props.setSelectedTab(tab.name)}
            className={`tab ${
              props.selectedTab === tab.name ? 'highlight' : ''
            } `}
            key={index}
          >
            <span>{tab.name}</span>
            <span className="logo">{tab.logo}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Tabs
