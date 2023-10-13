import mockUsers from '../data/mockUsers';
import catprofile from "../assets/catprofile.jpg"
export let Leaderboard = [
  {
    name: 'S Hanna',
    location: 'India',
    score: 31,
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    dt: '2023-10-02',
  },
  {
    name: 'K Fandy',
    location: 'USA',
    score: 25,
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    dt: '2023-09-03',
  },
  {
    name: 'B Vicky',
    location: 'Australia',
    score: 19,
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    dt: '2023-08-17',
  },
  {
    name: 'A Wunsch',
    location: 'Japan',
    score: 18,
    img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    dt: '2023-10-09',
  },
  {
    name: 'C Connell',
    location: 'London',
    score: 16,
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    dt: '2023-08-31',
  },
  {
    name: 'C Prosaccuito',
    location: 'Canada',
    score: 11,
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    dt: '2023-09-21',
  },
];

export const UpdatedLeaderBoard = (score) => {
  // Check if the player already exists in the leaderboard
  const playerIndex = Leaderboard.findIndex(
    (player) => player.name === mockUsers[0].name
  );

  if (playerIndex !== -1) {
    // Player exists, update their score
    Leaderboard[playerIndex].score = score;
  } else {
    // Player doesn't exist, add a new entry
    const newPlayer = {
      name: mockUsers[0].name,
      location: 'Singapore',
      score: score,
      img: catprofile,
      dt: '2023-10-09',
    };

    Leaderboard.push(newPlayer);
  }
};
