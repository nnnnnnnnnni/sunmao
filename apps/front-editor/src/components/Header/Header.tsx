'use client'
import {
  AdjustmentsHorizontalIcon,
  Bars3Icon,
  ClipboardIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  DocumentDuplicateIcon,
  EyeIcon,
  InboxArrowDownIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/button'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown'
import { Input } from '@nextui-org/react'
import { Tooltip } from '@nextui-org/tooltip'
import { useCallback } from 'react'
import { HeaderProvider, useHeaderContext } from './HeaderProvider'
import { ComponentTool } from './ComponentTool'
import { LayerTool } from './LayerTool'
import { usePreviewContext } from '@editor-components/Preview'
import { deviceEnum } from '@editor-components/Preview/types'

export const HeaderInnder = () => {
  const { showLayerTool, setShowLayerTool, showComponentTool, setShowComponentTool } =
    useHeaderContext()
  const { currentDevice, setCurrentDevice, zoom, setZoom } = usePreviewContext()

  const handleChangeView = useCallback(
    (tool: 'componentTool' | 'layerTool') => {
      if (tool === 'componentTool') {
        setShowComponentTool(!showComponentTool)
        setShowLayerTool(false)
      } else {
        setShowLayerTool(!showLayerTool)
        setShowComponentTool(false)
      }
    },
    [showComponentTool, showLayerTool]
  )

  return (
    <div className='flex items-center gap-4 fixed top-2 left-4 z-10'>
      <Tooltip content='Component'>
        <Button
          size='sm'
          isIconOnly
          color={showComponentTool ? 'primary' : 'default'}
          onClick={() => handleChangeView('componentTool')}
        >
          <AdjustmentsHorizontalIcon width={18} />
        </Button>
      </Tooltip>

      <Tooltip content='Layer'>
        <Button
          size='sm'
          isIconOnly
          color={showLayerTool ? 'primary' : 'default'}
          onClick={() => handleChangeView('layerTool')}
        >
          <Bars3Icon width={18} />
        </Button>
      </Tooltip>

      <Tooltip content='Layer'>
        <Button size='sm' isIconOnly onClick={() => setCurrentDevice((currentDevice + 1) % 3)}>
          {currentDevice === deviceEnum.DESKTOP && <ComputerDesktopIcon width={16} />}
          {currentDevice === deviceEnum.TABLET && <DeviceTabletIcon width={16} />}
          {currentDevice === deviceEnum.MOBILE && <DevicePhoneMobileIcon width={16} />}
        </Button>
      </Tooltip>

      <Input
        value={zoom}
        onChange={e => setZoom(e.target.value)}
        size='sm'
        classNames={{
          inputWrapper: '!bg-default',
        }}
        className='max-w-10 text-center'
      />

      <Dropdown size='sm'>
        <DropdownTrigger>
          <Button size='sm' isIconOnly>
            <Cog6ToothIcon width={18} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key='Duplicate' startContent={<DocumentDuplicateIcon width={16} />}>
            Duplicate
          </DropdownItem>
          <DropdownItem key='Copy' startContent={<ClipboardIcon width={16} />} showDivider>
            Copy
          </DropdownItem>
          <DropdownItem key='Draft' startContent={<InboxArrowDownIcon width={16} />}>
            Save as draft
          </DropdownItem>
          <DropdownItem key='Template' startContent={<InboxArrowDownIcon width={16} />} showDivider>
            Save as template
          </DropdownItem>
          <DropdownItem
            key='Delete'
            className='text-danger'
            startContent={<TrashIcon width={16} />}
          >
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Tooltip content='Preview'>
        <Button size='sm' isIconOnly>
          <EyeIcon width={18} />
        </Button>
      </Tooltip>
    </div>
  )
}

export const Header = () => {
  return (
    <HeaderProvider>
      <HeaderInnder />
      <ComponentTool />
      <LayerTool />
    </HeaderProvider>
  )
}
