import LayoutComponent from "@/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"], // Możesz dodać inne podzbiory, jeśli są potrzebne
  weight: ["400", "700"], // Określenie wag czcionki, np. regular (400) i bold (700)
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={kanit.className}>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </div>
    </>
  );
}
