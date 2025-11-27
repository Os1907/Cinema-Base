import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_Components/Navbar/Navbar";
import Footer from "./_Components/Footer/Footer";
import { ViewTransitions } from "next-view-transitions";
import { QueryProvider } from "./Providers/QueryProvider";

const Vietnam = Poppins({ subsets: ["latin"] ,
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
    <QueryProvider>
      <ViewTransitions>
      <html lang="en">
        <body className={Vietnam.className} >
          <Navbar/>
          {children}
          <Footer/>
          </body>
      </html>
      </ViewTransitions>
    </QueryProvider>
  );
}
