import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Cesar Portfolio",
  description: "Created by Cesar Zaitoun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
