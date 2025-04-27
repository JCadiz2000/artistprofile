<template>
  <div>
    <Background/>
    <Profile/>
  </div>
</template>

<script>
import Profile from './components/Profile.vue'
import Background from './components/Background.vue'

export default {
  name: 'App',
  components: {
    Profile, Background
  }
}
</script>

<style>
body{
  background: black;
  height: 100%;
  width: auto;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
