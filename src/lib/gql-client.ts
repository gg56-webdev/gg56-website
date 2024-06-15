import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(import.meta.env.CMS_ENDPOINT, {
  headers: import.meta.env.DEV
    ? {
        Authorization: `Bearer ${import.meta.env.CMS_DEV_TOKEN}`,
      }
    : {},
});

export default client;
