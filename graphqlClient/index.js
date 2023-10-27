/* eslint-disable prettier/prettier */
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
	uri: 'https://prrwjjssnvhpbcdwbcwx3nm3zm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
	headers: {
		'x-api-key': 'da2-psmv7fcrw5dlpmp5orner2xf7i',
	},
	cache: new InMemoryCache(),
});

export default client;
