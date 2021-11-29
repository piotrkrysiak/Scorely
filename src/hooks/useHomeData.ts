import { REGULAR_SEASON_1 } from 'src/constants';
import {
  useGetGameweekQuery,
  useGetRoundQuery,
  useGetTopScorersQuery,
} from 'src/services/football';

export default function useHomeData() {
  const {
    data: players,
    isLoading: isPlayersLoading,
    isError: isPlayersError,
    refetch: refetchPlayers,
    error: playersError,
  } = useGetTopScorersQuery();

  const {
    data: round,
    isLoading: isRoundLoading,
    isError: isRoundError,
    refetch: refetchRound,
    error: roundError,
  } = useGetRoundQuery();

  const {
    data: matches,
    isLoading: isMatchesLoading,
    isError: isMatchesError,
    refetch: refetchMatches,
    error: matchesError,
  } = useGetGameweekQuery(round || REGULAR_SEASON_1);

  const isLoading = isPlayersLoading || isRoundLoading || isMatchesLoading;
  const isError = isPlayersError || isRoundError || isMatchesError;
  const error = playersError || roundError || matchesError;

  const refetch = () => {
    refetchPlayers();
    refetchRound();
    refetchMatches();
  };

  return {
    players,
    round,
    matches,
    isLoading,
    isError,
    error,
    refetch,
  };
}
