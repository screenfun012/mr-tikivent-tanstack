import { createFileRoute } from '@tanstack/react-router'
import PocetnaPage, { pageHead } from '../pages/Pocetna'
import { ClientOnly } from '../lib/dc'

// Izbor stranice (staging / prezentacija)
export const Route = createFileRoute('/pocetna')({
  ssr: false,
  head: () => pageHead,
  component: () => (
    <ClientOnly>
      <PocetnaPage />
    </ClientOnly>
  ),
})
