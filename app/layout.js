import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Split Sense',
  description: 'split your expenses among friends',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
