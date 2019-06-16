const axios = require('axios')


export const createUserData = function (name, username, email) {
  axios.post('https://us-central1-quanta2.cloudfunctions.net/webApi/api/user', {
    name: name,
    username: username,
    email: email
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getUserData = async function (email) {
  try {
    const snapshot = await axios.get('https://us-central1-quanta2.cloudfunctions.net/webApi/api/user/' + email)
    sessionStorage.setItem("userdata", JSON.stringify(snapshot.data))
  
  } catch (error) {
    console.log(error)
  }
}