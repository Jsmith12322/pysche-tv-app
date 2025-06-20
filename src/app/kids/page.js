export default function KidsPage() {
    return (
      <main className="min-h-screen bg-white text-black p-8">
        <h1 className="text-4xl font-bold text-center mb-6">Welcome to PyscheTV Kids</h1>
        
        <section className="flex justify-center gap-6 mb-10">
          <div className="bg-yellow-400 text-black px-6 py-12 text-center rounded shadow-lg w-40 font-bold">
            MS. ARIA
          </div>
          <div className="bg-orange-500 text-black px-6 py-12 text-center rounded shadow-lg w-40 font-bold">
            NASIR
          </div>
        </section>
  
        <div className="text-center space-x-4 text-sm underline">
          <a href="#">Meet Ms. Aria</a>
          <a href="#">Start Exploring</a>
          <a href="#">Download Coloring Book</a>
          <a href="#">Play Aria’s Shape Catcher</a>
          <a href="#">Make Your Own Mascot!</a>
        </div>
      </main>
    );
  }
  