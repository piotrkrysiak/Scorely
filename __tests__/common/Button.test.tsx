import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from 'src/components/common/Button';
import lightPalette from 'src/assets/styles/palette';
import { BORDER } from 'src/constants';

describe('Button', () => {
  it('calls onPress when clicked', () => {
    const onPress = jest.fn();
    const { getByText } = render(<Button title="button" onPress={onPress} />);
    const button = getByText(/button/i);
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(2);
  });

  it('renders correctly with default props', () => {
    const onPress = jest.fn();
    const { getByText, getByTestId } = render(
      <Button title="button" onPress={onPress} testID="testID" />,
    );
    const button = getByTestId('testID');
    const buttonText = getByText(/button/i);
    expect(button).toHaveStyle({ backgroundColor: lightPalette.primary });
    expect(buttonText).toHaveStyle({ color: lightPalette.white });
  });

  it('renders correctly with secondary props', () => {
    const onPress = jest.fn();
    const { getByText, getByTestId } = render(
      <Button title="button" onPress={onPress} testID="testID" secondary />,
    );
    const button = getByTestId('testID');
    const buttonText = getByText(/button/i);
    expect(button).toHaveStyle({ backgroundColor: BORDER });
    expect(buttonText).toHaveStyle({ color: lightPalette.primary });
  });

  it('renders correctly when loading', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Button title="button" loading onPress={onPress} testID="testID" />,
    );
    const button = getByTestId('testID');
    fireEvent.press(button);
    expect(button).toHaveStyle({ backgroundColor: lightPalette.active });
    expect(onPress).toHaveBeenCalledTimes(0);
  });

  it('renders correctly when disabled', () => {
    const onPress = jest.fn();
    const { getByText, getByTestId } = render(
      <Button title="button" disabled onPress={onPress} testID="testID" />,
    );
    const button = getByTestId('testID');
    const buttonText = getByText(/button/i);
    expect(button).toHaveStyle({ backgroundColor: BORDER });
    expect(buttonText).toHaveStyle({ color: lightPalette.dark30 });
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(0);
  });
});
