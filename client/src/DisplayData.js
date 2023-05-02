import React, { useState } from 'react'
import { useQuery, useLazyQuery, gql, useMutation } from '@apollo/client'

const QUERY_ALL_USERS = gql`
    query GetAllUsers{
        users { 
            id
            name
            age
        }
    }
`
// const USER_BY_ID = gql`
// query User($id:ID!){
//     user(id:$id){
//         id : ID!
//         name: String!
//         age: Int!
//     }
// `

const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input: CreateUserInput!){
        createUser(input: $input){
            name
            id
        }
    }
`


const DisplayData = () => {

    // const [searchId, setSearchId] = useState("")

    // Create a new user
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [age, setAge] = useState(0)
    const [Nationality, setNationality] = useState("")

    const { loading, error, data, refetch } = useQuery(QUERY_ALL_USERS);
    // const [fetchUserById, { loading: loading2, error: error2, data: data2 }] = useLazyQuery(USER_BY_ID);

    const [createUser] = useMutation(CREATE_USER_MUTATION)


    if (loading) {
        return <h1>Loading...</h1>
    }
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
    // if (error2) {
    //     console.log(error)
    // }
    return <div>

        <div>
            <input type='text' placeholder='Name...' onChange={(event) => { setName(event.target.value) }} />
            <input type='text' placeholder='Username' onChange={(event) => { setUsername(event.target.value) }} />
            <input type='number' placeholder='Age...' onChange={(event) => { setAge(event.target.value) }} />
            <input type='text' placeholder='Nationality...' onChange={(event) => { setNationality(event.target.value) }} />
            <button onClick={() => { createUser({ variables: { input: { name, username, age, Nationality } } }) }}>Create User</button>
        </div>

        {data && data.users.map((user, key) => {
            return <div key={key}>
                <h1>id: {user.id}</h1>
                <h1>Name: {user.name}</h1>
                <h1>age: {user.age}</h1>
            </div>
        })}

        {/* <div>
            <input type="text" placeholder="Enter id" onChange={(event) => { setSearchId(event.target.value) }} />
            <button onClick={() => {
                fetchUserById({
                    variables: {
                        id: searchId
                    }
                })
            }}>Fetch Data</button>
            <div>
                {data2.user && <div>
                    <h1>Name: {data2.user.name}</h1>
                    <h1>age: {data2.user.age}</h1>
                </div>}
                {error2.user && <div>
                    <h1>Error loading user</h1>
                </div>}
            </div>
        </div> */}
    </div>
}
export default DisplayData