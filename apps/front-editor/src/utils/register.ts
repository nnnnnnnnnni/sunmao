import { Sunmao } from '@sunmao/core'
import dynamic from 'next/dynamic'

const CommonBanner = dynamic(
  async () => {
    const { CommonBanner } = await import('@sunmao/materials')
    return CommonBanner
  },
  { ssr: false }
)

Sunmao.registerComponent(CommonBanner, {
  name: 'Common Banner',
  previewImage: 'https://iph.href.lu/1200x600?text="CommonBanner"',
  group: 'Banner',
  inputs: [],
})
