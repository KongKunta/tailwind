import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Navbar />
          <div className="flex-grow overflow-y-auto bg-main text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
