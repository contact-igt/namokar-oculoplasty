"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Loader2, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/router";
import { homeContent } from "@/constant/homeContent";
import { getUTM } from "@/utils/useUTMSource";
import styles from "./styles.module.css";

const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9\+\-\s]{10,15}$/, "Enter a valid 10-digit phone number"),
});

export default function DoctorsAppointment() {
  const { eyebrow, title, description, doctors, appointment } =
    homeContent.doctorsAppointment;

  const [largeDoctor] = doctors;

  const [serverStatus, setServerStatus] = useState({ success: false, message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ipid, setipid] = useState("");
  const router = useRouter();

  const getIpAddress = async () => {
    try {
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();
      setipid(ipData.ip || "");
    } catch (err) {
      console.error("IP fetch error:", err);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    getIpAddress();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const onSubmit = async (data) => {
    setServerStatus({ success: false, message: "" });
    const payload = {
      doctor: largeDoctor?.name || "Dr. Poonam Jain",
      name: data.name,
      phone: data.phone,
      ip_address: ipid,
      utm_source: getUTM("utm_source"),
      utm_medium: getUTM("utm_medium"),
      utm_campaign: getUTM("utm_campaign"),
      utm_term: getUTM("utm_term"),
      utm_content: getUTM("utm_content"),
    };

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setServerStatus({ success: true, message: result.message });
        router.push("/thank-you");
      } else {
        setServerStatus({ success: false, message: result.message || "Submission failed." });
      }
    } catch (err) {
      console.error(err);
      setServerStatus({
        success: false,
        message: "Something went wrong. Please check your network connection.",
      });
    }
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
    setServerStatus({ success: false, message: "" });
  };

  return (
    <section
      className={styles.doctorsSection}
      aria-labelledby="doctors-title"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span>{eyebrow}</span>
            </div>
            <h2 id="doctors-title" className={styles.title}>
              {title}
            </h2>
            {description && (
              <p className={styles.sectionDescription}>{description}</p>
            )}
          </div>
        </div>

        <div className={`${styles.body} ${styles.singleDoctorBody}`}>
          {/* Doctor Card */}
          {largeDoctor && (
            <article className={`${styles.doctorCard} ${styles.largeCard}`} key={largeDoctor.name}>
              <div className={styles.largeDoctorImageWrap}>
                <Image
                  src={largeDoctor.image.src}
                  alt={largeDoctor.image.alt}
                  width={largeDoctor.image.width}
                  height={largeDoctor.image.height}
                  className={styles.doctorImage}
                  priority
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
              <div className={styles.largeDoctorInfo}>
                <motion.h3
                  className={styles.doctorName}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  {largeDoctor.name}
                </motion.h3>
                <div className={styles.doctorDesignationWrap}>
                  {Array.isArray(largeDoctor.designation) ? (
                    largeDoctor.designation.map((line, idx) => (
                      <p key={idx} className={styles.doctorDesignation}>
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className={styles.doctorDesignation}>
                      {largeDoctor.designation}
                    </p>
                  )}
                </div>
                <a href="tel:+919810157258" className={styles.cardCallButton} aria-label="Call Namokar Clinic Now">
                  <PhoneCall size={18} strokeWidth={2.2} aria-hidden="true" />
                  <span>Call Now</span>
                </a>
              </div>
            </article>
          )}

          {/* Book An Appointment Form (Minimal 2-Field Lead Form) */}
          <div className={styles.formWrapper} id="appointment-form">
            <form
              className={styles.formCard}
              aria-label={appointment.title}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className={styles.formHeader}>
                <h3>{appointment.title}</h3>
              </div>

              {isSubmitted ? (
                <div className={styles.successState}>
                  <CheckCircle2 size={48} className={styles.successIcon} />
                  <h4 className={styles.successTitle}>Booking Submitted!</h4>
                  <p className={styles.successDesc}>
                    Thank you. We have received your appointment request and will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className={styles.resetButton}
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <div className={styles.formBody}>
                  {serverStatus.message && !serverStatus.success && (
                    <div className={styles.serverError}>{serverStatus.message}</div>
                  )}

                  {/* Name Field */}
                  <label className={styles.field}>
                    <span className={styles.label}>
                      <span>{appointment.fields.name}</span>
                      <span className={styles.required} aria-hidden="true">
                        *
                      </span>
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      {...register("name")}
                    />
                    {errors.name && (
                      <span className={styles.fieldError}>{errors.name.message}</span>
                    )}
                  </label>

                  {/* Phone Field */}
                  <label className={styles.field}>
                    <span className={styles.label}>
                      <span>{appointment.fields.phone}</span>
                      <span className={styles.required} aria-hidden="true">
                        *
                      </span>
                    </span>
                    <input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <span className={styles.fieldError}>{errors.phone.message}</span>
                    )}
                  </label>

                  <button
                    className={styles.submitButton}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className={styles.loadingText}>
                        <Loader2 className={styles.spinner} size={18} /> Submitting...
                      </span>
                    ) : (
                      appointment.submitLabel
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
