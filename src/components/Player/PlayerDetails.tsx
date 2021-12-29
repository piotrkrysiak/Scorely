import React, { memo } from 'react';
import PlayerInfo from 'src/components/player/PlayerInfo';
import { useGetPlayerQuery } from 'src/services/football';
import { HeadlineText, Text } from '../common';
import Container from '../containers/Container';

interface Props {
  id: number;
}
const PlayerDetails = memo(({ id }: Props) => {
  const { data, isLoading } = useGetPlayerQuery(id);

  if (!data) {
    return <HeadlineText>There is not table data</HeadlineText>;
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const general = [
    {
      id: 1,
      name: 'Nationality',
      value: data.nationality,
    },
    {
      id: 2,
      name: 'Position',
      value: data.position,
    },
    {
      id: 3,
      name: 'Age',
      value: data.age,
    },
    {
      id: 4,
      name: 'Height',
      value: data.height,
    },
    {
      id: 5,
      name: 'Weight',
      value: data.weight,
    },
  ];

  const additional = [
    {
      id: 1,
      name: 'Date of birth',
      value: data.date,
    },
    {
      id: 2,
      name: 'City of birth',
      value: data.city,
    },
  ];
  return (
    <Container scroll>
      <PlayerInfo title="General Information" content={general} />
      <PlayerInfo title="GeneralInfo" content={additional} />
    </Container>
  );
});
export default PlayerDetails;
