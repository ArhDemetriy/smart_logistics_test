import { RouterProvider } from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'

import { TanstackQueryProvider } from '@/1_app/providers/query/root-provider'
import { getRouter } from '@/1_app/providers/router/router'

const router = getRouter()

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <TanstackQueryProvider>
      <RouterProvider router={router} />
    </TanstackQueryProvider>
  )
}
