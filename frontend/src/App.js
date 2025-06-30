import "./App.css";
import About from "./Components/About/About";
import Achi from "./Components/Achievments/Achi";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achi />
    </div>
  );
}

export default App;
