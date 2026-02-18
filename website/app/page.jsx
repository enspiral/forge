'use client'

import Link from 'next/link'

const teal = '#03a196'

const styles = {
  page: {
    fontFamily: "'Poppins', sans-serif",
    color: '#000',
    backgroundColor: '#fff',
    minHeight: '100vh',
  },
  header: {
    padding: '3rem 2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  logo: {
    fontSize: '1rem',
    fontWeight: 600,
    color: teal,
    textDecoration: 'none',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  hero: {
    padding: '4rem 2rem 3rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  h1: {
    fontSize: 'clamp(2rem, 5vw, 3.2rem)',
    fontWeight: 500,
    lineHeight: 1.2,
    margin: '0 0 0.5rem',
  },
  tagline: {
    fontSize: '1.25rem',
    color: teal,
    fontWeight: 500,
    margin: '0 0 2rem',
  },
  intro: {
    fontSize: '1.15rem',
    lineHeight: 1.8,
    maxWidth: '700px',
    margin: '0 0 3rem',
  },
  section: {
    padding: '2rem 2rem 3rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: teal,
    margin: '0 0 1.5rem',
  },
  list: {
    fontSize: '1.05rem',
    lineHeight: 2,
    paddingLeft: '1.5rem',
    margin: '0 0 2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    margin: '0 0 2rem',
  },
  card: {
    padding: '1.5rem',
    border: `1px solid #e0e0e0`,
    borderRadius: '8px',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    margin: '0 0 0.5rem',
  },
  cardText: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: '#444',
    margin: 0,
  },
  cta: {
    display: 'inline-block',
    padding: '0.85rem 2rem',
    backgroundColor: teal,
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '1.05rem',
    fontWeight: 500,
    fontFamily: "'Poppins', sans-serif",
    border: 'none',
    cursor: 'pointer',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #e0e0e0',
    margin: '3rem auto',
    maxWidth: '900px',
  },
  founders: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem 2rem',
    listStyle: 'none',
    padding: 0,
    fontSize: '1.05rem',
  },
  footer: {
    padding: '3rem 2rem',
    maxWidth: '900px',
    margin: '0 auto',
    fontSize: '0.9rem',
    color: '#888',
  },
  footerLink: {
    color: teal,
    textDecoration: 'none',
  },
}

export default function Home() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <a href="https://enspiral.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img
            src="/forge/enspiral-logo.webp"
            alt="Enspiral"
            style={{ height: '40px', display: 'block' }}
          />
          <span style={styles.logo}>Enspiral Forge</span>
        </a>
      </header>

      <main>
        <section style={styles.hero}>
          <h1 style={styles.h1}>More people working on stuff that matters</h1>
          <p style={styles.tagline}>Ship it.</p>
          <p style={styles.intro}>
            Enspiral Forge is an{' '}
            <a href="https://handbook.enspiral.com/agreements/nodes" style={{ color: teal }}>
              Enspiral Node
            </a>{' '}
            focused on doing and shipping. Bring an experiment, a project, or even a question
            — and get it out into the world with the support of smart, experienced, and
            generous people.
          </p>
          <Link href="/handbook" style={styles.cta}>
            Read the Handbook
          </Link>
        </section>

        <hr style={styles.divider} />

        <section style={styles.section}>
          <h2 style={styles.h2}>10-week seasons</h2>
          <p style={styles.intro}>
            The Forge runs in seasons — intensive 10-week incubators to get your project off the
            ground, culminating in a Demo Day where you share your work with the whole Enspiral network.
          </p>

          <div style={styles.grid}>
            <div style={styles.card}>
              <p style={styles.cardTitle}>Weekly calls</p>
              <p style={styles.cardText}>The core rhythm of each season. Show up, share progress, get unstuck.</p>
            </div>
            <div style={styles.card}>
              <p style={styles.cardTitle}>Peer coaching</p>
              <p style={styles.cardText}>Wise crowds, troika consulting, and complexity-informed patterns.</p>
            </div>
            <div style={styles.card}>
              <p style={styles.cardTitle}>Demo Day</p>
              <p style={styles.cardText}>Ship your project in Week 10 and present to the network.</p>
            </div>
          </div>
        </section>

        <hr style={styles.divider} />

        <section style={styles.section}>
          <h2 style={styles.h2}>How to join</h2>
          <p style={styles.intro}>
            Know a member? Ask them for a direct invite. Don't know anyone yet?
            Applications are welcome — they're shared with all node members, and
            any member can choose to use one of their invites to bring you in.
          </p>
          <p style={styles.intro}>
            <strong>Season fee:</strong> $200–$300 NZD sliding scale. Full scholarships available —
            the suggested minimum is the value of a coffee per week.
          </p>
          <button
            onClick={() => alert('This will link to an application form once Kate makes one!')}
            style={styles.cta}
          >
            Apply to join
          </button>
        </section>

        <hr style={styles.divider} />

        <section style={styles.section}>
          <h2 style={styles.h2}>Founding members</h2>
          <ul style={styles.founders}>
            <li>Joshua Vial</li>
            <li>Kate Beecroft</li>
            <li>Susan Basterfield</li>
            <li>Ants Cabraal</li>
            <li>Hailey Cooperrider</li>
          </ul>
        </section>
      </main>

      <footer style={styles.footer}>
        <a href="https://enspiral.com" style={styles.footerLink}>Enspiral</a>
        {' · '}
        <a href="https://handbook.enspiral.com" style={styles.footerLink}>Network Handbook</a>
        {' · '}
        {new Date().getFullYear()} Enspiral Foundation
      </footer>
    </div>
  )
}
