import React, { useState, useTransition } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLeaderboardPeriod } from '../redux/actions/leaderboardActions';
import Profiles from '../userProfiles/Profiles';
import { withAuthUser } from 'react-auth-kit'; // Import withAuthUser from react-auth-kit

function Leaderboard({ authState }) {
  const [period, setPeriod] = useState(0);
  const dispatch = useDispatch();
  const leaderboardPeriod = useSelector((state) => state.leaderboard.period);
  const [startTransition, isPending] = useTransition();

  const handleClick = (e) => {
    const selectedPeriod = parseInt(e.target.dataset.id);
    setPeriod(selectedPeriod);

    // Use startTransition to perform asynchronous tasks
    startTransition(() => {
      dispatch(setLeaderboardPeriod(selectedPeriod));
    });
  };

  return (
    <div className="board">
      <h1 className="leaderboard">Leaderboard</h1>

      <div className="duration">
        {authState && ( // Render buttons only if the user is authenticated
          <>
            <button
              onClick={handleClick}
              data-id="7"
              className={period === 7 ? 'active' : ''}
            >
              7 Days
            </button>
            <button
              onClick={handleClick}
              data-id="30"
              className={period === 30 ? 'active' : ''}
            >
              30 Days
            </button>
          </>
        )}
        <button
          onClick={handleClick}
          data-id="0"
          className={period === 0 ? 'active' : ''}
        >
          All-Time
        </button>
      </div>

      {isPending ? (
        <p>Loading...</p>
      ) : (
        <Profiles period={leaderboardPeriod} />
      )}
    </div>
  );
}

export default withAuthUser(Leaderboard);
