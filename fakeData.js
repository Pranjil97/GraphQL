const UserList = [
    {
        id: 1,
        name: 'Nguyen Van A',
        username: 'nguyenvana',
        age: 20,
        nationality: 'Vietnam',
        friends: [
            {
                id: 3,
                name: 'Nguyen Van C',
                username: 'nguyenvanc',
                age: 22,
                nationality: 'China'
            }
        ]
    },
    {
        id: 2,
        name: 'Nguyen Van B',
        username: 'nguyenvanb',
        age: 21,
        nationality: 'Brazil',
        friends: [
            {
                id: 1,
                name: 'Nguyen Van A',
                username: 'nguyenvana',
                age: 20,
                nationality: 'Vietnam',
            }
        ]
    },
    {
        id: 3,
        name: 'Nguyen Van C',
        username: 'nguyenvanc',
        age: 22,
        nationality: 'China',
        friends: [
            {
                id: 2,
                name: 'Nguyen Van B',
                username: 'nguyenvanb',
                age: 21,
                nationality: 'Brazil',
            }
        ]
    },
]

const MovieList = [
    {
        id: 1,
        name: 'Avengers: Endgame',
        yearOfPublication: 2019,
        isInTheaters: true
    },
    {
        id: 2,
        name: 'Avengers: Infinity War',
        yearOfPublication: 2018,
        isInTheaters: false
    },
    {
        id: 3,
        name: 'Avengers: Age of Ultron',
        yearOfPublication: 2015,
        isInTheaters: false
    },
    {
        id: 4,
        name: 'Avengers: The Avengers',
        yearOfPublication: 2012,
        isInTheaters: false
    },
]

module.exports = { UserList, MovieList };