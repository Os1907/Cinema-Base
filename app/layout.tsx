import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "./_Components/Navbar/Navbar";
import { ViewTransitions } from "next-view-transitions";
import Footer from "./_Components/Footer/Footer";
const Vietnam = Be_Vietnam_Pro({ subsets: ["latin"] ,
weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] ,
});

export const metadata: Metadata = {
  title: "Cinema Base",
  description: "All what you need to know about the movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
    <html lang="en">
      <body className={Vietnam.className} >
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
    </ViewTransitions>
  );
}
