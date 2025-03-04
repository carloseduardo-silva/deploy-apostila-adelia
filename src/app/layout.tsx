import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apostila Editora Capro",
  description: "Material Didático da Editora Capro",
  icons:{
    icon:"/assets/book-icon.png"
  }
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="pt-BR">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
