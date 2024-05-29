import { SunmaoBlockProps, SunmaoComponentMetaProps } from '@sunmao/core'
import { v4 as uuidv4 } from 'uuid'

export const generateNewBlockId = (prefix = 'block-') => {
  const id = uuidv4().replace(/-/g, '').substring(0, 18)

  return prefix + id
}

export const generateNewBlockByMeta = (
  meta: SunmaoComponentMetaProps,
  options?: { id?: string }
): SunmaoBlockProps => {
  const id = options?.id || generateNewBlockId()

  return {
    id,
    name: meta.name,
    children: [],
    responsiveStyles: {
      desktop: {},
      tablet: {},
      mobile: {},
    },
    data: {},
    meta: {},
  }
}
