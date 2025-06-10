import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-black text-white">
      <Image
        src="/pyschemainlogo.png"
        alt="PyscheTV+ Logo"
        width={300}
        height={300}
        priority
      />

      <h1 className="mt-6 text-2xl font-semibold">Welcome to PyscheTV+</h1>
      <p className="mt-2 text-gray-400 text-center max-w-md">
        Edit this page by opening <code>src/app/page.js</code> in your editor.
      </p>
    </main>
  );
}
