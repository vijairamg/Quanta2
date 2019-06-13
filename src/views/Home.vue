<template>
<section class="hero is-info is-fullheight">
  <div class="hero-body">
    <div class="container">
      <logo/>
      <!-- <h2 class="subtitle">
        The world is yours
      </h2> -->
      <h2>
        <router-link to='/signup' class="button is-danger is-size-5 is-family-primary	">Sign Up</router-link>
      </h2>
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


</style>



