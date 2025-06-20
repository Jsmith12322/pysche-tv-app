import Image from 'next/image';
import Link from 'next/link';
import '../globals.css';

export default function Home() {
  return (
    <main>
      <Image
        src="/pyschemainlogo.png"
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

