import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "@/utils/Apollo-Client";
import { CartProvider } from "@/context/CartContext";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ApolloProvider>
  );
}
