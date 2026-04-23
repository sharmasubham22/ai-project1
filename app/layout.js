import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Header from "@/components/Header";

const lora = Lora({
  subsets: ["latin"],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif' 
})

const dmsans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
});

export const metadata = {
  title: "Prepzo",
  description: "AI powered interview preparation platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ theme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${lora.variable} ${dmsans.variable} font-sans`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="relative z-10 border-t border-white/7 py-12 mx-auto px-6 flex flex-wrap items-center justify-center text-stone-400">
              <span>
                © 2026{" "}
                <a href="/" className="hover:underline">
                  Prepzo™
                </a>
                . All Rights Reserved.
              </span>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
