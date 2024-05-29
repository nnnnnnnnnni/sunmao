/* eslint-disable no-unused-vars */
import { SunmaoBlockProps } from '@sunmao/core'
import { DragEvent, RefObject } from 'react'

export enum deviceEnum {
  DESKTOP,
  TABLET,
  MOBILE,
}

export interface DragContextProps {
  handleDragStart: (ev: DragEvent<Element>, component: any) => void
  handleDragOver: (ev: Event) => void
  handleDrop: (ev: Event) => void
  handleDragEnter: (ev: Event) => void
  handleDragLeave: (ev: Event) => void
  isOver: boolean
}

export interface PreviewContextProps {
  zoom: string
  setZoom: (value: string | number) => void
  currentDevice: deviceEnum
  setCurrentDevice: (value: deviceEnum) => void
  currentDeviceSize: [number, number]
  currentActiveBlockId?: string
  setCurrentActiveBlockId: (id: string) => void
  handleInsertNewBlock: (value: SunmaoBlockProps, options?: handleInsertNewBlockOptions) => void
  renderJson: SunmaoBlockProps[];
  iframeRef: RefObject<HTMLIFrameElement>
}

export interface handleInsertNewBlockOptions {
  insertBefore?: boolean
  baseBlock?: SunmaoBlockProps | string
}
