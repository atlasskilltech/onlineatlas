import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import { SITE_URL, BRAND, SITE_NAME, THEME_COLOR } from "./seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site-wide metadata defaults. Pages inherit these and override the unique
// fields (title, description, canonical, Open Graph, Twitter) via `pageMetadata`.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ATLAS SkillTech University — AI-Native Online Programs",
    template: `%s | ${BRAND}`,
  },
  description:
    "100% online MBA & BBA programs from ATLAS SkillTech University, School of Management — built for an AI-native world.",
  applicationName: "ATLAS Online",
  authors: [{ name: BRAND, url: SITE_URL }],
  creator: BRAND,
  publisher: BRAND,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ATLAS Online",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: SITE_URL,
  },
  other: {
    "msapplication-navbutton-color": THEME_COLOR,
    "msapplication-TileColor": THEME_COLOR,
  },
};

export const viewport = {
  themeColor: THEME_COLOR,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
