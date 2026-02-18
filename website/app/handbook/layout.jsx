import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

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

export default async function HandbookLayout({ children }) {
  return (
    <Layout
      navbar={navbar}
      pageMap={await getPageMap()}
      footer={footer}
    >
      {children}
    </Layout>
  )
}
