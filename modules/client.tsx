import {
  ApolloClient,
  InMemoryCache,
  DefaultOptions,
  from,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError, ...rest }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    console.log(`[query] ${rest.operation.query}`);
    console.log(`[query] ${rest.operation.variables}`);
  }
});

const uri = process.browser
  ? process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
  : process.env.NEXT_PUBLIC_USE_INNER_GRAPHQL_ENDPOINT == "true"
  ? process.env.NEXT_PUBLIC_INNER_GRAPHQL_ENDPOINT
  : process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

const httpLink = new HttpLink({
  uri,
});

export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  uri,
  cache: new InMemoryCache(),
  defaultOptions: process.browser ? undefined : defaultOptions,
});
