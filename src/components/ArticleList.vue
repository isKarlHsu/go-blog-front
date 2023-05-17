<template>
  <div class="article-card" v-if="this.article_card_show">
    <div class="article" v-for="item in this.articles" @click=articleDetail(item.article_id)>
      <div class="article-title">{{ item.title }}</div>
      <div class="article-abstract">{{ item.abstract }}</div>
      <!--      <div class="article-content">{{item.content}}</div>-->
      <div class="article-time">
        <el-icon color="#464646" size="18">
          <Calendar/>
        </el-icon>
        {{ item.created_at }}
      </div>
      <!--      <div class="article-tag">{{item.tag}}</div>-->
      <el-divider />
    </div>
    <div class="example-pagination-block">
      <el-pagination
          :page-size="this.page.page_size"
          :page-count="this.page.pages"
          :total="this.page.total"
          layout="prev, pager, next"
          v-model:current-page="this.page.current_page"
          @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>


<script>
import {getArticleList} from "../api/article.js";
import router from "../router";

export default {
  data() {
    return {
      article_card_show: true,
      articles: [],
      page: {
        current_page: 0,
        page_size: 0,
        pages: 0,
        total: 0,
      },
      paginate: {
        page: 1,
        pageSize: 5
      }
    }
  },
  created() {
    let page = router.currentRoute.value.query.page ?? 1
    this.paginate.page = parseInt(page)
    this.getList()
  },
  methods: {
    getList() {
      getArticleList(this.paginate).then(res => {
        this.articles = res.data.list
        this.page.current_page = res.data.current_page
        this.page.page_size = res.data.page_size
        this.page.pages = res.data.pages
        this.page.total = res.data.total
      })
    },
    handleCurrentChange(val){
      this.paginate.page = val
      let url = location.pathname + '?page=' + val
      history.pushState({url: url, title: document.title}, document.title, url)
      this.getList()
    },
    articleDetail(val){
      console.log(val)
      router.push('./ArticleDetail/' + val)
    }
  }
}

</script>

<style>
.article {
  margin: 0 0 10px 0;
}

.article-title {
  font-size: 20px;
  text-decoration: none;
  line-height: 40px;
}

.article-abstract {
  font-size: 16px;
}

.article-time {
  font-size: 14px;
  line-height: 30px;
  align-items: center;
}

.article-tag {
  font-size: 14px;
  color: #9f9f9f;
}

</style>