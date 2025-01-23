import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FMS",
  description: "An advanced Farm Management System",
  icons: {
    icon: "/icon?<generated>",
  },
  openGraph: {
    images: "/icon?<generated>", // Example Open Graph image (optional)
  },
  head: (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
    </>
  ),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
