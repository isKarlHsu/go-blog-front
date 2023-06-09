<template>
  <el-scrollbar>
    <div class="detail-card">
      <div class="article-title">{{ article.title }}</div>
      <div class="article-foot">
        <div class="article-time">
          <el-icon color="#464646" size="12">
            <Calendar/>
          </el-icon>
          {{ article.created_at }}
        </div>
        <div class="article-tag">
          <a v-for="tag in article.article_tag" >#{{ tag.tag.name }}</a>
        </div>
      </div>
      <div class="article-content" v-highlight v-html="article.content"></div>
    </div>
  </el-scrollbar>
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
.article-title {
  font-size: 25px;
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
.article-tag >a{
  margin: 5px;
}
.detail-card {
  margin-bottom: 50px;
}
.post-content .wp-block-code {
  background-color: #F6F8FF;
  border-radius: 16px;
  font-size: 16px;
  padding: 22px 22px 22px 38px;
  margin-top: 22px;
  margin-bottom: 22px;
}
.post-content .wp-block-code {
  line-height: 1.2;
  font-size: 15px;
  padding: 10px;
  overflow-x: auto;
}
.post-content .wp-block-code code {
  position: relative;
  background-color: unset !important;
}
</style>