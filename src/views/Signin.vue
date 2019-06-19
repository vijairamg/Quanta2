<template>
<div class="Signup">
    <div class="img" />
    <!--Image for the leftside-->

    <div class="action">
        <logo />
        <div id="form">

            <b-field label="Email">
                <b-input v-model="email" type="email" icon-pack="fas" icon="envelope" />
            </b-field>

            <b-field label="Password">
                <b-input v-model="password" type="password" icon-pack="fas" icon="lock" password-reveal></b-input>
            </b-field>

            <b-button @click="authenticate" :loading="lstate" type="is-info" size="is-size-5">
                Login
            </b-button>
        </div>
    </div>
</div>
</template>

<script>
import Logo from '../components/Logo.vue'
import {
    auth
} from '../firebaseConfig'

import {
    getUserData,
    getChatkitUser
} from '../user.js'

export default {
    name: 'signup',
    data: function () {
        return {
            email: "",
            password: "",
            lstate: false //loading flag
        }
    },
    components: {
        Logo
    },
    methods: {
        authenticate: async function () {
            this.lstate = true
            try {
                await auth.signInWithEmailAndPassword(this.email, this.password)
                
                
                await getUserData(this.email)
                await getChatkitUser(sessionStorage.getItem("username"))
                this.lstate = false
                this.$toast.open({
                    message: "Logged in",
                    type: "is-success"
                })
                this.$router.push('dashboard')

            } catch (error) {
                this.loginError(error) // Handle Errors here.                
            }

        },
        loginError: function (error) {
            this.lstate = false
            this.$toast.open({
                message: error.message,
                type: "is-danger"
            })
        }
    }
}
</script>

<style>
.Signup {
    height: 100vh;
    display: grid;
    grid-template-columns: 50% 50%;
}

.action {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#form {
    padding: 0em 15em;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url("../assets/login_img.jpg");
    background-position: center;
    padding: 0em 0em 0em 0em;
    background-repeat: no-repeat;
    background-color: #181743;

}
</style>
