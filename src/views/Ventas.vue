<template>
  <div>
    <h1>Ventas {{Ventas}}</h1>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Ventas',
  components: {
  },

  data: function(){
    return {}
  },
  computed: {
    ...mapGetters(['ventas'])
  },
  methods: {

  },

}
</script>
