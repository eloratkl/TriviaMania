import React from 'react';

const Profiles = ({ profiles }) => {
  return (
    <div>
      <h1>User Profiles</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <h2>{profile.name}</h2>
            <p>Email: {profile.email}</p>
            {/* Add more profile information as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profiles;
