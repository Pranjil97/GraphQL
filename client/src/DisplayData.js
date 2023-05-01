import React from 'react'
import { useQuery, gql } from '@apollo/client'

const QUERY_ALL_USERS = gql`
    query GetAllUsers{
        users { 
            id
            name
            age
        }
    }
`
const DisplayData = () => {
    const { loading, error, data } = useQuery(QUERY_ALL_USERS);
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
    return (data && data.users.map((user, key) => {
        return <div key={key}>
            <h1>id: {user.id}</h1>
            <h1>Name: {user.name}</h1>
            <h1>age: {user.age}</h1>
        </div>
    }))
}
export default DisplayData