/// <reference types="vite/client" />
import * as React from 'react'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../lib/content-api'

// Tema (light/dark) se postavlja pre prvog iscrtavanja — isto kao u dizajnu (localStorage "mr-theme").
const THEME_INIT = "try{var t=localStorage.getItem('mr-theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}"
// Isti okvir stranice kao u dizajnu (#dc-root > .sc-host).
const FULL_PAGE_CSS = 'html,body{height:100%;margin:0}#dc-root,#dc-root>.sc-host{height:100%}'

export const Route = createRootRoute({
  head: () => ({
    meta: [{ charSet: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <style dangerouslySetInnerHTML={{ __html: FULL_PAGE_CSS }} />
        <HeadContent />
      </head>
      <body>
        <div id="dc-root">
          <div className="sc-host">{children}</div>
        </div>
        <Scripts />
      </body>
    </html>
  )
}
