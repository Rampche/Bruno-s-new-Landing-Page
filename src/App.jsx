import Navbar from './components/navbar/Navbar';
import './App.css';
import Hero from './components/Hero';

function App() {
  return (
    <main className="bg-[#d9d9d9] w-full h-full overflow-x-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
