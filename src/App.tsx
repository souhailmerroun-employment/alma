import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './pages/About';
import Home from './pages/Home';
import Payments from './pages/Payments';
import { ROUTE_ABOUT, ROUTE_HOME, ROUTE_PAYMENTS } from './pages/routes';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={ROUTE_HOME} element={<Home />} />
        <Route path={ROUTE_ABOUT} element={<About />} />
        <Route path={ROUTE_PAYMENTS} element={<Payments />} />
      </Routes>
    </>
  );
}

export default App;
