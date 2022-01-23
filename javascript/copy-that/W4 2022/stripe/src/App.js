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
      <div className="hero">
        <div className="small">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
          </p>
          <button>Start now &gt;</button>
          <button>Contact sales &gt;</button>
        </div>

        <div className="small phone">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Increment Magazine</h1>
            <p>$14 per quarter</p>
            <button>Pay</button>
            <p>Or pay with card</p>
            <label>
              <input type="email" />
            </label>

            <label>
              Email
              <input type="email"
              />
            </label>

            <label>
              Card Information
              <input type="password"
                placeholder="Number"
              />
              <input
                type="date"
                placeholder="MM/YY"
              />
              <input type="password"
                placeholder="CVC"
              />
            </label>

            <label>
              Country or region
              <input
              type="country"
              />
            </label>

            <button>
              Pay
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
