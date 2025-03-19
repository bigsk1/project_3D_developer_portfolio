import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { About, Experience, Hero, Navbar, Tech, Works, Website, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          <SpeedInsights />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Website />
        <div className='relative z-0'>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
