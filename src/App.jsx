import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from './page/home/home';
import NotFound from './page/not-found/not-found';
import Header from './components/header/header';
import UnitsOfMeasurement from './page/units-of-measurement/units-of-measurement';
import Devices from './page/all-devices/devices';
import About from './page/about/about';
import IpChecker from './page/ip-checker/ip-checker';
import IpDetail from './page/ip-detail/ip-detail';
import Hide from './page/hide-my-ip/hide';
import Footer from './components/footer/footer';
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/units-of-measurement" element={<UnitsOfMeasurement />}/>
        <Route path="/all-devices-size" element={<Devices />}/>
        <Route path='/about' element={<About />}/>
        <Route path="/ip-address-checker" element={<IpChecker />}/>
        <Route path="/ip-address-checker/ip/:ip" element={<IpDetail />}/>
        <Route path="/hide-my-ip-address" element={<Hide />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
