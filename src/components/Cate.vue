<template>
  <div class="post-card">
    <div class="post" v-for="(item, key) in this.cates">
      <div class="post-year">{{ item.name }}</div>
      <div style="cursor:pointer"  class="post" v-for="post in item.articles" @click=articleDetail(post.article_id)>
        <div class="post-title">{{ post.title }}</div>
      </div>
      <el-divider />
    </div>
  </div>
</template>


<script>
import {getCates} from "../api/article.js";
import router from "../router";

export default {
  data() {
    return {
      cates: [],
    }
  },
  created() {
    this.getCateList()
  },
  methods: {
    getCateList() {
      getCates(this).then(res => {
        this.cates = res.data
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