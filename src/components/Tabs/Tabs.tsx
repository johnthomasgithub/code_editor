import React from 'react'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'

interface Iprops {
  tabs: Array<object>
  setSelectedTab: Function
  selectedTab: string
  htmlContainer: string
  jsContainer: string
  cssContainer: string
}

const Tabs = (props: Iprops) => {
  const handleDownload = () => {
    const zip = new JSZip()
    const folder: any = zip.folder('Code')
    // Content of the file
    const htmlContent = `
    <html>
      <head>
        <title>Example HTML File</title>
        <link rel="stylesheet" type="text/css" href="./styles.css" /> 
        </head>
      <body>
<div  >
${props.htmlContainer}
</div>
      </body>
      <script type="text/javascript" src="./script.js"></script>  
      </html>
  `

    // // Create a Blob object with the content
    // const htmlBlob = new Blob([htmlContent], {
    //   type: 'text/html;charset=utf-8',
    // })
    // const cssBlob = new Blob([props.cssContainer], {
    //   type: 'text/css;charset=utf-8',
    // })
    // const jsBlob = new Blob([props.jsContainer], {
    //   type: 'text/javascript;charset=utf-8',
    // })

    // // Save the file using FileSaver.js
    // saveAs(htmlBlob, 'index.html')
    // saveAs(cssBlob, 'styles.css')
    // saveAs(jsBlob, 'script.js')

    folder.file('index.html', htmlContent)

    folder.file('styles.css', props.cssContainer)

    folder.file('script.js', props.jsContainer)

    // Generate the zip file
    zip.generateAsync({ type: 'blob' }).then((content) => {
      // Save and download the zip file
      saveAs(content, 'Code.zip')
    })
  }
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
      <button onClick={handleDownload} className="download-code tab">
        Download Code
      </button>
    </div>
  )
}

export default Tabs
