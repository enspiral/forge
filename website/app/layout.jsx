import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'Enspiral Forge',
  description: 'Ship stuff that matters',
}

const navbar = (
  <Navbar
    logo={<b>Enspiral Forge</b>}
    projectLink="https://handbook.enspiral.com"
  />
)

const footer = (
  <Footer>
    <a href="https://handbook.enspiral.com" target="_blank" rel="noopener">
      Enspiral Network
    </a>
    {' · '}
    {new Date().getFullYear()} Enspiral Foundation
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
