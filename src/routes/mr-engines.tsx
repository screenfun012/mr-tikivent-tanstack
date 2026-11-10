import { createFileRoute, redirect } from '@tanstack/react-router'

// Stara kratka adresa sa Netlify prezentacije → nova početna
export const Route = createFileRoute('/mr-engines')({
  beforeLoad: () => {
    throw redirect({ to: '/' })
  },
})
