import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NutritrackHeader from "@/lib/ui/nutritrack-header";
import NutritrackFooter from "@/lib/ui/nutritrack-footer";
import { getCurrentProfile } from "@/lib/authLib";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

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
    <ClerkProvider>
      <html lang="en">
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body className={inter.className}>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <Toaster />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
