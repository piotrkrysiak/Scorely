import { render } from '@testing-library/react-native';
import React from 'react';
import TestComponent from 'src/components/TestComponent';

describe('Tests config basic test', () => {
  it('TestComponent is rendered', () => {
    const { getByText } = render(<TestComponent />);
    const title = getByText(/title/i);
    expect(title.props.children).toBe('title');
  });
});
