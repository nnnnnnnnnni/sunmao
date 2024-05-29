import { Render, SunmaoBlockProps } from '@sunmao/core'
import '../../utils/register'
import { FC } from 'react'

export const PreviewContainer: FC<{renderJson: SunmaoBlockProps[]}> = ({renderJson}) => {
  return <Render blocks={renderJson} />
}
