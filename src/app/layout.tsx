'use client'
import type { Metadata } from "next";
import "./globals.css";
import "./app.css"
import { useState, useEffect } from "react";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      // Verifica se o scroll é para cima ou para baixo
      if (window.scrollY > lastScrollY) {
        // Scroll para baixo
        setShowHeader(false);
      } else {
        // Scroll para cima
        setShowHeader(true);
      }
      // Atualiza a posição do último scroll
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);
  return (
    <html lang="en">
      <body className="app-body">
        <div className="content-container">
        <div className={`header-container ${showHeader ? 'header-visible' : 'header-hidden'}`}>
          <Header/>
        </div>
          {children}
        </div>
        
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
