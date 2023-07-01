import React, { useState } from 'react'

const DeveloperConsole = () => {
  const [logs, setLogs]: any[] = ([] = useState([]))

  const handleConsoleLog = (...args: any) => {
    const formattedLogs = args.map((arg: any) => {
      if (typeof arg === 'object') {
        return JSON.stringify(arg)
      }
      return arg.toString()
    })

    setLogs((prevLogs: any) => [...prevLogs, formattedLogs.join(' ')])
  }

  // Redirect console methods to the custom console
  console.log = handleConsoleLog
  console.warn = handleConsoleLog
  console.error = handleConsoleLog
  console.info = handleConsoleLog
  console.debug = handleConsoleLog
  console.assert = (condition, ...args) => {
    if (!condition) {
      handleConsoleLog(`Assertion failed:`, ...args)
    }
  }
  console.table = (data, columns) => {
    if (Array.isArray(data) && data.length > 0) {
      const keys = columns || Object.keys(data[0])
      handleConsoleLog(keys.join('\t'))
      data.forEach((row) => {
        const values = keys.map((key) => String(row[key]))
        handleConsoleLog(values.join('\t'))
      })
    }
  }

  return (
    <div className="developer-console">
      <h3>Console Output:</h3>
      <ul>
        {logs.map((log: any, index: number) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  )
}

export default DeveloperConsole
