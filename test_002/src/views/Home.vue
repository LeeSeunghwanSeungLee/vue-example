<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>seunghwan coder</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <seunghwan/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import seunghwan from '@/components/seunghwan.vue';
export default {
  name: 'Home',
  components: {
    HelloWorld,
    seunghwan
  }
}
</script>


<style scoped>
h1{
  color : red;
}
</style>