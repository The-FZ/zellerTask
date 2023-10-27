/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { ApolloProvider } from '@apollo/client';
import client from './graphqlClient';

const RootComponent = () => (
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);

AppRegistry.registerComponent(appName, () => RootComponent);