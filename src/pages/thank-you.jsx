import Head from "next/head";
import ThankYouPage from "@/pagecomponent/ThankYou";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You | Namokar Eye & Oculoplasty Centre</title>
        <meta name="description" content="Thank you for booking an appointment with Namokar Eye & Oculoplasty Centre." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <ThankYouPage />
    </>
  );
}
