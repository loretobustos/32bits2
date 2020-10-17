<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <br>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/busquedas" >Busquedas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ventas">Ventas</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/total" class="nav-link">Total</router-link>
          </li>

        </ul>
      </div>
      <br>
    </nav>
        <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Navegacion',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgba(245, 250, 250, 0.979);
}
.bg-dark{
  background-color: rgba(31, 30, 30, 0.863)
}
</style>