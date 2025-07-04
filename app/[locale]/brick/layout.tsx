import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import "../globals.css";
import classNames from "classnames";
import Locale from "intl-locale-textinfo-polyfill";
import { Toaster } from "react-hot-toast";
import NabvarMenu from "./components/navbar";
import SubLayout from "../client/layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import Providers from "./providers";
import FooterSection from "./components/footer.section";

const queryClient = new QueryClient();

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

const vazir = localFont({
  src: [
    {
      path: "../../../public/fonts/vazir/Farsi-Digits/Vazir-Light-FD.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/vazir/Farsi-Digits/Vazir-Bold-FD.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: "BRICK",
  description: "Your Source for Premium Kaolinite",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  const { direction: dir } = new Locale(locale).textInfo;

  return (
    <html lang={locale} dir={dir}>
      <body
        className={classNames(
          "max-w-full",
          locale == "fa" ? vazir.className : poppins.className,
        )}
      >
        <Suspense>
          <Providers>
            <SubLayout params={{ locale }}>
              <>
                <NabvarMenu />
                <div className="flex min-h-screen flex-col items-center justify-between mt-32">
                  {children}
                </div>
                <Toaster position="top-left" />
                <FooterSection />
              </>
            </SubLayout>
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
