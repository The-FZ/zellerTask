/* eslint-disable prettier/prettier */
import { ApolloClient, InMemoryCache } from '@apollo/client';
import variables from '../config';

const client = new ApolloClient({
	uri: variables.ROOT_URL,
	headers: {
		'x-api-key': variables.API_KEY,
	},
	cache: new InMemoryCache(),
});

export default client;
