import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "@/utils/Apollo-Client";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ApolloProvider>
  );
}
