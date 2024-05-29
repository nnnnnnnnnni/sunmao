import { NextUIProvider } from '@nextui-org/react'
import '@bfe/moly/dist/es/theme/styles/tailwind.css'
import '@bfe/moly/dist/es/theme/cssVars/index.css'
import '@bfe/moly/dist/es/theme/font/font.css'
import '@sunmao/materials/dist/index.css'
import './global.css'
import { Providers } from './providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className='w-full h-full'>
        <NextUIProvider>
          <Providers>{children}</Providers>
        </NextUIProvider>
      </body>
    </html>
  )
}
