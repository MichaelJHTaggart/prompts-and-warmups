import './Header.css';
import image from './seaOfTheives.png';

export const Header = () => {
  return (
    <div className="Header">
      <img src={image} alt="sea of theives" />
      <ul className="List">
        <li>
          The Game <div>&#x2192;</div>
        </li>
        <li>
          What's New <div>&#x2192;</div>
        </li>
        <li>
          Community <div>&#x2192;</div>
        </li>
        <li>
          Watch <div>&#x2192;</div>
        </li>
        <li>
          My Pirate <div>&#x2192;</div>
        </li>
        <li>
          Support <div>&#x2192;</div>
        </li>
        <li>
          Store <div>&#x2192;</div>
        </li>
      </ul>

      <button className="Button">PLAY NOW</button>
    </div>
  );
};
