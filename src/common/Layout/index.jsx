import BannerNav from "@/common/BannerNav";
import Footer from "@/common/Footer";
import FloatingCta from "@/common/FloatingCta";

export default function Layout({ children }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <BannerNav />
      <div style={{ flex: 1 }}>
        {children}
      </div>
      <FloatingCta />
      <Footer />
    </div>
  );
}
