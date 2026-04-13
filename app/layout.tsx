import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Topology-Derived Concept Bridges in HCI",
  description: "Mobile-first guided exploration of topology-derived concept bridges in HCI research."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
