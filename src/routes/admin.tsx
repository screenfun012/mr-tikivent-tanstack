import { createFileRoute } from '@tanstack/react-router'
import AdminPage, { pageHead } from '../pages/Admin'
import { ClientOnly } from '../lib/dc'

// Admin za obe stranice (noindex je u pageHead)
export const Route = createFileRoute('/admin')({
  ssr: false,
  head: () => pageHead,
  component: () => (
    <ClientOnly>
      <AdminPage />
    </ClientOnly>
  ),
})
