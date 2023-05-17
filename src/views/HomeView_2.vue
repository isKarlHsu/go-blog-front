<template>
    <div class="common-layout">
      <el-container>
        <el-aside class="card-aside"></el-aside>
        <el-main class="card-main">
          <div class="article">

          </div>
        </el-main>
      </el-container>
    </div>

</template>


<script setup>
</script>

<style>
.common-layout{
  /*margin: 0 auto;*/
  /*width:fit-content;*/
}
.card-aside{
  margin-left: 5%;
  /*width:30%;*/
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  background-color: rgba(255,255,255,0.46);
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 0.3)
}
.card-main{
  margin-left: 5%;
  margin-right: 5%;
  /*width:50%;*/
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  background-color: rgba(255,255,255,0.46);
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 0.3)
}
</style>