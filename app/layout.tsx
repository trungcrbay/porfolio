import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ContactProvider from "./providers";
import SplashScreen from "@/components/FullScreenLoader";
import TransitionPage from "@/components/transition-page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ContactProvider>
          <SplashScreen />
          <TransitionPage>
            <div className="pt-12 2xl:pl-12 2xl:pr-12 sm:pl-6 sm:pt-8 bg-[url('/banner-bg.png')] bg-no-repeat bg-cover  min-h-screen">
              <Navbar />
              {children}
            </div>
            <Footer />
          </TransitionPage>
        </ContactProvider>
        <div id="modal-success" />
      </body>
    </html>
  );
}
