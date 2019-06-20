<template>
<div class="dashboard">
    <div id="taskbar">
        <i class="fas fa-comment fa-5x"></i>
        <router-link to="/dashboard/friends"><i class="fas fa-user-friends fa-5x"></i></router-link>
        <router-link to="/dashboard/settings"><i class="fas fa-cog fa-5x"></i></router-link>
        <router-link to="" @click.native="signout"><i class="fas fa-sign-out-alt fa-5x"></i></router-link>
    </div>
    <div id="display">
        <router-view />
    </div>
</div>
</template>

<script>
import {
    auth
} from '../firebaseConfig'

export default {
    methods: {
        //TODO: confirm signout option
        signout: function () {
            auth.signOut().then( ()=> {
                this.$router.push('/')
            }).catch(function (error) {
                console.log(error.message)
            });

        }
    }
}
</script>

<style>
.dashboard {
    height: 100vh;
    display: grid;
    grid-template-columns: 10% 90%;

}

#taskbar {
    background-color: #242582;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#display {
    background-color: #2f2fa2;
}

i {
    color: #f64c72
}
</style>
