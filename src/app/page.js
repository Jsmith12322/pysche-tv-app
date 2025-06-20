import Image from "next/image";
import logo from "../public/pyschemainlogo.png"; // adjust if file path differs
import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home-container">
      <Image
        src={logo}
        alt="PyscheTV+ Logo"
        width={200}
        height={200}
        className="logo"
      />
      <div className="hero-text">Welcome to PyscheTV+</div>
      <div className="typing-glow">Originals. Cartoons. Imagination.</div>

      <Link href="/kids">
        <button className="cta-button">Go to PyscheTV Kids</button>
      </Link>
    </main>
  );
}

