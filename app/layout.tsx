import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const fontMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://twodice.local"),
  title: {
    default: "twodice — Digital Game & Gift Cards",
    template: "%s · twodice",
  },
  description:
    "Modern platform for instant purchase of gift cards and game top-ups. Exclusive offers, promotions and seamless experience with maximum security.",
  applicationName: "twodice",
  keywords: [
    "gift cards",
    "game top up", 
    "digital cards",
    "recharge",
    "twodice",
  ],
  authors: [{ name: "twodice" }],
  icons: {
    icon: "/mascot.svg",
  },
  openGraph: {
    title: "twodice — Digital Game & Gift Cards",
    description:
      "Buy your gift cards and game top-ups in seconds. Exclusive offers and maximum security.",
    url: "/",
    siteName: "twodice",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "twodice — Digital Game & Gift Cards", 
    description:
      "Gift cards and game top-ups — fast, reliable and at the best price.",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B0F1A" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F1A" },
  ],
  category: "ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
