import { SunmaoComponentMetaProps } from './types'

export class Sunmao {
  static componentList: SunmaoComponentMetaProps[] = []
  static componentMap: Map<string, SunmaoComponentMetaProps> = new Map()
  static singletonInstance: Sunmao

  constructor() {
    if (Sunmao.singletonInstance) {
      return Sunmao.singletonInstance
    }
  }
  static registerComponent = (component: any, meta: SunmaoComponentMetaProps) => {
    if (!meta.name) return
    const currentExisted = this.componentMap.has(meta.name)

    if (!currentExisted) {
      const newComponent = Object.assign({}, meta, { component })
      this.componentList.push(newComponent)
      this.componentMap.set(meta.name, newComponent)
    }
  }
}

export const sunmao = new Sunmao()
Sunmao.singletonInstance = sunmao
