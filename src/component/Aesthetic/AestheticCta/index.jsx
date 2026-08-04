"use client";

import Link from "next/link";
import { ArrowRight, Calendar, PhoneCall } from "lucide-react";
import { aestheticOculofacialContent } from "@/constant/aestheticOculofacialContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function AestheticCta() {
  const { title, description, btnLabel, href } =
    aestheticOculofacialContent.ctaSection;

  return (
    <section className={styles.section} aria-labelledby="aesthetic-cta-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp">
          <div className={styles.ctaBox}>
            <div className={styles.content}>
              <h2 id="aesthetic-cta-title" className={styles.title}>
                {title}
              </h2>
              <p className={styles.description}>{description}</p>

              <div className={styles.btnGroup}>
                <a href="tel:+919810419720" className={styles.callBtn} aria-label="Call Namokar Clinic Now">
                  <PhoneCall size={20} strokeWidth={2} />
                  <span>Call Now</span>
                </a>

                <Link href={href || "#appointment-form"} className={styles.ctaBtn}>
                  <Calendar size={20} strokeWidth={2} />
                  <span>{btnLabel}</span>
                </Link>
              </div>
            </div>
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
