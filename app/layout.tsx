import type { Metadata, Viewport } from "next";
import { Cardo, IBM_Plex_Mono, Newsreader } from "next/font/google";
import { PwaRegister } from "@/components/PwaRegister";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
});

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cardo",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: {
    default: "Connoisseur",
    template: "%s · Connoisseur",
  },
  description: "Look first. One work at a time.",
  applicationName: "Connoisseur",
  appleWebApp: {
    capable: true,
    title: "Connoisseur",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f0e4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${cardo.variable} ${plex.variable} h-full`}
    >
      <body className="min-h-full">
        <PwaRegister />
        {children}
      </body>
    </html>
  );
}
