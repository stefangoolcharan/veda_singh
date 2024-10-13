import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Veda Singh",
  description: "Model website for Veda Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/d65685273d.js" ></script>
        <script src="https://unpkg.com/react-responsive-masonry/umd/react-responsive-masonry.js"></script>
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
