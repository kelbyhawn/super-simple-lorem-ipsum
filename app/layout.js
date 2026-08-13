import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "../src/main.scss";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Super Simple Lorem Ipsum",
  description: "No frills Lorem Ipsum.",
  openGraph: {
    title: "Super Simple Lorem Ipsum",
    description: "No frills Lorem Ipsum.",
    url: "https://supersimpleloremipsum.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root" className={inter.className}>
          {children}
        </div>
      </body>
      <GoogleAnalytics gaId="G-5CRBBJR7PJ" />
    </html>
  );
}
