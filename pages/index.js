import Head from 'next/head'
import MainLayout from 'layouts/main';
import Hero from 'components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Teamway Personality Test</title>
        <meta name="description" content="Teamway Personality Test" />
        <link rel="icon" href="https://app.teamway.io/assets/favicon/favicon-32x32.png" />
      </Head>

      <MainLayout>
        <Hero />
      </MainLayout>
    </>
  )
}
