<template>
    <div class="dashboard">
        <div id="taskbar">
            <i class="fas fa-comment fa-5x"></i>
            <i class="fas fa-user-friends fa-5x"></i>
            <router-link to="/dashboard/settings"><i class="fas fa-cog fa-5x"></i></router-link>
            <i class="fas fa-sign-out-alt fa-5x"></i>
        </div>
        <div id="display">
                <router-view/>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.dashboard{
    height: 100vh;
    display: grid;
    grid-template-columns: 10% 90% ;

}

#taskbar{
    background-color: #242582;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#display{
    background-color: #2f2fa2;
}

i{
    color: #f64c72
}
</style>
