import { Analytics } from "@vercel/analytics/next";
import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stacked by Toshik",
  description: "Showcasing cool builds",
  icons: {
    icon: "/fav-icon.jpg",
    apple: "/fav-icon.jpg", //apple-touch-icon
    shortcut: "/fav-icon.jpg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="animated-gradient-bg h-screen overflow-y-scroll scrollbar-hide px-2 lg:px-16 text-black dark:text-white transition-colors duration-300">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
