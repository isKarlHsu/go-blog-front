<template>
  <div class="about-me" v-html="content"></div>
</template>


<script setup>
import {getAbout} from "../api/user.js";

import {onMounted, ref} from "vue";

const content = ref()
const getAboutDetail = async () => {
  await getAbout().then(res => {
    content.value = res.data.value
  })
}
onMounted(()=>{
  getAboutDetail()
})
</script>

<style>
</style>