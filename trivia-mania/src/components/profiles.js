import React from 'react';

export default function Profiles({ Leaderboard }) {
  return (
    <div id="profile">
      {Item(Leaderboard)}
    </div>
  )
}

function Item(data) {
  return (
    <>
      {data.map((value, index) => (
        <div className={`flex ${index % 2 === 0 ? 'even-entry' : 'odd-entry'}`} key={index}>
          <div className="item">
            <img src={value.img} alt="" />
            <div className="info">
              <h3 className='name text-dark'>{value.name}</h3>
              <span>{value.location}</span>
            </div>
          </div>
          <div className="item">
            <span>{value.score}</span>
          </div>
        </div>
      ))}
    </>
  );
}
