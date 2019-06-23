<template>
<div class="Signup">
    <div class="img" />
    <!--Image for the leftside-->

    <div class="action">
        <logo />
        <div id="form">
            <b-field label="Name" :type="errorState.name" :message="errorMessage.name">
                <b-input v-model="name" />
            </b-field>

            <b-field label="Email">
                <b-input v-model="email" type="email" maxlength="30" />
            </b-field>

            <b-field label="Username" :type="errorState.username" :message="errorMessage.username">
                <b-input v-model="username" maxlength="30"></b-input>
            </b-field>

            <b-field label="Password">
                <b-input v-model="password" type="password" maxlength="30"></b-input>
            </b-field>

            <b-button @click="validateData" :loading="lstate" type="is-info" size="is-size-5">
                Signup
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
import {createUser} from '../server.js'

export default {
    name: 'signup',
    data: function () {
        return {
            email: "",
            password: "",
            lstate: false, //loading flag
            username: "",
            name: "",
            errorState: {
                name: "",
                username: "",
                password: false
            },
            errorMessage: {
                username: "",
                name: ""
            }
        }
    },
    components: {
        Logo
    },
    methods: {

        validateData: function () {
            this.lstate = true
            let vstatus = true
            if (this.username.length < 6) {
                
                this.errorState.username = "is-danger"
                this.errorMessage.username = "Username invalid"
                vstatus = false
            } else {
                
                this.errorState.username = ""
                this.errorMessage.username = ""
            }

            if (this.name.length === 0) {
                
                this.errorState.name = "is-danger"
                this.errorMessage.name = "name invalid"
                vstatus = false
            } else {
                
                this.errorState.name = ""
                this.errorMessage.name = ""
            }

            if (vstatus) {
                console.log("Ready to go")
                this.createUser()
            } else {
                this.lstate = false
            }
        },
        createUser: function () {
            this.lstate = true

            
            auth.createUserWithEmailAndPassword(this.email, this.password).then(() => {
                createUser(this.username,this.name,this.email)
               
                this.$toast.open({
                    message: "Account created",
                    type: "is-success"
                })
                this.lstate = false
                this.$router.push('login')
            }).catch((error) => {
                console.log(error) // Handle Errors here.
                this.lstate = false
            })

        },
        
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
    padding: 0em 10em;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url("../assets/signup_img.jpg");
    background-position: center;
    padding: 0em 0em 0em 0em;
    background-repeat: no-repeat;
    background-color: #181743;

}
</style>
