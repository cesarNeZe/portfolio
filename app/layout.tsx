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
        <div className='z-50 w-full h-full fixed'>

          <script src="http://localhost:3000/embed.js" data-position="top-right" data-workspace-id="67a8b9ed029555b2fb2605b4"></script>
        </div>
      </body>
    </html>
  );
}
