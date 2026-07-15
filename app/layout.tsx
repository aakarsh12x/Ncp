import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SupportChatbot from "@/components/SupportChatbot";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leafos.ncomputing.com"),
  title: {
    default: "LEAF OS by NComputing: Keep your PCs. Get Windows 11.",
    template: "%s | NComputing LEAF OS",
  },
  description:
    "LEAF OS turns any existing PC into a managed Windows 11 virtual desktop endpoint, without buying new hardware. 20+ years, 70,000+ customers, 140 countries.",
  openGraph: {
    siteName: "NComputing LEAF OS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <SupportChatbot />
      </body>
    </html>
  );
}
