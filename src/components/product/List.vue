<template>
  <div>
    <h1>Listado de productos</h1>
    <ul>
      <div class="list header">
        <div class="list__id">Codigo</div>
        <div class="list__name">Nombre</div>
        <div class="list__stock">Stock</div>
        <div class="list__presio">Precio</div>
        <div class="list__color">Color</div>
        <div class="list__destacado">Destacado</div>
      </div>
      <li v-for="producto in productos" :key="producto.id">
        <div class="list">
          <div class="list__id">{{producto.codigo}}</div>
          <div class="list__name">{{producto.nombre}}</div>
          <div class="list__stock">{{producto.stock}}</div>
          <div class="list__presio">{{producto.presio}}</div>
          <div class="list__color">{{producto.color}}</div>
          <div class="list__destacado">{{producto.destacado}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'component-name',
  props: {
    productos:{
      type: Array,
      required: true,
    },
  },
  data: function(){
    return {}
  },
  // computed: {},
  methods: {
    // -- Metodos
  },
  // components: {},
}
</script>

<style scoped lang="scss">
  .header{
    width:30%;
  }
  li{
    display:block;
    width: 30%;
  }
  .list{
    display:flex;
    justify-content:center;
    border:1px solid black;
    text-align: left;

    &__id{
      flex-basis:15%;
      border-right: 1px solid black;
    }
    &__name{
      flex-basis:50%;
      border-right: 1px solid black;
    }
    &__stock{
      flex-basis:15%;
      border-right: 1px solid black;
    }
    &__presio{
        flex-basis:15%;
        border-right: 1px solid black;
    }
    &__color{
        flex-basis:15%;
        border-right: 1px solid black;
    }
    &__destacado{
        flex-basis:15%;
        border-right: 1px solid black;
    }
  }
</style>