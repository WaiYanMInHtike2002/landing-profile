import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Lenis from "lenis";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
const poppin = Poppins({
  subsets: ["latin"],
  weight: "300",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {});

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className={poppin.className}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
