import {
  ApolloClient,
  InMemoryCache,
  DefaultOptions,
  from,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { event } from "./gtag";

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
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
      event({
        action: "exception",
        label: rest.operation.operationName ?? "unnamed-operation",
        category: "gql-error",
        description: message,
        fatal: true,
      });
    });
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    console.log(`[query] ${rest.operation.query}`);
    console.log(`[query] ${rest.operation.variables}`);
  }
});

const timeStartLink = new ApolloLink((operation, forward) => {
  operation.setContext({ start: performance.now() });
  return forward(operation);
});

const logTimeLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((data) => {
    // data from a previous link
    const time = performance.now() - operation.getContext().start;

    // console.log(
    // `operation ${operation.operationName} took ${time} to complete`
    // );

    // event({
    //   action: "timing_complete",
    //   category: "gql",
    //   label: operation.operationName,
    //   value: time,
    // });

    return data;
  });
});

const uri = process.browser
  ? process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
  : process.env.NEXT_PUBLIC_USE_INNER_GRAPHQL_ENDPOINT == "true"
  ? process.env.NEXT_PUBLIC_INNER_GRAPHQL_ENDPOINT
  : process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

const httpLink = new HttpLink({
  uri,
});

const BROWSER_LINK = from([errorLink, timeStartLink, logTimeLink]).concat(
  httpLink
);
const SERVER_LINK = from([errorLink]).concat(httpLink);

export const client = new ApolloClient({
  link: process.browser ? BROWSER_LINK : SERVER_LINK,
  cache: new InMemoryCache(),
  defaultOptions: process.browser ? undefined : defaultOptions,
});
