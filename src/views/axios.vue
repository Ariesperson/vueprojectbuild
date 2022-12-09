<template>
  <div>111</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Axios from '@/utils/axios'

export default defineComponent({
  name: 'AxiosPage',
  setup() {
    Axios.get('/users/XPoet')
      .then((res) => {
        console.log('res: ', res)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }
})
</script>
