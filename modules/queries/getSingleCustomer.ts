import {gql} from '@apollo/client';

export const GetSingleCustomer = gql`
  query GetSingleCustomer($getZellerCustomerId: String!) {
    getZellerCustomer(id: $getZellerCustomerId) {
      id
      name
      email
      role
    }
  }
`;
