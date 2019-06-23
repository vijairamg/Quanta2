
const {request} = require('graphql-request')


export const createUser = async function(username , name , email){
    const query = `  mutation createUser ($username: String!, $name: String!, $email: String!) {
        createUser(username: $username, name: $name, email: $email) { username }
      }
        `

    const variables = {
        username ,
        name ,
        email 

    }
        let data = await sendRequest(query,variables)
    if(data)
    {
        console.log(`${data.createUser.username} added to the server`)
    }
    else{
        console.log("User is not added")
    }
}


const sendRequest = async function(query,variables){
    try{
    const data =   await  request('https://qmaxserver.herokuapp.com/graphql',query,variables)
    return data 
    }catch(error){
        console.log(error.message)
        return null 
    }
}
