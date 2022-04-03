import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import Animated, { BounceIn, BounceOut } from 'react-native-reanimated';
import { HeaderBar, HeadlineText } from 'src/components/common';
import { IconTypes } from 'src/components/common/Icon';
import Container from 'src/components/containers/Container';
import ErrorContainer from 'src/components/containers/ErrorContainer';
import MatchCard from 'src/components/home/MatchCard';
import { HomeScreenProp, IONICONS, Route } from 'src/constants';
import { errorConverter } from 'src/helpers/errorConverter';
import useHomeData from 'src/hooks/useHomeData';
import { useGetGameweekQuery } from 'src/services/football';

const ResultsScreen = () => {
  const {
    round: currentRound,
    isLoading,
    error,
    isError,
    refetch,
  } = useHomeData();
  const { navigate } = useNavigation<HomeScreenProp>();

  let roundNumber = 1;
  if (currentRound) {
    roundNumber = parseInt(
      currentRound.toString().replace('Regular Season -', ''),
      10,
    );
  }
  const [round, setRound] = useState<number>(roundNumber);

  const { data } = useGetGameweekQuery(`Regular Season - ${round}`);

  if (isLoading) {
    return (
      <Container style={styles.container}>
        <ActivityIndicator />
      </Container>
    );
  }

  if (currentRound?.length === 0) {
    return <HeadlineText>There is not matches data</HeadlineText>;
  }

  if (isError) {
    return <ErrorContainer error={errorConverter(error)} refresh={refetch} />;
  }

  const leftIcon = {
    type: IONICONS as IconTypes,
    name: 'chevron-back-outline',
    onPressFunction: () => setRound(prev => prev - 1),
  };
  const rightIcon = {
    type: IONICONS as IconTypes,
    name: 'chevron-forward',
    onPressFunction: () => setRound(prev => prev + 1),
  };
  return (
    <Container scroll>
      <Animated.View
        entering={BounceIn.duration(800).delay(200)}
        exiting={BounceOut.duration(800)}
      >
        <HeaderBar
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          title={`Gameweek ${round}`}
        />
        {data?.map(({ id, home, away, status }) => (
          <MatchCard
            key={id}
            host={home}
            guest={away}
            status={status}
            onPress={() => navigate(Route.MATCH, { id, home, away, status })}
          />
        ))}
      </Animated.View>
    </Container>
  );
};
export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
