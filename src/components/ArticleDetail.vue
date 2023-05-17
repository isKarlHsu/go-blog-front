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
        <el-scrollbar height="900px">
          <el-tabs class="demo-tabs">
            <el-tab-pane label="HOME" name="first">HOME</el-tab-pane>
            <el-tab-pane label="POSTS" name="second">POSTS</el-tab-pane>
            <el-tab-pane label="CATES" name="third">CATES</el-tab-pane>
            <el-tab-pane label="TAGS" name="fourth">TAGS</el-tab-pane>
            <el-tab-pane label="ABOUT" name="fifth">ABOUT</el-tab-pane>
          </el-tabs>
          <div class="detail-card">
            <div class="article-title">{{ article.title }}</div>
            <div class="article-time">
              <el-icon color="#464646" size="18">
                <Calendar/>
              </el-icon>
              {{ article.created_at }}
            </div>
            <!--            <div class="article-abstract">{{article.abstract}}</div>-->
            <div class="article-content" v-html="article.content"></div>
            <!--      <div class="article-tag">{{article.tag}}</div>-->
          </div>
        </el-scrollbar>
      </el-card>
    </el-container>
  </div>

</template>


<script>
import {getArticleDetail} from "../api/article";
import router from "../router";

export default {
  data() {
    return {
      article: {},
      article_id: 0
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      this.article_id = parseInt(router.currentRoute.value.params.article_id)
      getArticleDetail({articleId: this.article_id}).then(res => {
        this.article = res.data
      })
    }
  }
}


</script>

<style>
.card-left {
  text-align: center;
  height: 100%;
}

.username {
  font-size: 30px;
}

.introduction {
  font-size: 16px;
}

.portrait > img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
}

.card-left {
  width: 30%;
}

.card-right {
  width: 70%;
}

.article-title {
  font-size: 20px;
  color: #464646;
  text-decoration: none;
}

.article-content {
  font-size: 16px;
}

.article-time {
  font-size: 14px;
  color: #464646;
  line-height: 30px;
  align-items: center;
}

.article-tag {
  font-size: 14px;
  color: #9f9f9f;
}
.detail-card {
  margin-bottom: 50px;
}
</style>