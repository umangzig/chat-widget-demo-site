import Script from "next/script";
import Image from "next/image";
import AXLOGO from "../../public/logo.png";

export default function Home() {
  return (
    <main style={styles.container}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroImage}>
          <Image src={AXLOGO} alt="AX Logo" priority style={styles.logoImage} />
        </div>
      </section>

      {/* CHAT WIDGET SCRIPT */}
      <Script
        src="https://ax-chat-demo-wl9b.vercel.app/widget.js"
        strategy="afterInteractive"
      />
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "var(--font-sans)",
  },

  hero: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  heroImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  logoImage: {
    width: "600px", // 👈 adjust size here
    height: "200px",
    maxWidth: "70vw", // responsive on mobile
  },
};
