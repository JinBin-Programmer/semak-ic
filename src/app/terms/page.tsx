import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terma Penggunaan — Semak IC Malaysia" };
export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <h1 className="text-3xl font-black text-white">Terma Penggunaan / Terms of Use</h1>
      <div className="card-glass rounded-2xl p-6 space-y-4 text-white/70 text-sm leading-relaxed">
        <p>Maklumat yang dipaparkan adalah untuk tujuan rujukan sahaja berdasarkan struktur nombor IC yang diketahui umum. Kami tidak menjamin ketepatan sepenuhnya.</p>
        <p>Information displayed is for reference purposes only based on publicly known IC number structure. We do not guarantee complete accuracy.</p>
        <p>Penggunaan laman web ini adalah atas risiko anda sendiri. Untuk maklumat rasmi, sila hubungi Jabatan Pendaftaran Negara (JPN).</p>
        <p>Use of this website is at your own risk. For official information, please contact the National Registration Department (JPN).</p>
      </div>
    </div>
  );
}
