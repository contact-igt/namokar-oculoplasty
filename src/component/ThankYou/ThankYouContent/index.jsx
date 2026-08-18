"use client";

import Link from "next/link";
import { PhoneCall, ArrowUpRight } from "lucide-react";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function ThankYouContent() {
  return (
    <section className={styles.section} aria-labelledby="thank-you-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp" delay={0}>
          <div className={styles.contentBox}>
            <h2 id="thank-you-title" className={styles.heading}>
              Thanks — appointment request received
            </h2>

            <p className={styles.description}>
              We have received your appointment request and will reach out to confirm the date and time.
              If you need immediate assistance or wish to speak to our team directly, please call our clinic.
            </p>

            <div className={styles.buttonGroup}>
              <a href="tel:+919810157258" className={styles.btnSecondary}>
                <span>Call Clinic Now</span>
                <span className={styles.iconCircle}>
                  <PhoneCall size={18} strokeWidth={2.2} />
                </span>
              </a>

              <Link href="/" className={styles.btnOutline}>
                <span>Back to Home</span>
                <span className={styles.iconCircle}>
                  <ArrowUpRight size={18} strokeWidth={2.2} />
                </span>
              </Link>
            </div>
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
