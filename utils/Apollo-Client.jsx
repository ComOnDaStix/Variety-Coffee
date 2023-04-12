import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://c2ec12.myshopify.com/api/2022-04/graphql.json',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': '969fc3cc40251cfc289f9c150daa6058',
    },
    cache: new InMemoryCache(),
  });

export default client;