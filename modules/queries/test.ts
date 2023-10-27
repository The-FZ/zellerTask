import {gql} from '@apollo/client';

export const ExampleQuery = gql`
  query ExampleQuery($getZellerCustomerId: String!) {
    getZellerCustomer(id: $getZellerCustomerId) {
      id
    }
  }
`;
