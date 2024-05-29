import { FC, PropsWithChildren } from 'react'
import { SunmaoBlockProps } from '..'

export const BlockWrapper: FC<PropsWithChildren<SunmaoBlockProps>> = ({ children, ...block }) => {
  return (
    <div>
      <div>{block.name}</div>
      <div>{children}</div>
    </div>
  )
}
