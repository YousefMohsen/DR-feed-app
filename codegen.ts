import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

dotenv.config();

const schemaUrl = process.env.EXPO_PUBLIC_DR_STEFFI_GRAPHQL_URL;
if (!schemaUrl) {
  throw new Error(
    "EXPO_PUBLIC_DR_STEFFI_GRAPHQL_URL is not set. Add it to your .env file.",
  );
}

const config: CodegenConfig = {
  schema: schemaUrl,
  documents: "src/graphql/queries/**/*.graphql",
  generates: {
    "src/graphql/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withResultType: true,
        reactApolloVersion: 3,
        apolloReactHooksImportFrom: "@apollo/client/react",
      },
    },
  },
};

export default config;
