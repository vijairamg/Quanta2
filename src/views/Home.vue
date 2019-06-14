<template>
<section class="hero is-info is-fullheight">
  <div class="hero-body">
    <div class="container">
      <logo/>
      <!-- <h2 class="subtitle">
        The world is yours
      </h2> -->
      <div id="cta">
        <router-link to='/signup' style="margin-right:1em" class="button is-danger is-size-5 is-family-primary	">Sign Up</router-link>
        <router-link to='/login' class="button is-danger is-size-5 is-family-primary	">Login</router-link>
      </div>
    </div>
  </div>
</section>  
</template>

<script>
import Logo from '../components/Logo.vue'

export default {
  name: 'home',
  components: {
    Logo
}
}
</script>

<style>
#cta{
  display: flex;
  flex-direction: row;
  justify-content: center;
}


</style>



