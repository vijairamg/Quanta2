
const axios = require('axios')
const chatkitURL = "https://quanta2.herokuapp.com/user"
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

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

export const createChatkitUser = async function (username, name) {
  try {
    const user = await axios.post(chatkitURL, {
      username: username,
      name: name
    })
    console.log("user added to chatkit")
    sessionStorage.setItem("chatkitUser", JSON.stringify(user))
  } catch (error) {
    console.log(error.message)
  }
}

export const getUserData = async function (email) {
  try {
    const snapshot = await axios.get('https://us-central1-quanta2.cloudfunctions.net/webApi/api/user/' + email)
    sessionStorage.setItem("userdata", JSON.stringify(snapshot.data))

  } catch (error) {
    console.log(error)
  }
}

export const getChatkitUser = async function (username) {
  try {
    const user = await axios.get(chatkitURL+`/${username}`)
    sessionStorage.setItem("chatkitUser", JSON.stringify(user))
  } catch (error) {
    console.log(error.message)
  }
  
}

