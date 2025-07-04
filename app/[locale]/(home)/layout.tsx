import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local';

import "../globals.css";
import Navigation from "../../../components/Navigation/Navigation";
import classNames from "classnames";
import Footer from "../../../components/Footer/Footer";
import Locale from 'intl-locale-textinfo-polyfill';
import SubLayout from "../client/layout";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

const vazir = localFont({
  src: [
    {
      path: '../../../public/fonts/vazir/Farsi-Digits/Vazir-Light-FD.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/vazir/Farsi-Digits/Vazir-Bold-FD.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-vazir'
})


export const metadata: Metadata = {
  title: "ONYX",
  description: "Your Source for Premium Kaolinite",
};

export default function RootLayout({ children, params: { locale } }: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {

  const { direction: dir } = new Locale(locale).textInfo;

  return (
    <html lang={locale} dir={dir}>
      <body className={classNames("max-w-full", locale == 'fa' ? vazir.className : poppins.className)}>
        <SubLayout params={{ locale }}>
          <Navigation />
        </SubLayout>
        {children}
        <Footer />
        <Toaster position="top-left" />
      </body>
    </html>
  );
}
