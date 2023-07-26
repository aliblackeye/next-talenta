// Import Styles
import "public/styles/globals.scss";

// Import Metadata
import type { Metadata } from "next";

// Import Fonts
import { Inter } from "next/font/google";

// Import Components
import Header from "@components/header";
import Footer from "@components/footer";

const merriweather = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300","400","500","600","700"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Talenta - Freelance İş Pazarı",
  description:
    "Talenta, freelance iş merkezi.  Freelance işlerinizi yayınlayın, freelance işlere başvurun, freelance işlerde çalışın.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
