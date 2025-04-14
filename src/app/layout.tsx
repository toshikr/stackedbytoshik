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
      <body>
        <div className="h-screen overflow-y-scroll scrollbar-hide px-8 lg:px-16 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
          {children}
        </div>
      </body>
    </html>
  );
}
