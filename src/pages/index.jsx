import Head from "next/head";
import AestheticOculofacialBanner from "@/component/Aesthetic/AestheticOculofacialBanner";
import WhatIsAestheticOculoplasty from "@/component/Aesthetic/WhatIsAestheticOculoplasty";
import AestheticWhyChoose from "@/component/Aesthetic/AestheticWhyChoose";
import AestheticOculoplastyTreatments from "@/component/Aesthetic/AestheticOculoplastyTreatments";
import ExpectedApproach from "@/component/Aesthetic/ExpectedApproach";
import SpecialistLedApproach from "@/component/Aesthetic/SpecialistLedApproach";
import AestheticAssessment from "@/component/Aesthetic/AestheticAssessment";
import BeforeAfterOculoplasty from "@/component/Aesthetic/BeforeAfterOculoplasty";
import DoctorsAppointment from "@/component/Home/DoctorsAppointment";
import OculoplastyFaq from "@/component/Aesthetic/OculoplastyFaq";
import Testimonials from "@/component/Home/Testimonials";
import AestheticCta from "@/component/Aesthetic/AestheticCta";

export default function AestheticOculofacialLandingPage() {
  const pageTitle = "Aesthetic Eyelid Surgery Delhi | Namokar Eye";
  const pageDesc = "Rejuvenate your eyes naturally with aesthetic oculoplasty by Dr. Poonam Jain at Namokar Eye & Oculoplasty Centre, Delhi. Book a consultation today.";
  const heroImage = "/assets/Aesthetic/aesthatic-new.jpeg";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />

        {/* Robots tag - PPC ad campaign default */}
        <meta name="robots" content="noindex, nofollow" />

        {/* Canonical link */}
        <link rel="canonical" href="https://namokareyecare.com/treatments/aesthetic-oculofacial" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={heroImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={heroImage} />
      </Head>

      <main>
        <AestheticOculofacialBanner />
        <WhatIsAestheticOculoplasty />
        <AestheticWhyChoose />
        <AestheticOculoplastyTreatments />
        <ExpectedApproach />
        <SpecialistLedApproach />
        <AestheticAssessment />
        <BeforeAfterOculoplasty />
        <DoctorsAppointment />
        <OculoplastyFaq />
        <Testimonials />
        <AestheticCta />
      </main>
    </>
  );
}
