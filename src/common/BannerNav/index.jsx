import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import styles from "./styles.module.css";

export default function BannerNav() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="https://namokareyecare.com/" className={styles.brand} aria-label="Namokar Eye & Oculoplasty Centre">
          <Image
            src="/assets/Header/LOGO.png"
            alt="Namokar Eye & Oculoplasty Centre"
            width={1120}
            height={428}
            className={styles.logo}
            priority
          />
        </a>

        <div className={styles.rightAction}>
          <a href="tel:+919810419720" className={styles.callNowBtn} aria-label="Call Namokar Clinic Now">
            <PhoneCall size={18} strokeWidth={2.2} aria-hidden="true" />
            <span>Call Now</span>
          </a>

          <Link href="#appointment-form" className={styles.appointment}>
            Book Appointment
            <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}
