import Header from 'components/Header';
import Footer from 'components/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
