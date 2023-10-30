import React from 'react';
import {render} from '@testing-library/react-native';
import RadioButton from 'src/static/RadioButton';

describe('Renders radio button', () => {
  it('render component', () => {
    const {getByTestId} = render(<RadioButton selected={true} id={1} />);
    expect(getByTestId('1')).toBeTruthy();
  });
});
