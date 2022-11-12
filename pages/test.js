import Head from 'next/head'
import MainLayout from 'layouts/main';
import TestSection from 'components/Pages/Test/Section';

export default function TestPage() {
  return (
    <MainLayout>
      <TestSection />
    </MainLayout>
  )
}
