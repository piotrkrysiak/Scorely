import React from 'react';
import { Wrapper } from 'src/components/containers';
import ErrorContainer from 'src/components/containers/ErrorContainer';
import TableHeader from 'src/components/table/TableHeader';
import TableRow from 'src/components/table/TableRow';
import { errorConverter } from 'src/helpers/errorConverter';
import { useGetLeagueTableQuery } from 'src/services/football';

const TablesScreen = () => {
  const { data, error, refetch } = useGetLeagueTableQuery();

  if (!data) {
    return <ErrorContainer error={errorConverter(error)} refresh={refetch} />;
  }

  return (
    <Wrapper>
      <TableHeader />
      {data.map(
        ({ team: { id, name, logo }, rank, points, goalsDiff, played }) => (
          <TableRow
            rank={rank}
            key={id}
            name={name}
            logo={logo}
            points={points}
            goalsDiff={goalsDiff}
            played={played}
          />
        ),
      )}
    </Wrapper>
  );
};
export default TablesScreen;
