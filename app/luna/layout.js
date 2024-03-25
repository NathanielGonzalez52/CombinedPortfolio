import { Inter } from 'next/font/google';
import './globals.css';
import Script from "next/script";



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Luna's Art",
  description: "Website to Display Luna's Merchandise and Art"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/be9f0fb302.js" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
