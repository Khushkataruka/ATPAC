import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Lato } from "next/font/google";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navigation";
import Footer from "../components/Footer"
import { ThemeProvider } from "../components/themeProvider"; 
import { Toaster } from "react-hot-toast"; 
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "900"], // pick weights you need
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], // choose what you need
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alumni Training and Placement Affairs Council - SVNIT Surat",
  description: "Official portal of the Alumni Training and Placement Affairs Council (ATPAC) at SVNIT Surat. Explore placement updates, internships, career resources, and alumni networks for students and recruiters.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}
      >
       <ThemeProvider 
          attribute="class"
          disableTransitionOnChange
        >
          <Navbar />
           <Toaster position="top-right" reverseOrder={false} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
