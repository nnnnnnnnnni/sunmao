/* eslint-disable no-unused-vars */
import { SunmaoBlockProps } from '@sunmao/core'
import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'
import { PreviewContextProps, deviceEnum, handleInsertNewBlockOptions } from './types'

export const ZOOM_MAX_NUMBER = 150
export const ZOOM_MIN_NUMBER = 1
export const ZOOM_UPDATE_STEP = 1

export const DESKTOP_WIDTH = 1400
export const DESKTOP_HEIGHT = DESKTOP_WIDTH * 0.5625
export const TABLET_WIDTH = 820
export const TABLET_HEIGHT = TABLET_WIDTH * 1
export const MOBILE_WIDTH = 390
export const MOBILE_HEIGHT = MOBILE_WIDTH * 2.16

const PreviewContext = createContext<PreviewContextProps>({} as PreviewContextProps)

export const usePreviewContext = () => {
  return useContext(PreviewContext)
}

export const PreviewProvider: FC<PropsWithChildren> = ({ children }) => {
  const [zoom, setZoom] = useState('100')
  const [currentDevice, setCurrentDevice] = useState<deviceEnum>(deviceEnum.MOBILE)
  const [currentActiveBlockId, setCurrentActiveBlockId] = useState<string>()
  const [renderJson, setRenderJson] = useState<SunmaoBlockProps[]>([])
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const handleInsertNewBlock = useCallback(
    (block: SunmaoBlockProps, options?: handleInsertNewBlockOptions) => {
      const baseBlockId = options?.baseBlock
        ? (options?.baseBlock as SunmaoBlockProps).id || (options?.baseBlock as string)
        : ''

      if (!baseBlockId) {
        setRenderJson([...renderJson, block])
      } else {
        const index = renderJson.findIndex(b => b.id === baseBlockId)
        if (index !== -1) {
          const newRenderJson = [...renderJson]
          if (options?.insertBefore) {
            newRenderJson.splice(index, 0, block)
          } else {
            newRenderJson.splice(index + 1, 0, block)
          }
          setRenderJson(newRenderJson)
        } else {
          setRenderJson([...renderJson, block])
        }
      }
    },
    [renderJson]
  )

  const handleSetZoom = useCallback((newZoom: string | number) => {
    const _newZoom = typeof newZoom === 'string' ? parseInt(newZoom) : newZoom

    if (Number.isNaN(_newZoom)) {
      return
    }

    if (_newZoom > ZOOM_MAX_NUMBER) {
      return setZoom(String(ZOOM_MAX_NUMBER))
    }

    if (_newZoom < ZOOM_MIN_NUMBER) {
      return setZoom(String(ZOOM_MIN_NUMBER))
    }

    setZoom(String(_newZoom))
  }, [])

  const currentDeviceSize = useMemo<[number, number]>(() => {
    if (currentDevice === deviceEnum.DESKTOP) return [DESKTOP_WIDTH, DESKTOP_HEIGHT]
    if (currentDevice === deviceEnum.TABLET) return [TABLET_WIDTH, TABLET_HEIGHT]
    if (currentDevice === deviceEnum.MOBILE) return [MOBILE_WIDTH, MOBILE_HEIGHT]
    return [DESKTOP_WIDTH, DESKTOP_HEIGHT]
  }, [currentDevice])

  return (
    <PreviewContext.Provider
      value={{
        zoom,
        setZoom: handleSetZoom,
        currentDevice,
        setCurrentDevice,
        currentDeviceSize,
        handleInsertNewBlock,
        currentActiveBlockId,
        setCurrentActiveBlockId,
        renderJson,
        iframeRef
      }}
    >
      {children}
    </PreviewContext.Provider>
  )
}
