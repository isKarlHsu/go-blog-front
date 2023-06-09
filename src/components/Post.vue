<template>
  <div class="post-card">
    <div class="post" v-for="(item, key) in this.posts">
      <div class="post-year">{{ key }}</div>
      <div style="cursor:pointer"  class="post" v-for="post in item" @click=articleDetail(post.article_id)>
        <div class="post-title">{{ post.title }}</div>
      </div>
      <el-divider />
    </div>
  </div>
</template>


<script>
import {getPosts} from "../api/article.js";
import router from "../router";

export default {
  data() {
    return {
      posts: [],
    }
  },
  created() {
    this.getPostList()
  },
  methods: {
    getPostList() {
      getPosts(this).then(res => {
        this.posts = res.data
      })
    },
    articleDetail(val) {
      router.push('/article/' + val)
    }
  }
}

</script>

<style>
.post-card {
  margin-bottom: 30px;
}

.post-year {
  font-size: 24px;
  line-height: 40px;
}

.post-title {
  font-size: 16px;
  line-height: 40px;
  text-decoration: none;
}

</style>