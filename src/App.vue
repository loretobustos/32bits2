<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'inicio'}">Inicio</router-link>
      <router-link :to="{name: 'busqueda'}">Busqueda</router-link>
      <router-link :to="{name: 'ventas'}">Ventas</router-link>
      <router-link :to="{name: 'total'}">Total</router-link>
    </div>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navegacion from '../src/components/Navegacion.vue'
export default {
     name: 'App',
    components:{
      Navegacion
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
