import './App.css';
import { useEffect } from 'react';
import Home from './pages/home';

function App() {

  useEffect(() =>{
    window.Telegram.WebApp.ready();
  },[])


  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
