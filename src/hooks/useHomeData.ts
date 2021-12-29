import { REGULAR_SEASON_1 } from 'src/constants';
import {
  useGetGameweekQuery,
  useGetLeagueTableQuery,
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

  const {
    data: table,
    isLoading: isTableLoading,
    isError: isTableError,
    refetch: refetchTable,
    error: tableError,
  } = useGetLeagueTableQuery();

  const isLoading =
    isPlayersLoading || isRoundLoading || isMatchesLoading || isTableLoading;
  const isError =
    isPlayersError || isRoundError || isMatchesError || isTableError;
  const error = playersError || roundError || matchesError || tableError;

  const refetch = () => {
    refetchPlayers();
    refetchRound();
    refetchMatches();
    refetchTable();
  };

  return {
    players,
    round,
    matches,
    table,
    isLoading,
    isError,
    error,
    refetch,
  };
}
