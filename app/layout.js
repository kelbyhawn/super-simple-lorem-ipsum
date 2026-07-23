import { GoogleAnalytics } from "@next/third-parties/google";
import "../src/App.sass";

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
        <div id="root">{children}</div>
      </body>
      <GoogleAnalytics gaId="G-5CRBBJR7PJ" />
    </html>
  );
}
