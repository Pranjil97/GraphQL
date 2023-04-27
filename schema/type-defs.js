const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!  
        friends: [User]   
        favouriteMovies: [Movie] 
    }    

    type Movie{
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    input CreateUserInput{
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = Indian
    }

    type Mutation{
        createUser(input:CreateUserInput): User 
    }

    enum Nationality {
        Vietnam
        Brazil
        China 
    }

`;

module.exports = { typeDefs };