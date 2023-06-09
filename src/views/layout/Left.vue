<template>
    <div class="userinfo">
      <div class="portrait">
        <img src="/src/assets/image/portrait.jpg" alt="">
      </div>
      <div class="username">
        Karl Xu
      </div>
      <div class="introduction">
        PHP&GO 后端开发，正在努力学习前端中...
      </div>
      <div class="footer">
        <a href="https://beian.miit.gov.cn/">粤ICP备17085667号</a>
      </div>
    </div>
</template>

<script>
export default {
  name: "Left"
}
</script>

<style>
.userinfo {
  text-align: center;
}
.portrait >img {
  margin-top: 300px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
}
.username{
  font-size: 30px;
}
.introduction{
  font-size: 16px;
}
.footer {
  margin-top: 300px;;
  height: 60px; /* Height of the footer */
}
.footer >a {
  text-decoration: none;
  color: #464646;
}
</style>