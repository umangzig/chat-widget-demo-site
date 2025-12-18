import Script from "next/script";

export default function Home() {
  return (
    <main style={styles.container}>
      <section style={styles.hero}>
        <img src="https://docs.axiumai.io/img/favicon.png" alt="#" />
      </section>

      {/* The Chat Widget Script */}
      <Script src="https://ax-chat-demo-wl9b.vercel.app/widget.js" />
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
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 48px",
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "var(--foreground)",
  },
  links: {
    display: "flex",
    gap: "32px",
  },
  link: {
    textDecoration: "none",
    color: "var(--secondary)",
    fontSize: "16px",
    fontWeight: 500,
  },
  loginBtn: {
    padding: "10px 24px",
    borderRadius: "8px",
    border: "1px solid var(--secondary)",
    background: "transparent",
    color: "var(--foreground)",
    cursor: "pointer",
    fontWeight: 600,
  },
  hero: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 48px",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    gap: "60px",
  },
  heroContent: {
    maxWidth: "600px",
  },
  title: {
    fontSize: "64px",
    fontWeight: 800,
    background:
      "linear-gradient(to right, var(--foreground), var(--secondary))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "24px",
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: "20px",
    color: "var(--secondary)",
    marginBottom: "40px",
    maxWidth: "480px",
  },
  ctaGroup: {
    display: "flex",
    gap: "16px",
  },
  primaryBtn: {
    padding: "16px 32px",
    backgroundColor: "var(--brand-color)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "opacity 0.2s",
  },
  secondaryBtn: {
    padding: "16px 32px",
    backgroundColor: "transparent",
    color: "var(--foreground)",
    border: "1px solid var(--secondary)",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: 600,
    cursor: "pointer",
  },
  heroImage: {
    flex: 1,
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderImg: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
    borderRadius: "24px",
    boxShadow: "0 20px 40px -10px rgba(14, 165, 233, 0.2)",
  },
};
