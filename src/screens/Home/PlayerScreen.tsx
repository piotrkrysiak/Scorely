import React, { FC } from 'react';
import { Route } from 'react-native';
import { useDispatch } from 'react-redux';
import { HeadlineText, Text } from 'src/components/common';
import PlayerHeader from 'src/components/player/PlayerHeader';
import TopTabs from 'src/navigation/TopTabs';
import { setFavorite } from 'src/redux/favorites/FavoriteActions';
import { useGetPlayerQuery } from 'src/services/football';
import { Player } from 'src/ts/interfaces';

interface Props {
  route: Route;
}

const PlayerScreen: FC<Props> = ({ route }) => {
  const { id } = route.params;
  const { data, isLoading } = useGetPlayerQuery(id);

  // const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const handleAddPlayer = async () => {
    if (data) {
      const player: Player = {
        id: data.id,
        name: data.name,
        position: data.position,
        photo: data.photo,
        team: data.team,
        statistics: data.statistics,
      };
      await dispatch(setFavorite(player));
    }
  };

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
        onPress={handleAddPlayer}
      />
      <TopTabs id={id} />
    </>
  );
};
export default PlayerScreen;
