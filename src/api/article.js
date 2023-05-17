import request from '../utils/request' // 引入封装得axios

// 获取文章列表
export function getArticleList (data) {
    return request({
        url: '/articleList',
        method: 'POST',
        data
    })
}

// 获取文章详情
export function getArticleDetail(data) {
    return request({
        url: '/article',
        method: 'POST',
        data
    })
}

// 获取 Post
export function getPosts(data) {
    return request({
        url: '/posts',
        method: 'POST',
        data
    })
}

// 获取分类
export function getCates(data) {
    return request({
        url: '/cates',
        method: 'POST',
        data
    })
}