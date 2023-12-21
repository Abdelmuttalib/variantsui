import { Inter } from "next/font/google";
import { BackgroundBeamsDemo } from "@/components/ui/background-beams";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Variants UI</title>
        <meta name="description" content="UI Components Variants" />
      </Head>
      <main className={`min-h-screen ${inter.className}`}>
        <BackgroundBeamsDemo />
      </main>
    </>
  );
}
