import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from './page/home/home';
import NotFound from './page/not-found/not-found';
import Header from './components/header/header';
import UnitsOfMeasurement from './page/units-of-measurement/units-of-measurement';
import Devices from './page/all-devices/devices';
import About from './page/about/about';
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/units-of-measurement" element={<UnitsOfMeasurement />}/>
        <Route path="/all-devices-size" element={<Devices />}/>
        <Route path='/about' element={<About />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
