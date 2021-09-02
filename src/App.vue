<template>
  <router-view/>  
</template>

<script>
import axios from 'axios'
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  setup() { 
    
    onMounted(async () =>{
      const store = useStore()

      try {
        const urlApi = 'https://datosabiertos.malaga.eu/api/3/action/datastore_search?resource_id=c9eb7aea-2f85-46df-8007-c95fe3819a1e'
        const data = await axios.get(urlApi)
        const cutArr = data.data.result.records  
        const finalCutsArr = []

        // Parse html
        cutArr.forEach(item => { 
          const cut = {}
          cut.id = item._id
          cut.html = item.description
          cut.pointX = item.wkb_geometry.split(' ')[1].slice(1)
          cut.pointY = item.wkb_geometry.split(' ')[2].slice(0,-1)
          
          var ele = document.createElement('html')
          ele.innerHTML = cut.html
  
          // <b> Elements
          const bArr = ele.getElementsByTagName('b')

          bArr.forEach(item => {
            switch (item.innerHTML){
              case 'Afectación:':
                cut.affectation = item.nextSibling.data.trim()
                break
              case 'Tipo de Corte:':
                cut.type = item.nextSibling.data.trim()
                break
              case 'Descripción:':
                cut.description = item.nextSibling.data.trim()
                break
              case 'Notas:':
                cut.notes = item.nextSibling.data.trim()
                break
              case 'Ubicación:':
                cut.ubication = item.nextSibling.data.trim()
                break
              case 'Desde:':
                cut.beginDate = item.nextSibling.data.trim().slice(0,-2)
                break
              case 'Hasta:':
                cut.endDate = item.nextSibling.data.trim().slice(0,-2)
                break
              case 'Hora inicio:':
                cut.beginHour = item.nextSibling.data.trim()
                break
              case 'Hora fin:':
                cut.endHour = item.nextSibling.data.trim()
                break
              default:
                console.log(item.innerHTML)
            }    
          }) 
          finalCutsArr.push(cut)
        });

        // Storing in vuex store
        store.dispatch('initCuts', finalCutsArr)
      } catch (error) {
        console.log(error)
      }
    })
  }
  
}
</script>