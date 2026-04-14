"use client";
import { Inter } from "next/font/google";
// @ts-ignore
import "./globals.css";
import { useEffect } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Vérification de la disponibilité du Service Worker
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("Service Worker enregistré avec succès :", registration.scope);
          })
          .catch((error) => {
            console.error("Échec de l'enregistrement du Service Worker :", error);
          });
      });
    }
  }, []);

  return (
    <html lang="fr">
      <head>
        <title>Fam Trip Ibiza</title>
        <meta name="description" content="Secret AfterWork App" />
        <meta name="theme-color" content="#398024" />
        
        {/* Configuration PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Icônes - Correction de la faute de frappe "touche" */}
        <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png" />
        <link rel="apple-touch-startup-image" href="/images/icons/android-chrome-512x512.png" sizes="512x512" />
      </head>
      <body className={`${inter.variable} relative antialiased md:mx-auto md:max-w-3xl`}>
        {children}
      </body>
    </html>
  );
}