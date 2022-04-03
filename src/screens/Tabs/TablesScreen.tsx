import React from 'react';
import Animated, { BounceIn, BounceOut } from 'react-native-reanimated';
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
      <Animated.View
        entering={BounceIn.duration(800).delay(200)}
        exiting={BounceOut.duration(800)}
      >
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
      </Animated.View>
    </Container>
  );
};
export default TablesScreen;
