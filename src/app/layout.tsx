import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="pt-BR">

        <Head>
          <title>Apostila Editora Capro</title>
          <meta name="description" content="Material Didático da Editora Capro"></meta>
          <link rel="icon" href="/assets/book-icon.png"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"></link>
        </Head>

        <body className={inter.className}>{children}</body>
        
      </html>
    </ThemeProvider>
  );
}
