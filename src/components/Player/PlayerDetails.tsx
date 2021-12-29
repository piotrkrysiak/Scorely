import React from 'react';
import PlayerInfo from 'src/components/player/PlayerInfo';

const content = [
  {
    id: 1,
    name: 'Name',
    value: 'John Doe',
  },
  {
    id: 2,
    name: 'Age',
    value: '23',
  },
];

const PlayerDetails = () => (
  <>
    <PlayerInfo title="GeneralInfo" content={content} />
    <PlayerInfo title="GeneralInfo" content={content} />
  </>
);

export default PlayerDetails;
