<template>
    <div>
    <select class="custom-select" id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="001">One</option>
    <option value="002">Two</option>
    <option value="003">Three</option>
    <option value="004">four</option>
    <option value="005">005</option>
    <option value="006">006</option>
  </select>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'busquedas',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['id', 'nombre', 'stock', 'precio', 'color', 'destacado'])
    },
    methods: {
        // -- Metodos
    },
    // components: {},
}
</script>

<style scoped>

</style>