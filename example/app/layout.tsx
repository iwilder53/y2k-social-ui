import type { Metadata } from "next";
import "yashbgdi/y2k-social-ui/theme.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "my little corner of the internet",
  description: "A Y2K-inspired profile page built with Neon Social UI",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
