import type { Metadata } from "next";
import IcDecoder from "@/components/IcDecoder";

export const metadata: Metadata = {
  title: "Semak IC Malaysia — Decode Nombor MyKad Anda",
  description: "Masukkan nombor IC 12 digit untuk mengetahui tarikh lahir, umur, negeri dan jantina. Percuma, selamat, tiada data disimpan.",
};

export default function HomePage() {
  return <IcDecoder />;
}
