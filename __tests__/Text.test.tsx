import React from 'react';
import { render } from '@testing-library/react-native';
import Text from 'src/components/common/Text';

describe('Text component: ', () => {
  it('Text is rendered with default props', () => {
    const { getByText } = render(<Text>Text</Text>);
    const text = getByText(/Text/i);
    expect(text).toHaveStyle({
      fontSize: 14,
      color: 'black',
      fontFamily: 'Poppins-Regular',
    });
  });

  it('Text is rendered with !', () => {
    const { getByText } = render(
      <Text fontWeight="Medium" color="red" fontSize={20}>
        Text
      </Text>,
    );
    const text = getByText(/Text/i);
    expect(text).toHaveStyle({
      fontSize: 20,
      color: 'red',
      fontFamily: 'Poppins-Medium',
    });
  });
});
