import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://ic.themalaysianinfo.online"),
  title: {
    default: "Semak IC Malaysia — Decode Nombor MyKad",
    template: "%s — Semak IC Malaysia",
  },
  description:
    "Semak nombor IC MyKad Malaysia — dapatkan tarikh lahir, umur, negeri, dan jantina dari nombor kad pengenalan anda. Decode Malaysian IC number to get birth date, age, state, and gender.",
  keywords: [
    "semak ic malaysia",
    "decode ic number",
    "nombor ic mykad",
    "tarikh lahir dari ic",
    "semak nombor kad pengenalan",
    "ic number malaysia",
    "mykad decoder",
    "check ic number",
  ],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪪</text></svg>",
  },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    siteName: "Semak IC Malaysia",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7019273666606982"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10 shadow-sm">
            <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg">
                <span className="text-2xl">🪪</span>
                <div>
                  <div className="leading-none">Semak IC MY</div>
                  <div className="text-[10px] text-white/40 font-normal leading-none">Malaysia IC Decoder</div>
                </div>
              </Link>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-4 text-sm font-medium text-white/60">
                  <Link href="/" className="hover:text-white transition-colors">Semak</Link>
                  <Link href="/about" className="hover:text-white transition-colors">Tentang</Link>
                </div>
                <LanguageToggle />
              </div>
            </div>
          </nav>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-xs text-white/30 space-y-1">
            <p>Maklumat dari nombor IC sahaja · Information from IC number only · Untuk rujukan sahaja</p>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <Link href="/about" className="hover:text-white">Tentang / About</Link>
              <span>·</span>
              <Link href="/privacy-policy" className="hover:text-white">Privasi / Privacy</Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-white">Terma / Terms</Link>
            </div>
            <p className="mt-2">© {new Date().getFullYear()} Semak IC Malaysia · Untuk rujukan sahaja / For reference only</p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
