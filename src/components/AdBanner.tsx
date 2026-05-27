"use client";
// AdSense ads disabled until site approval is complete.
interface AdBannerProps { slot: string; format?: "auto"|"horizontal"|"rectangle"|"vertical"; className?: string; }
export default function AdBanner({ className = "" }: AdBannerProps) {
  return <div className={className} />;
}
