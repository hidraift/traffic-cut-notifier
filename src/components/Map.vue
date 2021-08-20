<template>
  <div class="text-center">
    <iframe 
        width="80%" 
        style="height: 80vh"
        :src="osmSource"
    >
    </iframe>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    name: 'Map',

    setup(){
      // OpenStreetMap url to consume
      const osmSource = ref('http://localhost:8080')

      return { osmSource }
    }
}
</script> 