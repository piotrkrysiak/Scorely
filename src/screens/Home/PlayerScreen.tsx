import React, { FC } from 'react';
import { Route } from 'react-native';
import { HeadlineText, Text } from 'src/components/common';
import PlayerHeader from 'src/components/player/PlayerHeader';
import TopTabs from 'src/navigation/TopTabs';
import { useGetPlayerQuery } from 'src/services/football';

interface Props {
  route: Route;
}

const PlayerScreen: FC<Props> = ({ route }) => {
  const { id } = route.params;
  const { data, isLoading } = useGetPlayerQuery(id);

  if (!data) {
    return <HeadlineText>There is not table data</HeadlineText>;
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <PlayerHeader
        name={data.firstName}
        surname={data.lastName}
        club={data.team}
        photo={data.photo}
        clubLogo={data.teamLogo}
      />
      <TopTabs id={id} />
    </>
  );
};
export default PlayerScreen;
