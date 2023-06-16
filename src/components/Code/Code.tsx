import React, { useEffect, useState } from 'react'

interface Props {
  storeCode: Function
  storedCode: string
}

const Code = (props: Props) => {
  useEffect(() => {
    const codeEditor: any = document.getElementById('codeEditor')
    const lineCounter: any = document.getElementById('lineCounter')
    codeEditor?.addEventListener('scroll', () => {
      if (lineCounter) lineCounter.scrollTop = codeEditor.scrollTop
      if (lineCounter) lineCounter.scrollLeft = codeEditor.scrollLeft
    })

    codeEditor?.addEventListener('keydown', (e: any) => {
      const { keyCode } = e
      const { value, selectionStart, selectionEnd }: any = codeEditor
      if (keyCode === 9) {
        // TAB = 9
        e.preventDefault()
        codeEditor.value =
          value.slice(0, selectionStart) + '\t' + value.slice(selectionEnd)
        codeEditor.setSelectionRange(selectionStart + 2, selectionStart + 2)
      }
    })

    let lineCountCache = 0
    function line_counter() {
      const lineCount: any = codeEditor.value.split('\n').length
      const outarr = []
      if (lineCountCache != lineCount) {
        for (let x = 0; x < lineCount; x++) {
          outarr[x] = x + 1 + '.'
        }
        if (lineCounter) lineCounter.value = outarr.join('\n')
      }
      lineCountCache = lineCount
    }
    codeEditor.addEventListener('input', () => {
      line_counter()
    })
  }, [])
  return (
    <>
      <textarea id="lineCounter" className="text-area" wrap="off" readOnly>
        1.
      </textarea>

      <textarea
        spellCheck={false}
        className="text-area"
        id="codeEditor"
        value={props.storedCode}
        onChange={(ev) => {
          props.storeCode(ev.target.value)
        }}
      ></textarea>
    </>
  )
}

export default Code
