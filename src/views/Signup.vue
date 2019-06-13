<template>
<div class="Signup">
  <div class="img">
       
  </div>
  <div class="action">
    <b-field label="Name">
            <b-input value="Kevin Garvey"></b-input>
    </b-field>

    <b-field label="Email"
            type="is-danger"
            message="This email is invalid">
            <b-input type="email"
                value="john@"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Username"
            type="is-success"
            message="This username is available">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password"
            type="is-warning"
            :message="['Password is too short', 'Password must have at least 8 characters']">
            <b-input value="123" type="password" maxlength="30"></b-input>
        </b-field>

        <b-button tag="router-link"
                to="/dashboard"
                type="is-info">
                Login
          </b-button>
  </div>
</div> 
</template>

<script>
export default {
    name: 'signup',
  components: {
  }
}
</script>

<style>
.Signup{
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50% ;  
}

.action{
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 5em 8em;

}

.img{
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("../assets/signup_img.jpg");
 background-position: center;
  padding: 0em 0em 0em 0em ;
  background-repeat: no-repeat;
  background-color: #181743;
  
}
</style>
