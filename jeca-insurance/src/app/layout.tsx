import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LiveChat from "@/components/ui/LiveChat";
import { LiveChatProvider } from "@/contexts/LiveChatContext";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BONNET HealthCare - Training Center",
  description: "Comprehensive insurance coverage for auto, home, life, and business. Get a quote today and protect what matters most to you and your family.",
  keywords: "insurance, auto insurance, home insurance, life insurance, business insurance, quotes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AuthProvider>
          <LiveChatProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
              {children}
            </main>
              <Footer />
              <LiveChat />
            </div>
          </LiveChatProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
