import React from 'react';
import { render } from '@testing-library/react-native';
import Text from 'src/components/common/Text';
import { TEXT } from 'src/constants';

describe('Text', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Text>Text</Text>);
    const text = getByText(/Text/i);
    expect(text).toHaveStyle({
      fontSize: 14,
      color: TEXT,
      fontFamily: 'Poppins-Regular',
    });
  });

  it('renders correctly with additional props', () => {
    const { getByText } = render(
      <Text
        fontWeight="Medium"
        color="red"
        fontSize={20}
        style={{ margin: 20 }}>
        Text
      </Text>,
    );
    const text = getByText(/Text/i);
    expect(text).toHaveStyle({
      fontSize: 20,
      color: 'red',
      fontFamily: 'Poppins-Medium',
      margin: 20,
    });
  });
});
