<template>
  <div class="home">

       <h1>{{ titulo }}</h1>
        <h2>{{ subtitulo}}</h2>
  </div>

</template>

 <script>
// @ is an alias to /src
export default {
  name: 'Home',
//  components: {
  //},
      data: function(){
        return {

        titulo: 'Tienda 32Bits',
        subtitulo:'Juegos de PC y consolas'
        }
}
}
</script>