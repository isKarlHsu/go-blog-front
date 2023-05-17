<template>
    <div class="common-layout">
      <el-container>
        <el-card class="card-left">
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
        </el-card>
        <el-card class="card-right">
          <el-scrollbar>
          <!--          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">-->
          <el-tabs v-model="this.tabName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="HOME" name="first">
              <ArticleList />
            </el-tab-pane>
            <el-tab-pane label="POSTS" name="second">
            <Post />
            </el-tab-pane>
            <el-tab-pane label="CATES" name="third">
              <Cate />
            </el-tab-pane>
            <el-tab-pane label="TAGS" name="fourth">TAGS</el-tab-pane>
            <el-tab-pane label="ABOUT" name="fifth">ABOUT</el-tab-pane>
          </el-tabs>
          </el-scrollbar>
        </el-card>
      </el-container>
    </div>

</template>


<script>
import ArticleList from "../components/ArticleList.vue";
import Post from "../components/Post.vue"
import Cate from "../components/Cate.vue"

export default {
  components: {
    ArticleList,
    Post,
    Cate
  },
  data() {
    return {
      tabName: null,
    }
  },
  created() {
    this.getTabName()
  },
  methods: {
    handleClick(tab){
      console.log(tab.props.name);
      this.tabName = tab.props.name
      localStorage.setItem("tabName", tab.props.name)
    },
    getTabName(){
      let tabName = localStorage.getItem("tabName")
      if (tabName == null) {
        tabName = "first"
        localStorage.setItem("tabName", tabName)
      }
      console.log(tabName);
      this.tabName = tabName
    }
  }
}


</script>

<style>
.el-card__body{
  height: 870px;
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

.card-left{
  width:30%;
}
.card-right{
  width:70%;
  height: 100%;
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