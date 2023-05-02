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
        users: UserResult
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

    input UpdateUsernameInput{
        id: ID!
        newUsername: String!
    }

    type Mutation{
        createUser(input:CreateUserInput): User 
        updateUsername(input:UpdateUsernameInput!): User
        deleteUser(id: ID!): User
    }

    enum Nationality {
        Vietnam
        Brazil
        China 
        Indian
    }

    type UserSucessfulresult {
        users: [User!]!
    }

    type UserErrorResult {
        message: String!
    }

    union UserResult = UserSucessfulresult | UserErrorResult

`;

module.exports = { typeDefs };