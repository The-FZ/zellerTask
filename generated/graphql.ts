/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  getZellerCustomer?: Maybe<ZellerCustomer>;
  listZellerCustomers?: Maybe<ZellerCustomerConnection>;
};


export type QueryGetZellerCustomerArgs = {
  id: Scalars['String']['input'];
};


export type QueryListZellerCustomersArgs = {
  filter?: InputMaybe<TableZellerCustomerFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type TableStringFilterInput = {
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
};

export type TableZellerCustomerFilterInput = {
  email?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableStringFilterInput>;
  name?: InputMaybe<TableStringFilterInput>;
  role?: InputMaybe<TableStringFilterInput>;
};

export type ZellerCustomer = {
  __typename?: 'ZellerCustomer';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

export type ZellerCustomerConnection = {
  __typename?: 'ZellerCustomerConnection';
  items?: Maybe<Array<Maybe<ZellerCustomer>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type GetAllCustomerListQueryVariables = Exact<{
  filter?: InputMaybe<TableZellerCustomerFilterInput>;
}>;


export type GetAllCustomerListQuery = { __typename?: 'Query', listZellerCustomers?: { __typename?: 'ZellerCustomerConnection', items?: Array<{ __typename?: 'ZellerCustomer', id: string, name?: string | null, email?: string | null, role?: string | null } | null> | null } | null };

export type GetSingleCustomerQueryVariables = Exact<{
  getZellerCustomerId: Scalars['String']['input'];
}>;


export type GetSingleCustomerQuery = { __typename?: 'Query', getZellerCustomer?: { __typename?: 'ZellerCustomer', id: string, name?: string | null, email?: string | null, role?: string | null } | null };

export type ExampleQueryQueryVariables = Exact<{
  getZellerCustomerId: Scalars['String']['input'];
}>;


export type ExampleQueryQuery = { __typename?: 'Query', getZellerCustomer?: { __typename?: 'ZellerCustomer', id: string } | null };


/** All built-in and custom scalars, mapped to their actual values */

export const GetAllCustomerListDocument = gql`
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

/**
 * __useGetAllCustomerListQuery__
 *
 * To run a query within a React component, call `useGetAllCustomerListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCustomerListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCustomerListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetAllCustomerListQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCustomerListQuery, GetAllCustomerListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCustomerListQuery, GetAllCustomerListQueryVariables>(GetAllCustomerListDocument, options);
      }
export function useGetAllCustomerListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCustomerListQuery, GetAllCustomerListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCustomerListQuery, GetAllCustomerListQueryVariables>(GetAllCustomerListDocument, options);
        }
export function useGetAllCustomerListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllCustomerListQuery, GetAllCustomerListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCustomerListQuery, GetAllCustomerListQueryVariables>(GetAllCustomerListDocument, options);
        }
export type GetAllCustomerListQueryHookResult = ReturnType<typeof useGetAllCustomerListQuery>;
export type GetAllCustomerListLazyQueryHookResult = ReturnType<typeof useGetAllCustomerListLazyQuery>;
export type GetAllCustomerListSuspenseQueryHookResult = ReturnType<typeof useGetAllCustomerListSuspenseQuery>;
export type GetAllCustomerListQueryResult = Apollo.QueryResult<GetAllCustomerListQuery, GetAllCustomerListQueryVariables>;

export const GetSingleCustomerDocument = gql`
    query GetSingleCustomer($getZellerCustomerId: String!) {
  getZellerCustomer(id: $getZellerCustomerId) {
    id
    name
    email
    role
  }
}
    `;

/**
 * __useGetSingleCustomerQuery__
 *
 * To run a query within a React component, call `useGetSingleCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleCustomerQuery({
 *   variables: {
 *      getZellerCustomerId: // value for 'getZellerCustomerId'
 *   },
 * });
 */
export function useGetSingleCustomerQuery(baseOptions: Apollo.QueryHookOptions<GetSingleCustomerQuery, GetSingleCustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSingleCustomerQuery, GetSingleCustomerQueryVariables>(GetSingleCustomerDocument, options);
      }
export function useGetSingleCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSingleCustomerQuery, GetSingleCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSingleCustomerQuery, GetSingleCustomerQueryVariables>(GetSingleCustomerDocument, options);
        }
export function useGetSingleCustomerSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSingleCustomerQuery, GetSingleCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSingleCustomerQuery, GetSingleCustomerQueryVariables>(GetSingleCustomerDocument, options);
        }
export type GetSingleCustomerQueryHookResult = ReturnType<typeof useGetSingleCustomerQuery>;
export type GetSingleCustomerLazyQueryHookResult = ReturnType<typeof useGetSingleCustomerLazyQuery>;
export type GetSingleCustomerSuspenseQueryHookResult = ReturnType<typeof useGetSingleCustomerSuspenseQuery>;
export type GetSingleCustomerQueryResult = Apollo.QueryResult<GetSingleCustomerQuery, GetSingleCustomerQueryVariables>;
export const ExampleQueryDocument = gql`
    query ExampleQuery($getZellerCustomerId: String!) {
  getZellerCustomer(id: $getZellerCustomerId) {
    id
  }
}
    `;

/**
 * __useExampleQueryQuery__
 *
 * To run a query within a React component, call `useExampleQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useExampleQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExampleQueryQuery({
 *   variables: {
 *      getZellerCustomerId: // value for 'getZellerCustomerId'
 *   },
 * });
 */
export function useExampleQueryQuery(baseOptions: Apollo.QueryHookOptions<ExampleQueryQuery, ExampleQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExampleQueryQuery, ExampleQueryQueryVariables>(ExampleQueryDocument, options);
      }
export function useExampleQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExampleQueryQuery, ExampleQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExampleQueryQuery, ExampleQueryQueryVariables>(ExampleQueryDocument, options);
        }
export function useExampleQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ExampleQueryQuery, ExampleQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ExampleQueryQuery, ExampleQueryQueryVariables>(ExampleQueryDocument, options);
        }
export type ExampleQueryQueryHookResult = ReturnType<typeof useExampleQueryQuery>;
export type ExampleQueryLazyQueryHookResult = ReturnType<typeof useExampleQueryLazyQuery>;
export type ExampleQuerySuspenseQueryHookResult = ReturnType<typeof useExampleQuerySuspenseQuery>;
export type ExampleQueryQueryResult = Apollo.QueryResult<ExampleQueryQuery, ExampleQueryQueryVariables>;