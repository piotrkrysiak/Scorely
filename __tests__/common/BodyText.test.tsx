import React from 'react';
import { render } from '@testing-library/react-native';
import { BodyText } from 'src/components/common';
import { HELP, SMALLER_BODY, SMALLER_BODY_SEMI } from 'src/constants';
import lightPalette from 'src/assets/styles/palette';

describe('BodyText', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<BodyText>Body</BodyText>);
    const text = getByText(/Body/i);
    expect(text).toHaveStyle({
      fontSize: 16,
      color: lightPalette.dark,
      fontFamily: 'Poppins-Regular',
    });
  });

  it('renders correctly with style props', () => {
    const { getByText } = render(
      <BodyText style={{ margin: 20 }}>Body</BodyText>,
    );
    const text = getByText(/Body/i);
    expect(text).toHaveStyle({
      fontSize: 16,
      color: lightPalette.dark,
      fontFamily: 'Poppins-Regular',
      margin: 20,
    });
  });

  it('renders correctly with SmallerBody type', () => {
    const { getByText } = render(<BodyText type={SMALLER_BODY}>Body</BodyText>);
    const text = getByText(/Body/i);
    expect(text).toHaveStyle({
      fontSize: 14,
      color: lightPalette.dark,
      fontFamily: 'Poppins-Regular',
    });
  });

  it('renders correctly with SmallerBodySemi and different color type is rendered', () => {
    const { getByText } = render(
      <BodyText type={SMALLER_BODY_SEMI} color="red">
        Body
      </BodyText>,
    );
    const text = getByText(/Body/i);
    expect(text).toHaveStyle({
      fontSize: 14,
      color: 'red',
      fontFamily: 'Poppins-SemiBold',
    });
  });

  it('renders correctly with Help type', () => {
    const { getByText } = render(
      <BodyText type={HELP} color="red">
        Body
      </BodyText>,
    );
    const text = getByText(/Body/i);
    expect(text).toHaveStyle({
      fontSize: 10,
      color: 'red',
      fontFamily: 'Poppins-Medium',
    });
  });
});
