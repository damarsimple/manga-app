import { ApolloClient, InMemoryCache, DefaultOptions } from "@apollo/client";

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

export const client = new ApolloClient({
  uri: process.browser
    ? process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
    : process.env.NEXT_PUBLIC_USE_INNER_GRAPHQL_ENDPOINT == "true"
    ? process.env.NEXT_PUBLIC_INNER_GRAPHQL_ENDPOINT
    : process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
  defaultOptions: process.browser ? undefined : defaultOptions,
});
