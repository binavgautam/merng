import React from 'react'
import ApolloClient, {InMemoryCache, createHttpLink, ApolloProvider} from 'apollo-client'
import App from './App'

const httpLink = createHttpLink({
    url: "http://localhost:5000"
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default  (
        <div>
            <ApolloProvider client={client}>
                <App/>
            </ApolloProvider>
        </div>
);


