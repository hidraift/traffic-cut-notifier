<template>
  <div class="container">
    <h1 class="text-center">Traffic Cut Notifier</h1>
      <!--src="https://www.openstreetmap.org/export/embed.html?bbox=-82.55264282226564%2C22.971353928229505%2C-82.19009399414064%2C23.200960808078566&layer=mapnik"
      --> 
    <Map />
  </div> 
</template>

<script> 
  import Map from '@/components/Map.vue'

  export default {
    name: 'Home',
    components: { 
      Map
    }
    
  }
</script>
