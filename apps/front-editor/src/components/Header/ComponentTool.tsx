/* eslint-disable @next/next/no-img-element */
'use clinent'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { useHeaderContext } from './HeaderProvider'
import { Sunmao, SunmaoComponentMetaProps } from '@sunmao/core'
import { useMemo } from 'react'
import { ViewColumnsIcon } from '@heroicons/react/24/outline'
import { useDragContext } from '@editor-components/Preview'
import { Tooltip } from '@nextui-org/react'

interface componentListByGroupItemProps {
  group?: string
  data: SunmaoComponentMetaProps[]
}

export const ComponentTool = () => {
  const { showComponentTool } = useHeaderContext()
  const { handleDragStart } = useDragContext()

  const componentListByGroup = useMemo<componentListByGroupItemProps[]>(() => {
    const result: componentListByGroupItemProps[] = []

    Sunmao.componentList.forEach(comp => {
      const existed = result.find(i => i.group === comp.group)
      if (existed) {
        existed.data.push(comp)
      } else {
        result.push({
          group: comp.group,
          data: [comp],
        })
      }
    })
    return result
  }, [])

  return (
    showComponentTool && (
      <div className='fixed bg-white shadow-lg rounded-xl bottom-4 left-4 top-14 w-72 px-2 z-10'>
        <Accordion isCompact defaultSelectedKeys={['Layout']}>
          {componentListByGroup.map(item => {
            return (
              <AccordionItem key={item.group} title={item.group}>
                <div className='grid grid-cols-3 gap-1'>
                  {item.data.map(component => {
                    return component.previewImage ? (
                      <Tooltip
                        delay={1000}
                        key={component.name}
                        content={
                          <img
                            src={component.previewImage}
                            className='object-contain m-4'
                            width={300}
                            height={300}
                          />
                        }
                        placement='right'
                      >
                        <div
                          draggable
                          onDragStart={e => handleDragStart(e, component)}
                          className='flex flex-col flex-center rounded hover:bg-neutral-100 cursor-pointer p-2 transition-all duration-150 select-none'
                        >
                          <ViewColumnsIcon width={24} />
                          <div className='text-xs text-wrap text-center'>{component.name}</div>
                        </div>
                      </Tooltip>
                    ) : (
                      <div
                        draggable
                        key={component.name}
                        onDragStart={e => handleDragStart(e, component)}
                        className='flex flex-col flex-center rounded hover:bg-neutral-100 cursor-pointer p-2 transition-all duration-150 select-none'
                      >
                        <ViewColumnsIcon width={24} />
                        <div className='text-xs text-wrap text-center'>{component.name}</div>
                      </div>
                    )
                  })}
                </div>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    )
  )
}
