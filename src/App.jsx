import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
function App() {
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-gradient-to-r from-[#000000] to-[#252525]"></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <Technology />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
