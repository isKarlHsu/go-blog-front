<template>
    <el-tabs v-model="tabName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="HOME" name="">
      </el-tab-pane>
      <el-tab-pane label="POSTS" name="posts">
      </el-tab-pane>
      <el-tab-pane label="CATES" name="cates">
      </el-tab-pane>
      <el-tab-pane label="TAGS" name="fourth">TAGS</el-tab-pane>
      <el-tab-pane label="ABOUT" name="about"></el-tab-pane>
    </el-tabs>
</template>

<script setup>
import router from "@/router";
import {defineProps, ref} from "vue";
const props = defineProps({
  tabName: String,
});
const tabName = ref(props.tabName)
console.log(tabName.value)
const handleClick = (tab) => {
  console.log(tab.props.name);
  tabName.value = tab.props.name
  localStorage.setItem("tabName", tabName.value)
  router.push('/' + tab.props.name)
}
</script>

<style scoped>

</style>