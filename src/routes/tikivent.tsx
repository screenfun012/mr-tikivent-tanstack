import { createFileRoute } from '@tanstack/react-router'
import TikiVentPage, { pageHead } from '../pages/TikiVent'
import { ClientOnly } from '../lib/dc'

// Tiki Vent landing (tikivent.rs)
export const Route = createFileRoute('/tikivent')({
  ssr: false,
  head: () => pageHead,
  component: () => (
    <ClientOnly>
      <TikiVentPage />
    </ClientOnly>
  ),
})
