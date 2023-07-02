import './globals.css'
import { Inter } from 'next/font/google';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Daniel Pericich',
  description: 'Portfolio and job discussion site for software developer Daniel Pericich',
}

// TODO: Need to find a better font for this website
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Navbar />
          <div>
            {children}
          </div>
        <Footer />
      </div>
    </html>
  )
}
