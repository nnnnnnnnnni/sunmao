/* eslint-disable no-unused-vars */
import {
  DragEvent,
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'
import { DragContextProps } from './types'
import { SunmaoComponentMetaProps } from '@sunmao/core'
import { generateNewBlockByMeta } from 'src/utils/block'
import { usePreviewContext } from '.'

const DRAG_DATATRANSFER_DATA_TYPE = 'application/json'

const DragContext = createContext({} as DragContextProps)

export const useDragContext = () => {
  return useContext(DragContext)
}

export const DragProvider: FC<PropsWithChildren> = ({ children }) => {
  const { handleInsertNewBlock,renderJson } = usePreviewContext()
  const [isOver, setIsOver] = useState(false)

  const handleDragStart = useCallback((event: DragEvent, component: any) => {
    event.dataTransfer.setData(DRAG_DATATRANSFER_DATA_TYPE, JSON.stringify(component))
  }, [])

  const handleDrop = useCallback(
    (event: Event) => {
      const storedData = (event as unknown as DragEvent).dataTransfer.getData(
        DRAG_DATATRANSFER_DATA_TYPE
      )
      const metaData = JSON.parse(storedData) as SunmaoComponentMetaProps
      const block = generateNewBlockByMeta(metaData)
      handleInsertNewBlock(block);

      if(typeof window !== 'undefined') {
        // eslint-disable-next-line no-undef
        window.postMessage(JSON.stringify(renderJson))
      }
    },
    [handleInsertNewBlock, renderJson]
  )

  const handleDragEnter = useCallback((event: Event) => {
    setIsOver(true)
  }, [])

  const handleDragOver = useCallback((event: Event) => {
    event.preventDefault()
  }, [])

  const handleDragLeave = useCallback((event: Event) => {
    setIsOver(false)
    const _event = event as unknown as DragEvent
    _event.dataTransfer.clearData(DRAG_DATATRANSFER_DATA_TYPE)
    event.preventDefault()
  }, [])

  return (
    <DragContext.Provider
      value={{
        handleDragStart,
        handleDragOver,
        handleDrop,
        handleDragEnter,
        handleDragLeave,
        isOver,
      }}
    >
      {children}
    </DragContext.Provider>
  )
}
