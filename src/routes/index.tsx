import { createFileRoute } from '@tanstack/react-router'
import MrEnginesPage, { pageHead } from '../pages/MrEngines'
import { ClientOnly } from '../lib/dc'

// MR Engines landing (enginesmr.com). Duboki link na motor: /#motor=H5F
export const Route = createFileRoute('/')({
  ssr: false,
  head: () => pageHead,
  component: () => (
    <ClientOnly>
      <MrEnginesPage />
    </ClientOnly>
  ),
})
