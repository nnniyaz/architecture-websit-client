import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Popup from './components/popup/Popup'

function App() {
  return (
    <div className="App">
      <Popup />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
