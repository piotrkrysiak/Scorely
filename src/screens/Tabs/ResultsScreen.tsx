/* eslint-disable no-console */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { HeaderBar, HeadlineText } from 'src/components/common';
import { IconTypes } from 'src/components/common/Icon';
import Container from 'src/components/containers/Container';
import MatchCard from 'src/components/home/MatchCard';
import { HomeScreenProp, IONICONS, Route } from 'src/constants';
import useHomeData from 'src/hooks/useHomeData';
import { useGetGameweekQuery } from 'src/services/football';

const ResultsScreen = () => {
  const { matches, round: currentRound } = useHomeData();
  const { navigate } = useNavigation<HomeScreenProp>();

  let roundNumber;
  if (currentRound) {
    roundNumber = parseInt(
      currentRound?.toString().replace('Regular Season -', ''),
      10,
    );
  }
  const [round, setRound] = useState<number>(roundNumber);

  if (round !== roundNumber) {
    console.log('round', round);
    const { data } = useGetGameweekQuery(`Regular Season - ${round}`);
    console.log(data);
  }

  const handleChangeRound = (count: number) => {
    setRound(count);
  };

  console.log('round', round);

  if (!matches || !currentRound) {
    <HeadlineText>There is not matches data</HeadlineText>;
  }

  const leftIcon = {
    type: IONICONS as IconTypes,
    name: 'chevron-back-outline',
    onPressFunction: () => handleChangeRound(round - 1),
  };
  const rightIcon = {
    type: IONICONS as IconTypes,
    name: 'chevron-forward',
    onPressFunction: () => handleChangeRound(round + 1),
  };
  return (
    <Container scroll>
      <HeaderBar
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        title={`Gameweek ${round}`}
      />
      {matches?.map(({ id, home, away, status }) => (
        <MatchCard
          key={id}
          host={home}
          guest={away}
          status={status}
          onPress={() => navigate(Route.MATCH, { id })}
        />
      ))}
    </Container>
  );
};
export default ResultsScreen;
