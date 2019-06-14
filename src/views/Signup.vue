<template>
<div class="Signup">
    <div class="img" />
    <!--Image for the leftside-->

    <div class="action">
        <logo />
        <div id="form">
            <b-field label="Name">
                <b-input />
            </b-field>

            <b-field label="Email">
                <b-input type="email" maxlength="30" />
            </b-field>

            <b-field label="Username">
                <b-input maxlength="30"></b-input>
            </b-field>

            <b-field label="Password">
                <b-input type="password" maxlength="30"></b-input>
            </b-field>

            <b-button tag="router-link" to="/dashboard" type="is-info" size="is-size-5">
                Signup
            </b-button>
        </div>
    </div>
</div>
</template>

<script>
import Logo from '../components/Logo.vue'

export default {
    name: 'signup',
    components: {
        Logo
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
