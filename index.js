/**
 * @format
 */
import React from 'react';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import AppRoute from './src/navigation';
import { name as appName } from './app.json';
import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    ApolloProvider,
    from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = AsyncStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? token : '',
        },
    };
});

const client = new ApolloClient({
    // link: authLink.concat(httpLink),
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
    },
});

const App = () => (
    <SafeAreaProvider>
        <ApolloProvider client={client}>
            <AppRoute />
        </ApolloProvider>
    </SafeAreaProvider>
);
AppRegistry.registerComponent(appName, () => App);
