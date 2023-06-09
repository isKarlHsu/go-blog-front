import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as Icons from '@element-plus/icons-vue' // 引入所有图标，并命名为 Icons
import 'element-plus/dist/index.css'

//导入代码高亮文件
import hljs from 'highlight.js'
//导入代码高亮样式
import 'highlight.js/styles/github-dark-dimmed.css'

import './assets/main.css'

const app = createApp(App)
// 通过遍历的方式注册所有 svg组件，会牺牲一点点性能
for (let i in Icons) {
    app.component(i, Icons[i])
}

app.use(ElementPlus)
app.use(router)

//自定义一个代码高亮指令
app.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})

app.mount('#app')
