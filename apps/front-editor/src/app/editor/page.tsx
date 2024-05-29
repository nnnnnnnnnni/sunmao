'use client'
import { Header } from '@editor-components/Header'
import { PreviewArea, PreviewProvider } from '@editor-components/Preview'
import { DragProvider } from '@editor-components/Preview/DragProvider'

export default function Page() {
  return (
    <div className='w-full h-full overflow-auto bg-neutral-100 min-h-screen min-w-full'>
      <PreviewProvider>
        <DragProvider>
          <Header />
          <PreviewArea />
        </DragProvider>
      </PreviewProvider>
    </div>
  )
}
