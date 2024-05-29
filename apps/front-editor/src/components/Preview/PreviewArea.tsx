'use client'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { usePreviewContext } from './PreviewProvider'
import { useDragContext } from './DragProvider'
import { Root, createRoot } from 'react-dom/client'
import { Render } from '@sunmao/core'

import { CommonBanner } from '@sunmao/materials'

const srcDoc = `
<!DOCTYPE html>
<html lang="en">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes" />
<style>html,body{width:100%;height:100%;margin:0}</style>
<body>
<div id="dnd-container" style="width: 100%;min-height: 100%"></div>
</body>
</html>
`

export const PreviewArea = () => {
  const { currentDeviceSize } = usePreviewContext()
  const { handleDragOver, handleDrop, handleDragLeave, handleDragEnter } = useDragContext()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const { renderJson } = usePreviewContext()
  const rootRef = useRef<Root | null>(null) // Ref to store the root

  useEffect(() => {
    const contentWindow = iframeRef.current?.contentWindow
    if (contentWindow) {
      contentWindow.addEventListener('dragenter', handleDragEnter)
      contentWindow.addEventListener('dragover', handleDragOver)
      contentWindow.addEventListener('drop', handleDrop)
      contentWindow.addEventListener('dragleave', handleDragLeave)
    }

    return () => {
      if (contentWindow) {
        contentWindow?.removeEventListener('dragenter', handleDragEnter)
        contentWindow?.removeEventListener('dragover', handleDragOver)
        contentWindow?.removeEventListener('drop', handleDrop)
        contentWindow?.removeEventListener('dragleave', handleDragLeave)
      }
    }
  }, [handleDragEnter, handleDragLeave, handleDragOver, handleDrop])

  useLayoutEffect(() => {
    if (typeof document !== 'undefined') {
      // eslint-disable-next-line no-undef
      const head = document.head.cloneNode(true)
      const contentDocument = iframeRef.current?.contentDocument
      if (contentDocument?.head) {
        // contentDocument.head.remove()
        contentDocument.documentElement.insertBefore(head, contentDocument.body)
      }
    }
  }, [renderJson])

  useEffect(() => {
    const contentDocument = iframeRef.current?.contentDocument
    if (contentDocument) {
      const divContainer = contentDocument.getElementById('dnd-container')
      if (divContainer) {
        if (!rootRef.current) {
          rootRef.current = createRoot(divContainer)
        }
        rootRef.current?.render(<Render blocks={renderJson} />)
      }
    }
  }, [renderJson])

  return (
    <div
      className='shadow-2xl transition-all duration-150 bg-white'
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: `${currentDeviceSize[0]}px`,
        height: `${currentDeviceSize[1]}px`,
      }}
    >
      <iframe ref={iframeRef} id='dnd-iframe' srcDoc={srcDoc} className='w-full h-full' />
    </div>
  )
}
