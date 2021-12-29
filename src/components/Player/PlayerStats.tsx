import React, { memo } from 'react';
import { useGetPlayerQuery } from 'src/services/football';
import PlayerInfo from 'src/components/player/PlayerInfo';
import { HeadlineText, Text } from '../common';
import Container from '../containers/Container';

interface Props {
  id: number;
}
const PlayerStats = memo(({ id }: Props) => {
  const { data, isLoading } = useGetPlayerQuery(id);

  if (!data) {
    return <HeadlineText>There is not table data</HeadlineText>;
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  const { statistics } = data;

  const main = [
    {
      id: 1,
      name: 'Played',
      value: statistics.gamesPlayed,
    },
    {
      id: 2,
      name: 'Goals',
      value: statistics.goals,
    },
    {
      id: 3,
      name: 'Assists',
      value: statistics.assists,
    },
    {
      id: 4,
      name: 'Rating',
      value: statistics.rating,
    },
  ];

  const shots = [
    {
      id: 1,
      name: 'Total',
      value: statistics.shots,
    },
    {
      id: 2,
      name: 'Shots on target',
      value: statistics.shotsOn,
    },
  ];

  const passes = [
    {
      id: 1,
      name: 'Total',
      value: statistics.passes.total,
    },
    {
      id: 2,
      name: 'Key passes',
      value: statistics.passes.key,
    },
    {
      id: 3,
      name: 'Accuracy',
      value: statistics.passes.accuracy,
    },
  ];

  const tackles = [
    {
      id: 1,
      name: 'Total',
      value: statistics.tackles.total,
    },
    {
      id: 2,
      name: 'Blocks',
      value: statistics.tackles.blocks,
    },
    {
      id: 3,
      name: 'Interceptions',
      value: statistics.tackles.interceptions,
    },
  ];

  const fouls = [
    {
      id: 1,
      name: 'Drawn',
      value: statistics.fouls.drawn,
    },
    {
      id: 2,
      name: 'Commited',
      value: statistics.fouls.committed,
    },
  ];

  return (
    <Container scroll>
      <PlayerInfo title="Main Stats" content={main} />
      <PlayerInfo title="Shots" content={shots} />
      <PlayerInfo title="Passes" content={passes} />
      <PlayerInfo title="Tackles" content={tackles} />
      <PlayerInfo title="Fouls" content={fouls} />
    </Container>
  );
});
export default PlayerStats;
