import { ApolloProvider } from "@apollo/client/react";
import { Stack } from "expo-router";
import { apolloClient } from "../src/graphql/client";

export default function Layout() {
  return (
    <ApolloProvider client={apolloClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="article/[id]"
          options={{
            headerShown: false,
            animation: "slide_from_right",
          }}
        />
      </Stack>
    </ApolloProvider>
  );
}
