import Image from "next/image";
import styles from "./styles.module.css";

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialLinks = [
  {
    platform: "Facebook",
    href: "https://www.facebook.com/namokareyebydrpoonamjain/",
    ariaLabel: "Facebook",
    Icon: FacebookIcon,
  },
  {
    platform: "Instagram",
    href: "https://www.instagram.com/itsdrpoonamjain/",
    ariaLabel: "Instagram",
    Icon: InstagramIcon,
  },
  {
    platform: "YouTube",
    href: "https://www.youtube.com/@dr.poonamjain-namokareyeoc5696",
    ariaLabel: "YouTube",
    Icon: YouTubeIcon,
  },
];

export default function Footer() {
  return (
    <footer style={{
      width: "100%",
      background: "#061653",
      borderTop: "4px solid #1499e8",
      color: "#ffffff",
      padding: "60px 0 30px",
      fontFamily: "var(--font-satoshi), sans-serif",
    }}>
      <div style={{
        width: "min(calc(100% - 40px), 1320px)",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          alignItems: "start",
        }}>
          <div>
            <a href="https://namokareyecare.com/" aria-label="Namokar Eye & Oculoplasty Centre" style={{ textDecoration: "none", display: "inline-block" }}>
              <Image
                src="/assets/Footer/footer_logo_new.png"
                alt="Namokar Eye & Oculoplasty Centre"
                width={360}
                height={138}
                style={{ width: "260px", height: "auto", display: "block" }}
              />
            </a>
            <p style={{ margin: "16px 0 0", color: "#e2e8f0", fontSize: "14px", lineHeight: "22px", maxWidth: "400px" }}>
              Dedicated to providing expert eye care with advanced ophthalmic and oculoplasty treatments to ensure your vision and aesthetic well-being.
            </p>
          </div>

          <div>
            <h4 style={{ margin: "0 0 16px", color: "#ff7046", fontSize: "18px", fontWeight: "700" }}>
              Contact & Location
            </h4>
            <p style={{ margin: "0 0 12px", color: "#ffffff", fontSize: "14px", lineHeight: "20px", whiteSpace: "pre-line" }}>
              13 A, near SATYAWATI COLLEGE,<br />
              opposite Madrina Restaurant, Pocket A,<br />
              Phase 3, Ashok Vihar, Delhi, 110052
            </p>
            <p style={{ margin: "0", color: "#ffffff", fontSize: "14px" }}>
              <strong>Phone: </strong>
              <a href="tel:+919810419720" style={{ color: "#ffffff", textDecoration: "none" }}>
                +91-9810419720
              </a>
            </p>
          </div>

          <div>
            <h4 style={{ margin: "0 0 16px", color: "#ff7046", fontSize: "18px", fontWeight: "700" }}>
              Opening Hours
            </h4>
            <p style={{ margin: "0 0 6px", color: "#ffffff", fontSize: "14px" }}>
              Mon - Sat: 9 AM - 4 PM
            </p>
            <p style={{ margin: "0", color: "#ffffff", fontSize: "14px" }}>
              Sunday: Closed
            </p>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(21, 157, 231, 0.4)",
          paddingTop: "24px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          fontSize: "13px",
          color: "rgba(255, 255, 255, 0.75)",
        }}>
          <p style={{ margin: 0 }}>© 2026 Namokar Eye Clinic. All rights reserved.</p>
          <div className={styles.socials} aria-label="Social links">
            {socialLinks.map(({ platform, href, ariaLabel, Icon }) => (
              <a
                key={platform}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label={ariaLabel}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
