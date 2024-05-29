import { FC } from 'react'
import { Sunmao, SunmaoBlockProps } from '..'

export interface RenderProps {
  blocks: SunmaoBlockProps[]
}

export const Render: FC<RenderProps> = ({ blocks }) => {
  const comppnentMap = Sunmao.componentMap

  console.log('render', blocks)

  return (
    <>
      {blocks.map(blcok => {
        const Component = comppnentMap.get(blcok.name || '')?.component

        if (Component) {
          return <Component key={blcok.id} />
        } else {
          return null
        }
      })}
    </>
  )
}
