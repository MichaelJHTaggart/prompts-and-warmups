import back from './back.png';
// import front from './front.png';
// import mid from './mid.png';
// import logo from './logo.png';

export const Hero = () => {
  <div className="parallax">
    <div className="parallax__group">
      <img
        src={back}
        alt="pirate"
        className="parallax__layer parallax__layer--back"
      />
      {/* <img
        src={mid}
        alt="pirate"
        className="parallax__layer parallax__layer--mid"
      />
      <img
        src={front}
        alt="pirate"
        className="parallax__layer parallax__layer--front"
      />
      <img
        src={logo}
        alt="pirate"
        className="parallax__layer parallax__layer--logo"
      /> */}
    </div>
    <div className="parallax__group">...</div>
  </div>;
};
