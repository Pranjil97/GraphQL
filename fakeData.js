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

module.exports = { UserList };