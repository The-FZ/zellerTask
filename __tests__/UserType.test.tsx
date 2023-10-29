import React from 'react';
import {render} from '@testing-library/react-native';
import UserType from '../src/components/UserType';

describe('Renders User Type Component', () => {
  it('renders the component', () => {
    const {getByText} = render(
      <UserType
        getUserType={function (): void {
          throw new Error('Function not implemented.');
        }}
        selected={undefined}
      />,
    );

    expect(getByText('User Types')).toBeTruthy();
    expect(getByText('Admin')).toBeTruthy();
    expect(getByText('Manager')).toBeTruthy();
  });
});
