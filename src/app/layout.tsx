import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "AI-BioX",
  description: "AI-BioX website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" style={{ backgroundColor: '#000000' }}>
      <body className="antialiased" style={{ backgroundColor: '#000000' }}>
        <Header />
        <div className="pt-28" style={{ backgroundColor: '#000000' }}>
          {children}
        </div>
      </body>
    </html>
  );
}

