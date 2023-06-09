const { UserList, MovieList } = require("../fakeData")
const _ = require("lodash");

const resolvers = {
    Query: {

        // USER RESOLVERS
        users: () => {
            if (UserList) { return { users: UserList } };

            return {
                message: "No users found in the database"
            }
        },
        user: (parent, args, context, info) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },

        // MOVIE RESOLVERS
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, { name })
            return movie;
        }
    },
    User: {
        favouriteMovies: (parent) => {
            return _.filter(MovieList, (movie) => { movie.yearOfPublication > 2010 })
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            console.log(user)
            const lastId = UserList(UserList.length - 1).id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        }
    },

    Mutation: {
        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input;
            let userUpdate = null;
            UserList.forEach((user) => {
                if (user.id === id) {
                    user.username = newUsername;
                    userUpdate = user;
                }
                return userUpdate;
            })
        }
    },
    Mutation: {
        deleteUser: (parent, args) => {
            const id = args.id;
            _.remove(UserList, (user) => { user.id === Number(id) })
            return null;
        }
    },

    UsersResult: {
        __resolveType(obj) {
            if (obj.users) {
                return obj.users
            }

            return obj.message;
        }
    }
}

module.exports = { resolvers };