// src/app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stacked by Toshik",
  description: "Showcasing cool builds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-white px-8 lg:px-16">{children}</body>
    </html>
  );
}
