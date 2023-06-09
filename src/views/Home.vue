<template>
    <div class="common-layout">
      <el-container>
        <el-card class="card-left">
          <Left />
        </el-card>
        <el-card class="card-right">
            <Tab :tabName="tabName" />
            <el-scrollbar height="900px">
              <div class="content">
                <RouterView />
              </div>
            </el-scrollbar>
        </el-card>
      </el-container>
    </div>
</template>


<script setup>
import Left from "./layout/Left.vue";
import Tab from "./layout/Tab.vue";
import {onMounted, ref} from "vue";

const tabName = ref()
function getTabName() {
  let tame = localStorage.getItem("tabName")
  console.log(tame);
  tabName.value = tame
}
onMounted(()=>{
  getTabName()
})
</script>

<style>
.common-layout {
  height: 100%;
}
.card-left{
  width:30%;
}
.card-right{
  width:70%;
  height: 100%;
}

</style>