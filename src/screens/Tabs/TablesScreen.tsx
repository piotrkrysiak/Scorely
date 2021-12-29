import React from 'react';
import { HeadlineText } from 'src/components/common';
import { Wrapper } from 'src/components/containers';
import Container from 'src/components/containers/Container';
import TableHeader from 'src/components/table/TableHeader';
import TableRow from 'src/components/table/TableRow';
import useHomeData from 'src/hooks/useHomeData';

const TablesScreen = () => {
  const { table } = useHomeData();

  if (!table) {
    <HeadlineText>There is not table data</HeadlineText>;
  }

  return (
    <Container scroll>
      <Wrapper>
        <TableHeader />
        {table?.map(
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
    </Container>
  );
};
export default TablesScreen;
