import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <Head>
          <title>Teamway Personality Test</title>
          <meta name="description" content="Teamway Personality Test" />
          <link rel="icon" href="https://app.teamway.io/assets/favicon/favicon-32x32.png" />
      </Head>
      <div className="layout">
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
