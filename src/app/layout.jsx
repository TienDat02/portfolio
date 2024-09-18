import "./globals.css";
import {Roboto_Slab} from "next/font/google"

import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";

const robotoSlab = Roboto_Slab ({
  subsets: ["latin"],
  weight: ["100","200","300", "400", "500","600","700","800"],
  variable: '--font-robotoSlab'
});


export const metadata = {
  title: "Tien Dat",
  description: "Tien Dat's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={robotoSlab.variable}
      >
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
