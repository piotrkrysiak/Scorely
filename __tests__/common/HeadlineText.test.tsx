import React from 'react';
import { render } from '@testing-library/react-native';
import HeadlineText from 'src/components/common/HeadlineText';
import { H1, H3 } from 'src/constants';
import lightPalette from 'src/assets/styles/palette';

describe('Headline', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<HeadlineText>Headline</HeadlineText>);
    const text = getByText(/Headline/i);
    expect(text).toHaveStyle({
      fontSize: 18,
      color: lightPalette.dark,
      fontFamily: 'Poppins-SemiBold',
    });
  });

  it('renders correctly with H1 type ', () => {
    const { getByText } = render(
      <HeadlineText type={H1}>Headline</HeadlineText>,
    );
    const text = getByText(/Headline/i);
    expect(text).toHaveStyle({
      fontSize: 24,
      color: lightPalette.dark,
      fontFamily: 'Poppins-SemiBold',
    });
  });

  it('renders correctly with H1 type and style props ', () => {
    const { getByText } = render(
      <HeadlineText type={H1} style={{ margin: 20, color: 'blue' }}>
        Headline
      </HeadlineText>,
    );
    const text = getByText(/Headline/i);
    expect(text).toHaveStyle({
      fontSize: 24,
      color: 'blue',
      fontFamily: 'Poppins-SemiBold',
      margin: 20,
    });
  });

  it('renders correctly with H3 type and different color ', () => {
    const { getByText } = render(
      <HeadlineText type={H3} color="red">
        Headline
      </HeadlineText>,
    );
    const text = getByText(/Headline/i);
    expect(text).toHaveStyle({
      fontSize: 16,
      color: 'red',
      fontFamily: 'Poppins-Medium',
    });
  });
});
