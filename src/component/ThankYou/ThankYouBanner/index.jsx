"use client";

import Image from "next/image";
import RevealOnView, { WordReveal } from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function ThankYouBanner() {
  return (
    <section className={styles.heroSection} aria-label="Thank You Banner">
      <div className={styles.bgImageWrapper}>
        <Image
          src="/assets/Home/homebg-new.jpeg"
          alt="Namokar Eye Centre Background"
          fill
          priority
          className={styles.desktopBg}
        />
        <Image
          src="/assets/Home/herobgmb-new.jpeg"
          alt="Namokar Eye Centre Mobile Background"
          fill
          priority
          className={styles.mobileBg}
        />
      </div>

      <div className={styles.nabhLogoWrapper}>
        <Image
          src="/assets/Header/Patient_saftey_logo.png"
          alt="Patient Safety & Quality of Care NABH Certified Logo"
          width={100}
          height={100}
          className={styles.nabhLogo}
          priority
        />
      </div>

      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            <WordReveal text="Thank you — we" tag="span" delay={0} />
            <br />
            <WordReveal text="received your request" tag="span" delay={120} />
          </h1>

          <RevealOnView variant="fadeUp" delay={300}>
            <p className={styles.subtitle}>
              Our team will review your details and contact you shortly to confirm your appointment.
            </p>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
