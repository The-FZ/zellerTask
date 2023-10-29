import React from 'react';
import {render} from '@testing-library/react-native';
import UserList from '../src/components/UserList';

describe('User list component', () => {
  it('renders empty list', () => {
    const {getByText} = render(
      <UserList
        data={[]}
        selected={''}
        isRefreshing={false}
        handleRefresh={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );

    expect(getByText('Data not available')).toBeTruthy();
  });

  it('renders list when data is not empty', () => {
    render(
      <UserList
        data={[
          {
            email: 'zelle@zeller.com',
            id: '1',
            name: 'Test',
            role: 'Admin',
            __typename: 'Zellercustomeer',
          },
        ]}
        selected={''}
        isRefreshing={false}
        handleRefresh={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
  });
});
