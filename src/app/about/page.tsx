import type { Metadata } from "next";
export const metadata: Metadata = { title: "Tentang Semak IC Malaysia" };
export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <h1 className="text-3xl font-black text-white">Tentang / About</h1>
      <div className="card-glass rounded-2xl p-6 space-y-4 text-white/70 text-sm leading-relaxed">
        <p><strong className="text-white">Semak IC Malaysia</strong> adalah alat percuma untuk mendecode nombor MyKad Malaysia. Masukkan nombor IC 12 digit dan dapatkan maklumat seperti tarikh lahir, umur, negeri lahir, dan jantina.</p>
        <p><strong className="text-white">Semak IC Malaysia</strong> is a free tool to decode Malaysian MyKad numbers. Enter your 12-digit IC number to get your birth date, age, birth state, and gender.</p>
        <p className="text-white/40 text-xs">Semua pemprosesan berlaku dalam pelayar anda. Tiada data dihantar ke pelayan. / All processing happens in your browser. No data is sent to any server.</p>
      </div>
    </div>
  );
}
