import React from "react";

const fixtures = [
  {
    homeTeam: { name: "Cleveland Cavaliers", logo: "https://img.goodfon.com/original/3840x2400/4/c0/wallpaper-sport-logo-basketball-nba-cleveland-cavaliers-1.jpg" },
    awayTeam: { name: "Golden State Warriors", logo: "https://wallpapers.com/images/hd/golden-state-warriors-logo-pqz9td3l5vcief7h.jpg" },
    time: "19:00",
  },
  {
    homeTeam: { name: "New Orleans Pelicans", logo: "https://img.goodfon.com/original/3840x2400/6/63/wallpaper-sport-logo-basketball-nba-new-orleans-pelicans-1.jpg" },
    awayTeam: { name: "Phoenix Suns", logo: "https://wallpapers.com/images/hd/phoenix-suns-on-metal-screen-mesh-t7deflifg8y3uopp.jpg" },
    time: "14:00",
  },
  // Add more fixtures as needed
];

const Fixtures = () => {
  return (
    <div className="fixtures">
      <h2>Matchweek 1</h2>
      <p>All times shown are your local time</p>
      <ul className="fixtures-list">
        {fixtures.map((fixture, index) => (
          <li key={index} className="fixture-item">
            <div className="team">
              <img src={fixture.homeTeam.logo} alt={fixture.homeTeam.name} className="team-logo" />
              <span className="team-name">{fixture.homeTeam.name}</span>
            </div>
            <span className="match-time">{fixture.time}</span>
            <div className="team">
              <img src={fixture.awayTeam.logo} alt={fixture.awayTeam.name} className="team-logo" />
              <span className="team-name">{fixture.awayTeam.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fixtures;
