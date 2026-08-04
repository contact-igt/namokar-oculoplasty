import styles from "./styles.module.css";

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.12.552 4.108 1.517 5.836L.055 23.518l5.856-1.503C7.574 22.88 9.712 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.73-.556-5.253-1.517l-.376-.237-3.486.895.918-3.4-.258-.394A9.957 9.957 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const actions = [
  {
    key: "phone",
    label: "Call Us",
    mobileLabel: "Call",
    href: "tel:+919810419720",
    ariaLabel: "Call Namokar Clinic Now",
    Icon: PhoneIcon,
    external: false,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    mobileLabel: "WhatsApp",
    href: "https://wa.me/919810419720",
    ariaLabel: "Chat with us on WhatsApp",
    Icon: WhatsAppIcon,
    external: true,
  },
  {
    key: "appointment",
    label: "Book Appointment",
    mobileLabel: "Book",
    href: "#appointment-form",
    ariaLabel: "Book Appointment",
    Icon: CalendarIcon,
    external: false,
  },
  {
    key: "instagram",
    label: "Instagram",
    mobileLabel: "Instagram",
    href: "https://www.instagram.com/itsdrpoonamjain/",
    ariaLabel: "Visit our Instagram",
    Icon: InstagramIcon,
    external: true,
  },
  {
    key: "youtube",
    label: "YouTube",
    mobileLabel: "YouTube",
    href: "https://www.youtube.com/@dr.poonamjain-namokareyeoc5696",
    ariaLabel: "Watch on YouTube",
    Icon: YouTubeIcon,
    external: true,
  },
];

export default function FloatingCta() {
  return (
    <>
      {/* Desktop Quick Actions Floating Sidebar */}
      <aside className={styles.desktopFloating} aria-label="Quick contact actions">
        {actions.map(({ key, label, href, ariaLabel, Icon, external }) => (
          <a
            key={key}
            href={href}
            aria-label={ariaLabel}
            className={`${styles.actionBtn} ${styles[key] || ""}`}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            <span className={styles.iconWrapper}>
              <Icon />
            </span>
            <span className={styles.label}>{label}</span>
          </a>
        ))}
      </aside>

      {/* Mobile Responsive Bottom Action Bar */}
      <nav className={styles.mobileBar} aria-label="Mobile quick contact actions">
        {actions.map(({ key, mobileLabel, href, ariaLabel, Icon, external }) => (
          <a
            key={key}
            href={href}
            aria-label={ariaLabel}
            className={`${styles.mobileAction} ${styles[`mobile${key.charAt(0).toUpperCase()}${key.slice(1)}`] || ""}`}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            <Icon />
            <span className={styles.mobileLabel}>{mobileLabel}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
