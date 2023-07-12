import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  //   uri: "http://localhost:4000",
  //   uri: "https://2e81-125-161-116-9.ngrok-free.app ",
  //   uri: "http://192.168.1.15:4000",
  uri: "https://letterbox-nagara.damarnagara.site",
  cache: new InMemoryCache(),
});

export default client;
