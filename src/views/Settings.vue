<template>
    <div class="settings">
        <div>
            <Logo/>
        </div>
            <Info/>

        
    </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import Info from "../components/Info.vue"
export default {
components:{
    Info,Logo
}
}
</script>

<style scoped> 
.settings{
    height: 100vh;
    color: white;
    display: grid;
    grid-template-rows: 20% 20% 60% ;
    }

    
</style>
