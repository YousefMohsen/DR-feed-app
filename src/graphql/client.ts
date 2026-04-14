import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const DR_STEFFI_GRAPHQL_URL = process.env.EXPO_PUBLIC_DR_STEFFI_GRAPHQL_URL;

if (!DR_STEFFI_GRAPHQL_URL) {
  console.warn(
    "EXPO_PUBLIC_DR_STEFFI_GRAPHQL_URL is not set. Apollo Client will not be able to fetch data.",
  );
}

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: DR_STEFFI_GRAPHQL_URL,
  }),
  cache: new InMemoryCache(),
});
