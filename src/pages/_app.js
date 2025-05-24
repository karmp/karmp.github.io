import "@/styles/globals.css";
import { Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({ subsets: ["latin"],
  variable: '--font-roboto-flex'
 });


export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
