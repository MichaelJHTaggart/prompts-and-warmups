import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <div className="App">
      
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>Products</li>
          <li>Use Cases</li>
          <li>Developers</li>
          <li>Company</li>
          <li>Pricing</li>
        </ul>
        <button>Sign in &gt;</button>
      </nav>
     
       <canvas className="background">
        
       </canvas>
      
      <h1>Payments infrastructure for the internet</h1>
      <p>
      Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
      </p>
    </div>
  );
}

export default App;
