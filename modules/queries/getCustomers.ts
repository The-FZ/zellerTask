import {gql} from '@apollo/client';

export const GetAllCustomerList = gql`
  query GetAllCustomerList($filter: TableZellerCustomerFilterInput) {
    listZellerCustomers(filter: $filter) {
      items {
        id
        name
        email
        role
      }
    }
  }
`;
