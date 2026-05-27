import type { Metadata } from "next";
export const metadata: Metadata = { title: "Dasar Privasi — Semak IC Malaysia" };
export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <h1 className="text-3xl font-black text-white">Dasar Privasi / Privacy Policy</h1>
      <div className="card-glass rounded-2xl p-6 space-y-4 text-white/70 text-sm leading-relaxed">
        <p>Laman web ini tidak menyimpan sebarang nombor IC atau maklumat peribadi. Semua pemprosesan berlaku sepenuhnya dalam pelayar anda (client-side).</p>
        <p>This website does not store any IC numbers or personal information. All processing happens entirely in your browser (client-side). No data is transmitted to our servers.</p>
        <p>Kami menggunakan Google AdSense untuk iklan. Google mungkin menggunakan kuki untuk menyesuaikan iklan. Sila rujuk <a href="https://policies.google.com/privacy" className="underline text-yellow-400/70">Dasar Privasi Google</a> untuk maklumat lanjut.</p>
        <p className="text-white/40 text-xs">Dikemas kini: Mei 2026 / Updated: May 2026</p>
      </div>
    </div>
  );
}
