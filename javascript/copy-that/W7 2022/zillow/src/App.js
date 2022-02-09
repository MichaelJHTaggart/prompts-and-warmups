import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  const [newUser, setNewUser] = useState(true);
  

  return (
    <div className="App">
      {newUser && <Banner setNewUser={setNewUser} />}
      <NavBar />

      <Hero />

    </div>
  );
}

export default App;
