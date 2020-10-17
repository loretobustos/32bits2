<template>
    <div class="home">
        <img src="../assets/logo.png" alt=" Vue logo">
        <Navegacion msg="32 bits"/>
    </div>
</template>

<script>
import Navegacion from '../components/Navegacion.vue'
export default {
    name: 'Home',
    components: {
        Navegacion
    }

}
</script>